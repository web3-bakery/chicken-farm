// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const TOKEN = await ethers.getContractFactory("ChickenNFT");

  let token = await TOKEN.attach("0x5FC8d32690cc91D4c39d9d3abcBD16989F875707");


  let res = await token.transferEggsOwnership(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );

  console.log("res");
  console.log(res);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
