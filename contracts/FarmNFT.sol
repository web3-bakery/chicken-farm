// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract FarmNFT is ERC721Enumerable {
    uint256 private _nextTokenId;

    struct Farm {
        uint256 size;
        uint256[][] matrix;
    }

    mapping(uint256 => Farm) public farms;

    constructor() ERC721("FarmNFT", "FARM") {}

    function initializeFarm() public returns (uint256) {
        uint256 newFarmId = _nextTokenId++;

        uint256 randomSize = _randomSize();

        farms[newFarmId] = Farm({
            size: randomSize,
            matrix: new uint256[][](randomSize)
        });

        for (uint i = 0; i < randomSize; i++) {
            farms[newFarmId].matrix[i] = new uint256[](randomSize);
        }

        _safeMint(msg.sender, newFarmId);
        return newFarmId;
    }

    function placeItem(
        uint256 farmId,
        uint256 x,
        uint256 y,
        uint256 itemId
    ) public {
        require(ownerOf(farmId) == msg.sender, "Not the owner of the farm");
        require(
            x < farms[farmId].size && y < farms[farmId].size,
            "Invalid coordinates"
        );
        require(farms[farmId].matrix[x][y] == 0, "Space is already occupied");

        farms[farmId].matrix[x][y] = itemId;
    }

    function _randomSize() internal view returns (uint256) {
        return (uint256(keccak256(abi.encodePacked(block.timestamp))) % 5) + 1;
    }

    function getFarmDetails(uint256 farmId) public view returns (Farm memory) {
        return farms[farmId];
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
}
