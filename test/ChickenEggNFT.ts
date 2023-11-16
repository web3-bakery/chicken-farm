const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ChickenEggNFT", function () {
  let EggnNFT: any;
  let eggNFT: any;
  beforeEach(async () => {
    console.log("1");

    const [owner, otherAccount] = await ethers.getSigners();
    EggnNFT = await ethers.getContractFactory("ChickenEggNFT");
    eggNFT = await EggnNFT.deploy(owner.address);
    console.log("eggToken", eggNFT.address);
  });

  it("should deploy the Egg NFT", async () => {
    const [owner, otherAccount] = await ethers.getSigners();
    console.log("owner", owner.address);

    expect(await eggNFT.totalSupply()).to.equal(0);
  });
});
