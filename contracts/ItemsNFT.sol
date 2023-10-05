// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ItemsNFT is ERC1155 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    enum ItemType { BUILDING, TREE, FIELD }
    mapping(uint256 => ItemType) public items;

    constructor() ERC1155("https://myapi.com/api/token/{id}.json") {}

    function createItem(ItemType itemType, uint256 amount) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        items[newItemId] = itemType;

        _mint(msg.sender, newItemId, amount, "");

        return newItemId;
    }
}
