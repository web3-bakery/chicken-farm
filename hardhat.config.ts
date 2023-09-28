import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const privateKey = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []

const config: HardhatUserConfig = {
  solidity: "0.8.19",
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
  }
};

export default config;
