import { ethers } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("owner.address: ", owner.address);
  const eggs = await ethers.deployContract("ChickenEggNFT", [owner.address]);

  await eggs.waitForDeployment();

  const marketingTreasury = "0x8719c0e3E5f950ae9b305feD9B2B2f830C127958";
  const devTreasury = "0x23985e738c74a809EdE411C5cb944efbcE3139F2";

  console.log(`EGGS deployed to ${eggs.target}`);

  const chickens = await ethers.deployContract("ChickenNFT", [
    owner.address,
    eggs.target,
    marketingTreasury,
    devTreasury,
  ]);

  await chickens.waitForDeployment();

  console.log(`ChickenNFT deployed to ${chickens.target}`);

  const chickenCoop = await ethers.deployContract("ChickenCoop", [
    owner.address,
    chickens.target,
  ]);

  await chickenCoop.waitForDeployment();

  console.log(`ChickenCoop deployed to ${chickenCoop.target}`);

  const farmItems = await ethers.deployContract("FarmItems", [owner.address]);

  await farmItems.waitForDeployment();

  console.log(`FarmItems deployed to ${farmItems.target}`);

  copyContractArtifacts({
    ChickenEggNFT: eggs.target,
    ChickenNFT: chickens.target,
    ChickenCoop: chickenCoop.target,
    FarmItems: farmItems.target,
    // Add more contracts here as needed
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
