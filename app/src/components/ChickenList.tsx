import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import utils from "../utils";
import moment from "moment";
import "moment-duration-format";

import NftContract from "../contracts/ChickenNFT.json";

const Chicken = ({ chicken, onMintEgg, isLoading }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 2,
        p: 2,
        boxShadow: 3,
      }}
    >
      <Typography style={{ fontSize: 50 }}>{"🐔"}</Typography>
      <Typography>Chicken #{chicken.tokenId}</Typography>
      {chicken.isAlive ? (
        <Typography>🐔 Alive</Typography>
      ) : (
        <Typography>💀 Dead</Typography>
      )}
      <Button
        variant="contained"
        startIcon={
          isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <Typography>🥚</Typography>
          )
        }
        onClick={onMintEgg}
        disabled={!chicken.isAlive || isLoading}
      >
        {chicken.isAlive
          ? isLoading
            ? "Minting..."
            : "Mint Egg"
          : "Chicken is Dead"}
      </Button>
      {moment(chicken.nextMintTime).diff(moment().unix()) > 0 ? (
        <Typography>
          Next mint in:{" "}
          {moment
            .duration(moment(chicken.nextMintTime).diff(moment().unix()) * 1000)
            .format("h [hrs], m [min], s [secs]")}
        </Typography>
      ) : (
        <Typography>
          {chicken.isAlive ? "You can mint an egg now!" : ""}
        </Typography>
      )}
    </Box>
  );
};

const ChickenList = () => {
  const MINT_INTERVAL = 60;
  const { active, account, library } = useWeb3React();
  const [message, setMessage] = useState("");
  const [nfts, setNfts] = useState<any[]>([]);

  const [tokensToUpdate, setTokensToUpdate] = useState<number[]>([]);

  useEffect(() => {
    if(!account) return;
    const interval = setInterval(() => {
      if (tokensToUpdate.length > 0) {
        tokensToUpdate.forEach((tokenId) => {
          utils
            .loadNfts(library, NftContract.address, account)
            .then((data: any) => {
              loadMetadata(data);
            });
        });
      }
    }, 5000); // Alle 5 Sekunden
    return () => clearInterval(interval); // Reinige den Intervall beim Unmounting
  }, [tokensToUpdate, library, account]);

  useEffect(() => {
    const loadNfts = async () => {
      if (active && account) {
        const data = await utils.loadNfts(
          library,
          NftContract.address,
          account
        );
        const updatedNfts = await loadMetadata(data);
        setNfts(updatedNfts);
      }
    };
    loadNfts();
  }, [active, account]);

  const loadMetadata = async (_nfts: any) => {
    const provider = new ethers.providers.Web3Provider(library.provider);
    const nftContract = new ethers.Contract(
      NftContract.address,
      NftContract.abi,
      provider
    );
    const updatedNfts = await Promise.all(
      _nfts.map(async (nft: any) => {
        const isDead = await nftContract.isDead(nft.tokenId);
        const lastEggMintedTime = await nftContract.lastEggMintedTime(
          nft.tokenId
        );
        return {
          ...nft,
          isAlive: !isDead,
          lastEggMintedTime: Number(lastEggMintedTime),
          nextMintTime: nft.lastEggMintedTime + MINT_INTERVAL,
        };
      })
    );
    return updatedNfts;
  };

  const handleMintEgg = async (tokenId: any) => {
    try {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const nftContract = new ethers.Contract(
        NftContract.address,
        NftContract.abi,
        provider.getSigner()
      );
      await nftContract.mintEgg(tokenId, { gasLimit: 5000000 });
      setMessage(`🎉 Successfully minted 1 EGG!`);
      if (!tokensToUpdate.includes(tokenId)) {
        setTokensToUpdate((prev) => [...prev, tokenId]);
      }
    } catch (error: any) {
      setMessage(`⚠️ ${error.message}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mt: 2,
        mb: 4,
        alignItems: "center",
        justifyContent:
          account && nfts && nfts.length > 0 ? "flex-start" : "center",
      }}
    >
      {message && <Typography variant="body1">{message}</Typography>}
      {account && nfts && nfts.length > 0 ? (
        nfts.map((chicken) => (
          <Chicken
            key={chicken.tokenId}
            chicken={chicken}
            onMintEgg={() => handleMintEgg(chicken.tokenId)}
          />
        ))
      ) : (
        <Typography variant="h6" color="textSecondary">
          🥺 You have no chickens.
        </Typography>
      )}
    </Box>
  );
};

export default ChickenList;
