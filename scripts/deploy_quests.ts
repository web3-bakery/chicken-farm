import { ethers, run } from "hardhat";
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const [owner] = await ethers.getSigners();

  console.log(owner.address);

  const EGGS_ADDR = "0x477575a17a5a63F262Ae3957ab9DA951b90Eb000";
  const CHICKEN_ADDR = "0x061c974971fb3BE30F43e6c4425E1EEA35eD2113";

  // Compile and deploy the contract
  const quests = await ethers.deployContract("Quests", [owner.address]);

  await quests.waitForDeployment();

  console.log("Quests contract deployed to:", quests.target);

  let x = await quests.createQuest(
    "Hold a Chicken",
    100,
    CHICKEN_ADDR,
    ethers.parseUnits("1", 0)
  );
  await x.wait();

  x = await quests.createQuest(
    "Hold 10 Chickens",
    100,
    CHICKEN_ADDR,
    ethers.parseUnits("10", 0)
  );
  await x.wait();
  x = await quests.createQuest(
    "Hold 100 Chickens",
    100,
    CHICKEN_ADDR,
    ethers.parseUnits("100", 0)
  );
  await x.wait();

  x = await quests.createQuest(
    "Hold 1 EGGS Token",
    100,
    EGGS_ADDR,
    ethers.parseUnits("1", 18)
  );
  await x.wait();
  x = await quests.createQuest(
    "Hold 10 EGGS Token",
    100,
    EGGS_ADDR,
    ethers.parseUnits("10", 18)
  );
  await x.wait();
  x = await quests.createQuest(
    "Hold 100 EGGS Token",
    100,
    EGGS_ADDR,
    ethers.parseUnits("100", 18)
  );
  await x.wait();

  console.log("Example quests created");

  copyContractArtifacts({
    Quests: quests.target,
    // Add more contracts here as needed
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
