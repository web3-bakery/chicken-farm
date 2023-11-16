import { ethers } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const eggs = await ethers.deployContract("EGGS");

  await eggs.waitForDeployment();

  const marketingTreasury = "0x8719c0e3E5f950ae9b305feD9B2B2f830C127958";
  const devTreasury = "0x23985e738c74a809EdE411C5cb944efbcE3139F2";

  console.log(`EGGS deployed to ${eggs.target}`);
  const chickens = await ethers.deployContract("ChickenNFT", [
    eggs.target,
    marketingTreasury,
    devTreasury,
  ]);

  await chickens.waitForDeployment();

  console.log(`ChickenNFT deployed to ${chickens.target}`);

  copyContractArtifacts({
    EGGS: eggs.target,
    ChickenNFT: chickens.target,
    // Add more contracts here as needed
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
