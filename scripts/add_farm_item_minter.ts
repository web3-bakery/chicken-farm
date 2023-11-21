import { ethers } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("owner.address: ", owner.address);

  const FarmItems = await ethers.getContractFactory("FarmItems");

  let farmItems = await FarmItems.attach(
    "0x0165878A594ca255338adfa4d48449f69242Eb8F"
  );

  let tx = await farmItems.addMinter(owner.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
