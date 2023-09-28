import { ethers } from "hardhat";
const { copyContractArtifacts } = require('./copyArtifacts');

async function main() {
  const eggs = await ethers.deployContract("EGGS");

  await eggs.waitForDeployment();

  console.log(`EGGS deployed to ${eggs.target}`);
  const chickens = await ethers.deployContract("ChickenNFT", [eggs.target]);

  await chickens.waitForDeployment();

  console.log(`ChickenNFT deployed to ${chickens.target}`);

  copyContractArtifacts({
    EGGS: eggs.target,
    ChickenNFT: chickens.target
    // Add more contracts here as needed
});

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
