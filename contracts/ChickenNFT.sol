// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./EGGS.sol";

contract ChickenNFT is ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    struct Chicken {
        uint256 attackPower;
        uint256 defensePower;
        uint256 intelligencePoints;
        uint256 speed;
        uint256 birthTime;
        uint256 nextEggMintedTime;
        uint256 level;
        bool isDead;
    }

    Counters.Counter private _tokenIdCounter;
    EGGS public eggsToken;
    mapping(uint256 => Chicken) public chickens;
    uint256[] public aliveChickens;
    // uint256 public eggMintLockTime = 1 days;
    uint256 public eggMintLockTime = 1 minutes;

    constructor(address _eggsToken) ERC721("ChickenNFT", "CHICKEN") {
        eggsToken = EGGS(_eggsToken);
    }

    function createChicken() external payable {
        require(msg.value == 10 ether, "Cost for creating a chicken is 10 SMR");
        require(
            eggsToken.balanceOf(msg.sender) >= 1,
            "Need 1 EGGS token to create chicken"
        );

        eggsToken.burnFrom(msg.sender, 1 * 10 ** 18);

        _createChicken();
    }

    function _createChicken() private {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(msg.sender, tokenId);

        Chicken memory newChicken = Chicken({
            attackPower: randomAttribute(),
            defensePower: randomAttribute(),
            intelligencePoints: randomAttribute(),
            speed: randomAttribute(),
            birthTime: block.timestamp,
            nextEggMintedTime: block.timestamp.add(eggMintLockTime),
            level: 1,
            isDead: false
        });

        chickens[tokenId] = newChicken;
        aliveChickens.push(tokenId);
    }

    function fight(uint256 myTokenId) external payable {
        require(msg.value == 10 ether, "Cost for a fight is 10 SMR");
        require(
            ownerOf(myTokenId) == msg.sender,
            "You do not own this chicken"
        );
        require(!chickens[myTokenId].isDead, "Your chicken is dead");
        require(aliveChickens.length > 1, "No opponents available.");

        uint256 opponentTokenId = findRandomOpponent(myTokenId);

        Chicken storage myChicken = chickens[myTokenId];
        Chicken storage opponentChicken = chickens[opponentTokenId];

        uint256 myPower = calculateTotalPower(myChicken);
        uint256 opponentPower = calculateTotalPower(opponentChicken);

        if (myPower >= opponentPower) {
            myChicken.level += 1;
            eggsToken.mint(msg.sender, 1 * 10 ** 18);
        } else {
            myChicken.isDead = true;
            eggsToken.mint(ownerOf(opponentTokenId), 1 * 10 ** 18);
            removeDeadChicken(myTokenId);
        }
    }

    function calculateTotalPower(
        Chicken memory chicken
    ) private pure returns (uint256) {
        uint256 powerFromAttributes = chicken
            .attackPower
            .add(chicken.defensePower)
            .add(chicken.intelligencePoints)
            .add(chicken.speed);
        uint256 powerFromLevel = chicken.level.mul(10); // Every level adds 10 power points

        return powerFromAttributes.add(powerFromLevel);
    }

    function mintEgg(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "You do not own this chicken");
        require(!chickens[tokenId].isDead, "Chicken has passed away");
        require(
            block.timestamp > chickens[tokenId].nextEggMintedTime,
            "Chicken is not ready to lay an egg"
        );
        chickens[tokenId].nextEggMintedTime = block.timestamp.add(eggMintLockTime);
        eggsToken.mint(msg.sender, 1 * 10 ** 18);
        checkAlive(tokenId); // This function could mark the chicken as dead
    }

    function checkAlive(uint256 tokenId) private {
        if (!chickens[tokenId].isDead) {
            uint256 daysAlive = (block.timestamp -
                chickens[tokenId].birthTime) / 1 days;
            uint256 deathChance = daysAlive > 10 ? 100 : daysAlive * 10; // 10% chance increase every day
            uint256 randomFactor = uint256(
                keccak256(abi.encodePacked(block.timestamp, tokenId))
            ) % 100;

            if (randomFactor < deathChance) {
                chickens[tokenId].isDead = true;
            }
        }
    }

    // function to allow users to hatch an egg if they own a chicken
    function hatchEgg(uint256 tokenId) external {
        // We'll use the same logic as mintEgg to check for eligibility
        require(ownerOf(tokenId) == msg.sender, "You do not own this chicken");
        require(!chickens[tokenId].isDead, "Chicken has passed away");


        require(
                    block.timestamp > chickens[tokenId].nextEggMintedTime,
                    "Chicken is not ready to hatch an egg"
                );

        require(
            eggsToken.balanceOf(msg.sender) >= 1,
            "Need 1 EGGS token to create chicken"
        );

        eggsToken.burnFrom(msg.sender, 1 * 10 ** 18);
        
        // Set the lastEggMintedTime to 3 days in the future
        chickens[tokenId].nextEggMintedTime = block.timestamp + (3 * eggMintLockTime);

        _createChicken();


    }


    function randomAttribute() private view returns (uint256) {
        return
            (uint256(
                keccak256(
                    abi.encodePacked(block.timestamp, _tokenIdCounter.current())
                )
            ) % 10) + 1;
    }

    function findRandomOpponent(
        uint256 myTokenId
    ) private view returns (uint256) {
        uint256 randomIndex;
        do {
            randomIndex =
                uint256(
                    keccak256(abi.encodePacked(block.timestamp, myTokenId))
                ) %
                aliveChickens.length;
        } while (aliveChickens[randomIndex] == myTokenId);

        return aliveChickens[randomIndex];
    }

    function removeDeadChicken(uint256 deadTokenId) private {
        uint256 indexToRemove;
        for (uint256 i = 0; i < aliveChickens.length; i++) {
            if (aliveChickens[i] == deadTokenId) {
                indexToRemove = i;
                break;
            }
        }

        // Swap the chicken to remove with the last one
        aliveChickens[indexToRemove] = aliveChickens[aliveChickens.length - 1];
        aliveChickens.pop();
    }

    // If we want to udüate the ChickenNFT contract, we can transfer the EGGS ownership to a new contract
    function transferEggsOwnership(address newOwner) external onlyOwner {
        eggsToken.transferOwnership(newOwner);
    }

    function getChickenDetails(
        uint256 tokenId
    )
        external
        view
        returns (
            uint256 attackPower,
            uint256 defensePower,
            uint256 intelligencePoints,
            uint256 speed,
            uint256 level,
            uint256 nextEggMintedTime,
            uint256 birthTime,
            bool isDead
        )
    {
        Chicken storage chicken = chickens[tokenId];
        return (
            chicken.attackPower,
            chicken.defensePower,
            chicken.intelligencePoints,
            chicken.speed,
            chicken.level,
            chicken.nextEggMintedTime,
            chicken.birthTime,
            chicken.isDead
        );
    }
}
