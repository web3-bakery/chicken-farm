// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ItemsNFT is ERC1155 {
    uint256 private _nextTokenId;

    enum ItemType {
        BUILDING,
        TREE,
        FIELD
    }
    mapping(uint256 => ItemType) public items;

    constructor() ERC1155("https://myapi.com/api/token/{id}.json") {}

    function createItem(
        ItemType itemType,
        uint256 amount
    ) public returns (uint256) {
        uint256 newItemId = _nextTokenId++;

        items[newItemId] = itemType;

        _mint(msg.sender, newItemId, amount, "");

        return newItemId;
    }
}
