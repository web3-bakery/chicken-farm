// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const TOKEN = await ethers.getContractFactory("ChickenNFT");

  let token = await TOKEN.attach("0x0165878A594ca255338adfa4d48449f69242Eb8F");


  let res = await token.transferEggsOwnership(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
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
