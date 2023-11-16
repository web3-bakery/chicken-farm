// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ChickenEggNFT is ERC721Enumerable, Ownable {
    uint256 private _nextTokenId;

    struct EggAttributes {
        string color; // e.g., "white", "brown", "golden", "green"
        string size; // e.g., "big", "small"
        uint256 starRating; // 1 to 5
        uint256 birthdate;
    }

    mapping(uint256 => EggAttributes) public eggAttributes;

    constructor(
        address initialOwner
    ) Ownable(initialOwner) ERC721("EggNFT", "EGG") {}

    function mintEgg(
        address to,
        uint256 happinessLevel,
        uint256 birthTime
    ) public onlyOwner {
        uint256 tokenId = _nextTokenId++;

        _mint(to, tokenId);

        eggAttributes[tokenId] = EggAttributes({
            color: randomColor(happinessLevel, birthTime),
            size: randomSize(happinessLevel, birthTime),
            starRating: random(5) + 1,
            birthdate: block.timestamp
        });
    }

    // Example random color function (implement your own logic)
    function randomColor(
        uint256 happinessLevel,
        uint256 birthTime
    ) private view returns (string memory) {
        uint256 randomNum = uint256(
            keccak256(
                abi.encodePacked(block.timestamp, block.number, msg.sender)
            )
        ) % 100;
        if (happinessLevel >= 5) {
            if (randomNum < 2) {
                // 2% chance for golden
                return "golden";
            } else if (randomNum < 51) {
                // 49% chance for white
                return "white";
            } else {
                // 49% chance for brown
                return "brown";
            }
        } else {
            if (randomNum < 50) {
                return "white";
            } else {
                return "brown";
            }
        }
    }

    function randomSize(
        uint256 happinessLevel,
        uint256 birthTime
    ) private view returns (string memory) {
        uint256 randomNum = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        ) % 2;
        return randomNum == 0 ? "small" : "big";
    }

    // Random number generation
    function random(uint256 max) private view returns (uint256) {
        return
            uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) %
            max;
    }

    // Utility function for external access to egg attributes
    function getEggAttributes(
        uint256 tokenId
    ) external view returns (EggAttributes memory) {
        return eggAttributes[tokenId];
    }
}
