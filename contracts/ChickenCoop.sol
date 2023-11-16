// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IChickenNFT {
    function ownerOf(uint256 tokenId) external view returns (address);

    function transferFrom(address from, address to, uint256 tokenId) external;

    function getChickenDetails(
        uint256 chickenId
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
        );

    function mintEgg(uint256 chickenId) external;
}

contract ChickenCoop is ERC721, Ownable {
    uint256 public coopLevelCost = 10 ether;
    uint256 public mintCost = 10 ether;
    uint256 public UPGRADE_COST = 10 ether;
    uint256 public MAX_LEVEL = 10;

    uint256 public nextTokenId = 1;
    uint256 public eggCollectionFrequency = 24 hours;
    uint256 public eggsPerChicken = 1;

    IChickenNFT chickenNFTContract;

    struct Coop {
        uint256 level;
        uint256 lastCollected;
        uint256[] chickens; // IDs of ChickenNFTs
    }

    mapping(uint256 => Coop) public coops; // tokenId to Coop

    constructor(
        address initialOwner,
        address _chickenNFTContract
    ) Ownable(initialOwner) ERC721("ChickenCoop", "COOP") {
        chickenNFTContract = IChickenNFT(_chickenNFTContract);
    }

    // Minting function for ChickenCoop NFT
    function mintCoop() external payable {
        require(msg.value == mintCost, "Minting cost is 10 SMR");
        _safeMint(msg.sender, nextTokenId);

        Coop storage newCoop = coops[nextTokenId];
        newCoop.level = 1;
        newCoop.lastCollected = block.timestamp;

        nextTokenId++;
    }

    // Function to add ChickenNFT to a ChickenCoop
    function addChickenToCoop(uint256 coopId, uint256 chickenId) external {
        require(
            ownerOf(coopId) == msg.sender,
            "You are not the owner of this coop"
        );
        require(
            chickenNFTContract.ownerOf(chickenId) == msg.sender,
            "You do not own this chicken"
        );

        Coop storage coop = coops[coopId];
        require(
            coop.chickens.length < coop.level * 2,
            "Coop is at maximum capacity"
        );

        // Transfer ChickenNFT to the coop contract (for custody)
        chickenNFTContract.transferFrom(msg.sender, address(this), chickenId);

        // Add chicken to the coop
        coop.chickens.push(chickenId);
    }

    // Function to remove ChickenNFT from a ChickenCoop
    function removeChickenFromCoop(uint256 coopId, uint256 chickenId) external {
        require(
            ownerOf(coopId) == msg.sender,
            "You are not the owner of this coop"
        );

        Coop storage coop = coops[coopId];
        bool chickenRemoved = false;
        for (uint256 i = 0; i < coop.chickens.length; i++) {
            if (coop.chickens[i] == chickenId) {
                chickenRemoved = true;
                // Transfer ChickenNFT back to the owner
                chickenNFTContract.transferFrom(
                    address(this),
                    msg.sender,
                    chickenId
                );

                // Remove chicken from the coop array
                coop.chickens[i] = coop.chickens[coop.chickens.length - 1];
                coop.chickens.pop();
                break;
            }
        }
        require(chickenRemoved, "Chicken not found in coop");
    }

    // Function to collect eggs from all chickens in a coop
    function collectEggsFromCoop(uint256 coopId) external {
        require(ownerOf(coopId) == msg.sender, "Not the owner of the coop");

        Coop storage coop = coops[coopId];
        for (uint256 i = 0; i < coop.chickens.length; i++) {
            uint256 chickenId = coop.chickens[i];

            // Capture the tuple returned by getChickenDetails
            (, , , , , uint256 nextEggMintedTime, , ) = chickenNFTContract
                .getChickenDetails(chickenId);

            // Check if the chicken is ready to mint an egg
            if (block.timestamp > nextEggMintedTime) {
                // Call mintEgg function from ChickenNFT contract
                chickenNFTContract.mintEgg(chickenId);
            }
        }
    }

    // Function to upgrade the level of a ChickenCoop
    function upgradeCoopLevel(uint256 coopId) external payable {
        require(ownerOf(coopId) == msg.sender, "Not the owner of the coop");
        require(msg.value == UPGRADE_COST, "Upgrade cost is 10 ETH");

        Coop storage coop = coops[coopId];
        require(coop.level <= MAX_LEVEL, "Coop is already at maximum level");
        coop.level++;
    }

    // Function to withdraw Ether from the contract
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds available to withdraw");

        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}
