import ERC20_ABI from "../contracts/Token.json";
import type { Token } from "../contracts/types";
import useContract from "./useContract";

export default function useTokenContract(tokenAddress: string) {
  return useContract<Token>(tokenAddress, ERC20_ABI);
}
