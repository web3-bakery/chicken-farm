import { ethers } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const marketingTreasury = "0x8719c0e3E5f950ae9b305feD9B2B2f830C127958";
  const devTreasury = "0x23985e738c74a809EdE411C5cb944efbcE3139F2";

  const CHICKENNFT_ADDRESS = "0x061c974971fb3BE30F43e6c4425E1EEA35eD2113";

  const chickenDAO = await ethers.deployContract("ChickenDAO", [
    CHICKENNFT_ADDRESS,
  ]);
  await chickenDAO.waitForDeployment();

  console.log(`ChickenDAO deployed to ${chickenDAO.target}`);

  copyContractArtifacts({
    ChickenDAO: chickenDAO.target,
    // Add more contracts here as needed
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
