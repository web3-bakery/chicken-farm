import { ethers } from "ethers";
import { useQuery } from "@tanstack/react-query";

import useBotsContract from "../useBotsContract";

export default function useSoonabotsBalance(
  address: string,
  tokenAddress: string
) {
  const contract = useBotsContract(tokenAddress);

  const query = useQuery({
    queryKey: ["SoonabotsBalance"],
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
