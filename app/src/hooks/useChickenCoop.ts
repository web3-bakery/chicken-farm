import { useQuery } from "@tanstack/react-query";

import useContract from "./useContract";
import ChickenCoop_CONTRACT from "../contracts/ChickenCoop.json";

export default function useChickenCoop(address: string) {
  const contract = useContract(
    ChickenCoop_CONTRACT.address,
    ChickenCoop_CONTRACT.abi
  );

  const query = useQuery({
    queryKey: ["ChickenCoop"],
    queryFn: async () => {
      if (!contract) {
        return [];
      }

      //   return contract
      //     .walletOfOwner(address)
      //     .then((res: any) => res.map((x: any) => x.toNumber()));

      // Get the number of NFTs owned by the user
      const balance = await contract.balanceOf(address);
      console.log("balance123", balance);
      // Fetch each NFT's tokenId
      const tokenIds = [];
      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(address, i);
        tokenIds.push(tokenId.toString());
      }

      return tokenIds;
    },
  });

  return query;
}
