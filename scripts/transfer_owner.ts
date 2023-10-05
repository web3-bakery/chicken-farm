// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const TOKEN = await ethers.getContractFactory("EGGS");

  let token = await TOKEN.attach("0x8cD395eF72C8F34D1c817D6418005A83F3b3e32a");


  let res = await token.transferOwnership(
    "0xd263E47df9d0bEB71be9987e150880abF2444470"
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
