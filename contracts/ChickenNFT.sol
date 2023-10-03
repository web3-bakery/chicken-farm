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

    uint256 public lastCycleTimestamp = block.timestamp;
    mapping(address => uint256) public burnedEggsByUser;
    address[] public burners; // Liste der Adressen, die EGGS im aktuellen Zyklus verbrannt haben

    address public currentLeader;

    uint256 public nextCycleTimestamp = block.timestamp + 5 minutes;

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
            attackPower: randomAttribute(1),
            defensePower: randomAttribute(2),
            intelligencePoints: randomAttribute(3),
            speed: randomAttribute(4),
            birthTime: block.timestamp,
            nextEggMintedTime: block.timestamp.add(eggMintLockTime),
            level: 0,
            isDead: false
        });

        chickens[tokenId] = newChicken;
        aliveChickens.push(tokenId);
    }

    function mintEgg(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "You do not own this chicken");
        require(!chickens[tokenId].isDead, "Chicken has passed away");
        require(
            block.timestamp > chickens[tokenId].nextEggMintedTime,
            "Chicken is not ready to lay an egg"
        );
        chickens[tokenId].nextEggMintedTime = block.timestamp.add(
            eggMintLockTime
        );
        chickens[tokenId].level = chickens[tokenId].level.add(1);
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
        chickens[tokenId].nextEggMintedTime =
            block.timestamp +
            (3 * eggMintLockTime);

        _createChicken();
    }

    function randomAttribute(uint256 salt) private view returns (uint256) {
        return
            (uint256(
                keccak256(
                    abi.encodePacked(
                        block.timestamp,
                        _tokenIdCounter.current(),
                        salt
                    )
                )
            ) % 10) + 1;
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

    function burnEggs(uint256 amount) external {
        require(
            block.timestamp < nextCycleTimestamp,
            "The cycle is closed, wait for the next one!"
        );

        require(
            eggsToken.balanceOf(msg.sender) >= amount,
            "Not enough EGGS to burn."
        );
        eggsToken.burnFrom(msg.sender, amount);

        // Wenn der Benutzer zum ersten Mal EGGS verbrennt, füge ihn der burners-Liste hinzu
        if (burnedEggsByUser[msg.sender] == 0) {
            burners.push(msg.sender);
        }
        burnedEggsByUser[msg.sender] = burnedEggsByUser[msg.sender].add(amount);

        if (
            currentLeader == address(0) ||
            burnedEggsByUser[msg.sender] > burnedEggsByUser[currentLeader]
        ) {
            currentLeader = msg.sender;
        }
    }

    function startNewCycle() external {
        require(
            block.timestamp >= nextCycleTimestamp,
            "Can only call this function once every 24 hours."
        );

        // Reward the leader with the golden egg
        if (currentLeader != address(0)) {
            // reward the leader with the golden egg
        }

        // Check all chickens and distribute rewards
        uint256 totalAlive = aliveChickens.length;

        for (uint256 i = 0; i < totalAlive; i++) {
            uint256 tokenId = aliveChickens[i];
            checkAlive(tokenId); // This will update the isDead status of each chicken
        }

        totalAlive = aliveChickens.length;
        uint256 rewardPerChicken = address(this).balance.div(totalAlive + 1); // +1 to include the caller

        for (uint256 i = 0; i < totalAlive; i++) {
            uint256 tokenId = aliveChickens[i];
            if (!chickens[tokenId].isDead) {
                payable(ownerOf(tokenId)).transfer(rewardPerChicken);
            }
        }

        // Reward the caller
        payable(msg.sender).transfer(rewardPerChicken);

        // Reset for next cycle
        nextCycleTimestamp = block.timestamp + 24 hours;

        for (uint256 i = 0; i < burners.length; i++) {
            delete burnedEggsByUser[burners[i]];
        }
        delete burners; // setzt die burners-Liste zurück
        currentLeader = address(0);
    }

    function totalAliveChickens() external view returns (uint256) {
        return aliveChickens.length;
    }
}
