const hre = require("hardhat");
const { copyContractArtifacts } = require("./copyArtifacts");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy FarmNFT contract
  const FarmNFT = await hre.ethers.getContractFactory("FarmNFT");
  const farmNFT = await FarmNFT.deploy();
  await farmNFT.waitForDeployment();

  console.log(`FarmNFT deployed to ${farmNFT.target}`);
  // Deploy ItemsNFT contract and mint some items
  const ItemsNFT = await hre.ethers.getContractFactory("ItemsNFT");
  const itemsNFT = await ItemsNFT.deploy();


  await itemsNFT.waitForDeployment();
  
  console.log(`ItemsNFT deployed to ${itemsNFT.target}`);

  console.log("Minting Items...");

  // Mint a BUILDING item
  await itemsNFT.createItem(0, 10);
  console.log("Minted BUILDING items for:", deployer.address);

  // Mint a TREE item
  await itemsNFT.createItem(1, 20);
  console.log("Minted TREE items for:", deployer.address);

  // Mint a FIELD item
  await itemsNFT.createItem(2, 30);
  console.log("Minted FIELD items for:", deployer.address);

  copyContractArtifacts({
    FarmNFT: farmNFT.target,
    ItemsNFT: itemsNFT.target,
    // Add more contracts here as needed
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
