// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./EGGS.sol";

contract ChickenNFT is ERC721Enumerable {
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenIdCounter;
    EGGS public eggsToken;
    mapping(uint256 => uint256) public birthTime;
    mapping(uint256 => uint256) public lastEggMintedTime;
    mapping(uint256 => bool) public isDead;

    constructor(address _eggsToken) ERC721("ChickenNFT", "CHICKEN") {
        eggsToken = EGGS(_eggsToken);
    }

    function createChicken() external payable {
        require(msg.value == 10 ether, "Cost for creating a chicken is 10 ETH");
        require(eggsToken.balanceOf(msg.sender) >= 1, "Need 1 EGGS token to create chicken");

        eggsToken.burnFrom(msg.sender, 1 * 10 ** 18);

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(msg.sender, tokenId);

        birthTime[tokenId] = block.timestamp;
        lastEggMintedTime[tokenId] = 0;
        isDead[tokenId] = false;
    }

    function mintEgg(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "You do not own this chicken");
        require(!isDead[tokenId], "Chicken has passed away");
        // require(block.timestamp > lastEggMintedTime[tokenId].add(1 days), "Chicken can only lay an egg once a day");
        require(block.timestamp > lastEggMintedTime[tokenId].add(1 minutes), "Chicken can only lay an egg once a minute");

        lastEggMintedTime[tokenId] = block.timestamp;
        eggsToken.mint(msg.sender, 1 * 10 ** 18);
        checkAlive(tokenId); // This function can mark the chicken as dead
    }

    function checkAlive(uint256 tokenId) private {
        if(!isDead[tokenId]) {
            uint256 daysAlive = (block.timestamp - birthTime[tokenId]) / 1 days;
            uint256 deathChance = daysAlive > 10 ? 100 : daysAlive * 10; // 10% chance increase every day
            uint256 randomFactor = uint256(keccak256(abi.encodePacked(block.timestamp, tokenId))) % 100;

            if(randomFactor < deathChance) {
                isDead[tokenId] = true;
            }
        }
    }
}
