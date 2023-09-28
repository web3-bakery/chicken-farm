import ERC721_ABI from "../contracts/iotabots_abi.json";
import type { Iotabots_abi } from "../contracts/types";
import useContract from "./useContract";

export default function useBotsContract(tokenAddress: string) {
  return useContract<Iotabots_abi>(tokenAddress, ERC721_ABI);
}
