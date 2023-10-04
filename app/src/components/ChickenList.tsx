import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ethers } from "ethers";
import utils from "../utils";
import moment from "moment";
import "moment-duration-format";
import EggHatcher from "./EggHatcher";
import EggMinter from "./EggMinter";
import NftContract from "../contracts/ChickenNFT.json";
import ChickenListItem from "./ChickenListItem";

interface ChickenListProps {
  provider: any;
  account: string;
}

const ChickenList: React.FC<ChickenListProps> = ({ provider, account }) => {
  const [message, setMessage] = useState<string>("");
  const [nfts, setNfts] = useState<any[]>([]);


  useEffect(() => {
    const loadNfts = async () => {
      if (account) {
        const data = await utils.loadNfts(provider, NftContract.address, account);
        const updatedNfts = await loadMetadata(data);
        setNfts(updatedNfts);
      }
    };
    loadNfts();
  }, [account]);

  const loadMetadata = async (_nfts: any) => {
    const nftContract = new ethers.Contract(NftContract.address, NftContract.abi, provider);
    const updatedNfts = await Promise.all(
      _nfts.map(async (nft: any) => {
        const chicken = await nftContract.getChickenDetails(nft.tokenId);
        return {
          ...nft,
          isAlive: !chicken.isDead,
          nextEggMintedTime: Number(chicken.nextEggMintedTime),
        };
      })
    );
    return updatedNfts;
  };

  const handleMintEgg = async (tokenId: any) => {
    try {
      const nftContract = new ethers.Contract(NftContract.address, NftContract.abi, provider.getSigner());
      let res = await nftContract.mintEgg(tokenId, { gasLimit: 5000000 });
      await res.wait();
      setMessage("🎉 Successfully minted 1 EGG!");
      loadMetadata(nfts);
    } catch (error: any) {
      setMessage(extractErrorMessage(error.message));
    }
  };

  const extractErrorMessage = (log: any) => {
    const errorMsgPrefix = "reverted with reason string '";
    const start = log.indexOf(errorMsgPrefix);
    const end = log.indexOf("'", start + errorMsgPrefix.length);
    return start !== -1 ? log.substring(start + errorMsgPrefix.length, end) : "An error occurred";
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "auto" }}>
      {message && <Typography variant="body1" sx={{ mb: 2 }}>{message}</Typography>}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
          mb: 4,
          justifyContent: "center",
        }}
      >
        {account && nfts.length > 0 ? (
          nfts.map((chicken) => (
            <ChickenListItem
              key={chicken.tokenId}
              chicken={chicken}
              onMintEgg={() => handleMintEgg(chicken.tokenId)}
              provider={provider}
            />
          ))
        ) : (
          <Typography variant="h6" color="textSecondary">
            🥺 You have no chickens.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChickenList;
