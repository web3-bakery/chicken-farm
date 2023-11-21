import { ethers } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("owner.address: ", owner.address);

  const FarmItems = await ethers.getContractFactory("FarmItems");

  let farmItems = await FarmItems.attach(
    "0x0165878A594ca255338adfa4d48449f69242Eb8F"
  );

  let address = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

  // 0 = golden egg
  // 1 = white egg
  // 2 = brown egg
  // 3 = green egg
  let item_id = 3;

  let amount = 3;

  let tx = await farmItems.mint(address, item_id, amount, "0x");
  console.log(tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
