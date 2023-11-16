import { useQuery } from "@tanstack/react-query";

import useContract from "./useContract";
import ChickenNFT_CONTRACT from "../contracts/ChickenNFT.json";

export default function fetchChickenIds(address: string) {
  const contract = useContract(
    ChickenNFT_CONTRACT.address,
    ChickenNFT_CONTRACT.abi
  );

  const query = useQuery({
    queryKey: ["fetchChickenIds", address],
    queryFn: async () => {
      if (!contract) {
        return [];
      }

      // Get the number of NFTs owned by the user
      const balance = await contract.balanceOf(address);
      console.log("balance123", balance);
      // Fetch each NFT's tokenId
      const tokenIds = [];
      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(address, i);
        tokenIds.push(tokenId.toString());
      }
      console.log("tokenIds", tokenIds);

      return tokenIds;
    },
  });

  return query;
}
