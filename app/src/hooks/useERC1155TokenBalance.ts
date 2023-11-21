import { ethers } from "ethers";
import { useQuery } from "@tanstack/react-query";

import useContract from "./useContract";
import FarmITems_CONTRACT from "../contracts/FarmItems.json";

export default function useERC1155TokenBalance(
  address: string,
  tokenAddress: string,
  id: number
) {
  const contract = useContract(tokenAddress, FarmITems_CONTRACT.abi);

  const query = useQuery({
    queryKey: ["ERC1155TokenBalance", tokenAddress, id],
    queryFn: () => {
      console.log("contract", contract);
      if (!contract) {
        return "error";
      }

      return contract
        .balanceOf(address, id)
        .then((res: any) => res)
        .catch((error: any) => {
          return {
            error,
          };
        });
    },
  });

  return query;
}
