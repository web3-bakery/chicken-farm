const { HardhatUserConfig } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");
dotenv.config();

const privateKey =
  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

const config = {
  solidity: "0.8.20",
  networks: {
    ShimmerEVMTestnet: {
      url: "https://json-rpc.evm.testnet.shimmer.network/",
      chainId: 1072,
      accounts: privateKey,
      timeout: 120000,
      blockGasLimit: 100000000429720,
    },
    ShimmerEVMMainnet: {
      url: "https://json-rpc.evm.shimmer.network/",
      chainId: 148,
      accounts: privateKey,
      timeout: 120000,
      blockGasLimit: 100000000429720,
    },
  },
};

module.exports = config;
