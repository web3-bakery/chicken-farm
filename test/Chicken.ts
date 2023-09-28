const { expect } = require("chai");
const { ethers } = require("hardhat");

let EggToken, ChickenNFT: any;
let eggToken, chickenNFT: any;
describe("ChickenNFT", function () {
  beforeEach(async () => {
    console.log("1");
    EggToken = await ethers.getContractFactory("EGGS");
    console.log("2");
    eggToken = await EggToken.deploy();

    console.log("3");

    ChickenNFT = await ethers.getContractFactory("ChickenNFT");
    console.log("eggToken", eggToken.address);
    chickenNFT = await ChickenNFT.deploy(eggToken.address);
  });

  it("should deploy the Chicken NFT", async () => {
    const [owner, otherAccount] = await ethers.getSigners();
    console.log("owner", owner.address);

    
    expect(await chickenNFT.totalSupply()).to.equal(0);
  });
});
