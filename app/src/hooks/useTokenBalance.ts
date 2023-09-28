import { ethers } from "ethers";
import { useQuery } from "@tanstack/react-query";

import useTokenContract from "./useTokenContract";

export default function useTokenBalance(address: string, tokenAddress: string) {
  const contract = useTokenContract(tokenAddress);

  const query = useQuery({
    queryKey: ["TokenBalance"],
    queryFn: () => {
      if (!contract) {
        return "Geht net";
      }

      return contract
        .balanceOf(address)
        .then((res) => ethers.utils.formatEther(res))
        .catch((error: any) => {
          return {
            error,
          };
        });
    },
  });

  return query;
}
