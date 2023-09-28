import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const RPC_URLS: { [chainId: number]: string } = {
  1072: "https://json-rpc.evm.testnet.shimmer.network/",
  31337: "http://127.0.0.1:8545/",
};

export const injected = new InjectedConnector({
  supportedChainIds: [1072, 31337],
});

export const network = new NetworkConnector({
  urls: {
    1072: RPC_URLS[1072],
    31337: RPC_URLS[31337],
  },
  defaultChainId: 1072,
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    0: RPC_URLS[31337],
    1: RPC_URLS[1072],
  },
  qrcode: true,
});
