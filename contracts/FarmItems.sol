// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.20;

// import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
// import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";

// contract FarmItems is ERC1155, Ownable, ERC1155Burnable, ERC1155Supply {
//     constructor(
//         address initialOwner
//     ) ERC1155("https://example.com/api/item/{id}.json") Ownable(initialOwner) {}

//     string public constant name = "Farm Items";
//     string public constant symbol = "FarmItem";

//     mapping(address => bool) isMinter;

//     /**
//      * @notice Throws if called by any account other than a minter.
//      */
//     modifier onlyMinters() {
//         if (!isMinter[msg.sender]) {
//             revert NotMinter();
//         }
//         _;
//     }

//     /**
//      * @notice Grants the minter role to an address.
//      * @param minter The address that will be granted the minter role.
//      */
//     function addMinter(address minter) external onlyOwner {
//         isMinter[minter] = true;
//     }

//     /**
//      * @notice Revokes the minter role from an address.
//      * @param minter The address that will have the minter role revoked.
//      */
//     function removeMinter(address minter) external onlyOwner {
//         isMinter[minter] = false;
//     }

//     function setURI(string memory newuri) public onlyOwner {
//         _setURI(newuri);
//     }

//     function mint(
//         address account,
//         uint256 id,
//         uint256 amount,
//         bytes memory data
//     ) public onlyMinters {
//         _mint(account, id, amount, data);
//     }

//     function mintBatch(
//         address to,
//         uint256[] memory ids,
//         uint256[] memory amounts,
//         bytes memory data
//     ) public onlyMinters {
//         _mintBatch(to, ids, amounts, data);
//     }

//     // The following functions are overrides required by Solidity.

//     function _update(
//         address from,
//         address to,
//         uint256[] memory ids,
//         uint256[] memory values
//     ) internal override(ERC1155, ERC1155Supply) {
//         super._update(from, to, ids, values);
//     }
// }
