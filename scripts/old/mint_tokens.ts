// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const TOKEN = await ethers.getContractFactory("EGGS");

  let token = await TOKEN.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  let token_amount = ethers.parseEther("5");

  let res = await token.mint(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    token_amount
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
