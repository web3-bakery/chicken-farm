import { ethers } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const auction = await ethers.deployContract("SimpleAuction");

  await auction.waitForDeployment();

  console.log(`Auction deployed to ${auction.target}`);

  copyContractArtifacts({
    SimpleAuction: auction.target,
    // Add more contracts here as needed
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
