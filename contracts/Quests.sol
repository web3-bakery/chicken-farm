// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Quests {
    mapping(address => uint256) public userPoints;

    struct Quest {
        uint256 id;
        string description;
        uint256 points;
        address requiredTokenAddress;
        uint256 requiredTokenAmount;
        bool active;
    }

    mapping(uint256 => Quest) public quests;
    uint256 public nextQuestId;

    // mapping to keep track of user's completed quests
    mapping(address => mapping(uint256 => bool)) public userQuestCompletion;

    address adminAddress;

    constructor(address _adminAddress) {
        adminAddress = _adminAddress;
    }

    modifier onlyAdmin() {
        require(msg.sender == adminAddress);
        _;
    }

    modifier notAdmin() {
        require(msg.sender != adminAddress);
        _;
    }

    function _addPoints(address user, uint256 points) internal {
        userPoints[user] += points;
    }

    // Quests CRUD
    function createQuest(
        string memory description,
        uint256 points,
        address requiredTokenAddress,
        uint256 requiredTokenAmount
    ) public onlyAdmin {
        quests[nextQuestId] = Quest(
            nextQuestId,
            description,
            points,
            requiredTokenAddress,
            requiredTokenAmount,
            true
        );
        emit QuestCreated(
            nextQuestId,
            description,
            points,
            requiredTokenAddress,
            requiredTokenAmount
        );
        nextQuestId++;
    }

    function updateQuest(
        uint256 questId,
        string memory description,
        uint256 points,
        address requiredTokenAddress,
        uint256 requiredTokenAmount,
        bool active
    ) public onlyAdmin {
        require(quests[questId].id == questId, "Quest does not exist");
        quests[questId].description = description;
        quests[questId].points = points;
        quests[questId].requiredTokenAddress = requiredTokenAddress;
        quests[questId].requiredTokenAmount = requiredTokenAmount;
        quests[questId].active = active;
        emit QuestUpdated(
            questId,
            description,
            points,
            requiredTokenAddress,
            requiredTokenAmount,
            active
        );
    }

    function deleteQuest(uint256 questId) public onlyAdmin {
        require(quests[questId].id == questId, "Quest does not exist");
        delete quests[questId];
        emit QuestDeleted(questId);
    }

    function completeQuest(uint256 questId) public {
        Quest storage quest = quests[questId];
        require(quest.active, "Quest is not active");

        // Check if the user has already completed the quest
        require(
            !userQuestCompletion[msg.sender][questId],
            "Quest already completed"
        );

        IERC20 erc20 = IERC20(quest.requiredTokenAddress);
        uint256 userTokenBalance = erc20.balanceOf(msg.sender);
        require(
            userTokenBalance >= quest.requiredTokenAmount,
            "Insufficient token balance"
        );

        _addPoints(msg.sender, quest.points);
        // Mark the quest as completed for the user
        userQuestCompletion[msg.sender][questId] = true;
        emit QuestCompleted(questId, msg.sender);
    }

    function canSolveQuest(uint256 questId) public view returns (bool) {
        Quest storage quest = quests[questId];
        require(quest.active, "Quest is not active");

        // Check if the user has already completed the quest
        require(
            !userQuestCompletion[msg.sender][questId],
            "Quest already completed"
        );

        IERC20 erc20 = IERC20(quest.requiredTokenAddress);
        uint256 userTokenBalance = erc20.balanceOf(msg.sender);
        require(
            userTokenBalance >= quest.requiredTokenAmount,
            "Insufficient token balance"
        );

        return true;
    }

    event QuestCreated(
        uint256 indexed questId,
        string description,
        uint256 points,
        address requiredTokenAddress,
        uint256 requiredTokenAmount
    );
    event QuestUpdated(
        uint256 indexed questId,
        string description,
        uint256 points,
        address requiredTokenAddress,
        uint256 requiredTokenAmount,
        bool active
    );
    event QuestDeleted(uint256 indexed questId);
    event QuestCompleted(uint256 indexed questId, address indexed user);
}
