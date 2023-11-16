// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

import "./ChickenEggNFT.sol";

contract ChickenNFT is ERC721Enumerable, Ownable, ReentrancyGuard {
    uint256 private _nextTokenId;

    // Constants:
    uint256 public constant CREATION_COST = 10 ether;

    uint256 public treasury = 0;
    address payable public marketingTreasury;
    address payable public developmentTreasury;

    // Events
    event ChickenCreated(address indexed owner, uint256 tokenId);
    event EggMinted(address indexed owner, uint256 tokenId);
    event ChickenDied(uint256 tokenId);
    event EggHatched(address indexed owner, uint256 tokenId);
    event RewardWithdrawn(address indexed owner, uint256 amount);
    event EggsOwnershipTransferred(address indexed newOwner);
    event NewCycleStarted(uint256 nextCycleTimestamp, uint256 rewardAmount);

    struct Chicken {
        uint256 attackPower;
        uint256 defensePower;
        uint256 intelligencePoints;
        uint256 speed;
        uint256 birthTime;
        uint256 nextEggMintedTime;
        uint256 level;
        uint256 happinessLevel;
        bool isDead;
    }

    ChickenEggNFT public eggsNFT;
    mapping(uint256 => Chicken) public chickens;
    uint256[] public aliveChickens;
    mapping(uint256 => uint256) public chickenIndices;
    mapping(address => uint256) public pendingRewards;

    // uint256 public eggMintLockTime = 1 days;
    uint256 public eggMintLockTime = 1 minutes;

    // uint256 public cycleDuration = 1 days;
    uint256 public cycleDuration = 3 minutes;

    uint256 public nextCycleTimestamp = block.timestamp + cycleDuration;

    constructor(
        address initialOwner,
        address _eggsNFT,
        address payable _marketingTreasury,
        address payable _developmentTreasury
    ) Ownable(initialOwner) ERC721("ChickenNFT", "CHICKEN") {
        eggsNFT = ChickenEggNFT(_eggsNFT);
        marketingTreasury = _marketingTreasury;
        developmentTreasury = _developmentTreasury;
    }

    function buy() external payable {
        require(
            msg.value == CREATION_COST,
            "Cost for creating a chicken is 10 SMR"
        );

        treasury += msg.value; // Add to treasury

        _createChicken();
    }

    function _createChicken() private returns (uint256) {
        uint256 tokenId = _nextTokenId++;

        _mint(msg.sender, tokenId);

        Chicken memory newChicken = Chicken({
            attackPower: randomAttribute(1),
            defensePower: randomAttribute(2),
            intelligencePoints: randomAttribute(3),
            speed: randomAttribute(4),
            birthTime: block.timestamp,
            nextEggMintedTime: block.timestamp + eggMintLockTime,
            level: 0,
            happinessLevel: 0,
            isDead: false
        });

        chickens[tokenId] = newChicken;
        aliveChickens.push(tokenId);
        chickenIndices[tokenId] = aliveChickens.length - 1;
        emit ChickenCreated(msg.sender, tokenId);
        return tokenId;
    }

    function mintEgg(uint256 tokenId, address to) external {
        require(ownerOf(tokenId) == msg.sender, "You do not own this chicken");
        require(!chickens[tokenId].isDead, "Chicken has passed away");
        require(
            block.timestamp > chickens[tokenId].nextEggMintedTime,
            "Chicken is not ready to lay an egg"
        );
        chickens[tokenId].nextEggMintedTime = block.timestamp + eggMintLockTime;
        chickens[tokenId].level = chickens[tokenId].level + 1;
        eggsNFT.mintEgg(
            to,
            chickens[tokenId].happinessLevel,
            chickens[tokenId].birthTime
        );
        emit EggMinted(to, tokenId);
        checkAlive(tokenId); // This function could mark the chicken as dead
    }

    // Chicken in real live is alive for 5-10 years on average.
    // In our game, 1 year are 7 dyas in the real world.
    // So we'll say that a chicken is alive for 35-70 days on average.
    // A chicken can lay an golden egg under the following conditions:
    // - The chicken is alive
    // - The chicken is at least 50 days old
    // - The chicken is very happy (has a happiness level of 5)

    // checks if the chicken is already marked as dead. If not, it calculates the number of days the chicken has been alive
    // The probability starts at 10% and increases by 10% for every day the chicken is alive, up to a maximum of 100%.
    function checkAlive(uint256 tokenId) private {
        Chicken storage chicken = chickens[tokenId];
        if (chicken.isDead) return;

        uint256 daysAlive = (block.timestamp - chicken.birthTime) / 1 days;
        uint256 deathChance = daysAlive > 10 ? 100 : daysAlive * 10; // 10% chance increase every day
        uint256 randomFactor = uint256(
            keccak256(abi.encodePacked(block.timestamp, tokenId))
        ) % 100;

        if (randomFactor < deathChance) {
            chicken.isDead = true;
            // Remove the chicken from aliveChickens array
            uint256 indexToRemove = chickenIndices[tokenId];
            uint256 lastChicken = aliveChickens[aliveChickens.length - 1];

            aliveChickens[indexToRemove] = lastChicken;
            chickenIndices[lastChicken] = indexToRemove;

            aliveChickens.pop();
            delete chickenIndices[tokenId]; // Clear mapping entry for gas refund
            emit ChickenDied(tokenId);
        }
    }

    // function to allow users to hatch an egg if they own a chicken
    // function hatchEgg(uint256 tokenId) external {
    //     // We'll use the same logic as mintEgg to check for eligibility
    //     require(ownerOf(tokenId) == msg.sender, "You do not own this chicken");
    //     require(!chickens[tokenId].isDead, "Chicken has passed away");

    //     require(
    //         block.timestamp > chickens[tokenId].nextEggMintedTime,
    //         "Chicken is not ready to hatch an egg"
    //     );

    //     require(
    //         eggsNFT.balanceOf(msg.sender) >= 1,
    //         "Need 1 EGGS token to create chicken"
    //     );

    //     eggsNFT.burnFrom(msg.sender, 1 * 10 ** 18);

    //     // Set the lastEggMintedTime to 3 days in the future
    //     chickens[tokenId].nextEggMintedTime =
    //         block.timestamp +
    //         (3 * eggMintLockTime);

    //     uint256 newChickenTokenId = _createChicken();
    //     emit EggHatched(msg.sender, newChickenTokenId); // Assuming you return the new token ID from _createChicken() or manage it differently.
    // }

    function randomAttribute(uint256 salt) private view returns (uint256) {
        return
            (uint256(
                keccak256(abi.encodePacked(block.timestamp, _nextTokenId, salt))
            ) % 10) + 1;
    }

    // If we want to udüate the ChickenNFT contract, we can transfer the EGGS ownership to a new contract
    function transferEggsOwnership(address newOwner) external onlyOwner {
        eggsNFT.transferOwnership(newOwner);
        emit EggsOwnershipTransferred(newOwner); // This could also be managed by the EGGS contract itself.
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

    function startNewCycle() external {
        require(
            block.timestamp >= nextCycleTimestamp,
            "Can only call this function once every 24 hours."
        );

        // Check all chickens and distribute rewards
        uint256 totalAlive = aliveChickens.length;

        for (uint256 i = 0; i < totalAlive; i++) {
            uint256 tokenId = aliveChickens[i];
            checkAlive(tokenId); // This will update the isDead status of each chicken
        }

        totalAlive = aliveChickens.length;

        uint256 totalRewards = (treasury * 8) / 10; // 80% of the contract balance for players
        uint256 marketingShare = (treasury * 1) / 10; // 10% of the contract balance for marketing
        uint256 developmentShare = (treasury * 1) / 10; // 10% of the contract balance for development

        treasury -= (totalRewards + marketingShare + developmentShare); // Deduct the amounts from the treasury

        marketingTreasury.transfer(marketingShare);
        developmentTreasury.transfer(developmentShare);

        uint256 rewardPerChicken = totalRewards / (totalAlive + 1); // +1 to include the caller

        for (uint256 i = 0; i < totalAlive; i++) {
            uint256 tokenId = aliveChickens[i];
            address chickenOwner = ownerOf(tokenId);

            // Reward the chicken owner
            pendingRewards[chickenOwner] =
                pendingRewards[chickenOwner] +
                rewardPerChicken;
        }

        // Reward the contract caller
        pendingRewards[msg.sender] =
            pendingRewards[msg.sender] +
            rewardPerChicken;

        // Reset for next cycle
        nextCycleTimestamp = block.timestamp + cycleDuration;
        emit NewCycleStarted(nextCycleTimestamp, address(this).balance);
    }

    function withdrawRewards() external nonReentrant {
        uint256 reward = pendingRewards[msg.sender];
        require(reward > 0, "No rewards available.");

        pendingRewards[msg.sender] = 0; // Reset the rewards before sending to avoid reentrancy attacks
        payable(msg.sender).transfer(reward);
        emit RewardWithdrawn(msg.sender, reward);
    }

    function totalAliveChickens() external view returns (uint256) {
        return aliveChickens.length;
    }

    function walletOfOwner(
        address _owner
    ) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function setMarketingTreasury(
        address payable _marketingTreasury
    ) external onlyOwner {
        marketingTreasury = _marketingTreasury;
    }

    function setDevelopmentTreasury(
        address payable _developmentTreasury
    ) external onlyOwner {
        developmentTreasury = _developmentTreasury;
    }
}
