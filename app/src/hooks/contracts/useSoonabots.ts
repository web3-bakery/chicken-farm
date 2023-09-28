import { useQuery } from "@tanstack/react-query";

import useBotsContract from "../useBotsContract";

export default function useSoonabots(address: string, tokenAddress: string) {
  const contract = useBotsContract(tokenAddress);

  const query = useQuery({
    queryKey: ["Soonabots"],
    queryFn: () => {
      if (!contract) {
        return [];
      }

      return contract
        .walletOfOwner(address)
        .then((res) => res.map((x) => x.toNumber()));
    },
  });

  return query;
}
