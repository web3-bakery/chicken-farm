import { useQuery } from "@tanstack/react-query";

import useContract from "./useContract";
import ChickenCoop_CONTRACT from "../contracts/ChickenCoop.json";

export default function useChickenCoopDetail(tokenId: number) {
  const contract = useContract(
    ChickenCoop_CONTRACT.address,
    ChickenCoop_CONTRACT.abi
  );

  const query = useQuery({
    queryKey: ["ChickenCoopDetail", tokenId],
    queryFn: async () => {
      if (!contract) {
        return [];
      }
      const coopDetails = await contract.coops(tokenId);
      console.log("coopDetails", coopDetails);

      const chickenIds = await contract.getChickensInCoop(tokenId);

      return {
        level: coopDetails[0].toNumber(),
        lastCollected: coopDetails[1].toNumber(),
        chickenIds: chickenIds.map((id: any) => id.toNumber()),
      };
    },
  });

  return query;
}
