import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import NftStakeArtifact from "../../../contracts/NftStake.json";
import StakingCard from "../../../components/StakingCard";

interface NftProps {
  tokenId: number;
  url: string;
}
interface Props {
  stakeAddress: string;
  nft: NftProps;
}
const StakedNFTCard: React.FC<Props> = (props) => {
  const { stakeAddress, nft } = props;

  const { account, library } = useWeb3React();

  const [message, setMessage] = useState("");
  const [earned, setEarned] = useState(-1);
  const [nftStake, setNftStake] = useState<any>(null);

  useEffect(() => {
    if (account && library && !nftStake) {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const nftStakeContract = new ethers.Contract(
        stakeAddress,
        NftStakeArtifact.abi,
        signer
      );

      setNftStake(nftStakeContract);
    }
    const intervalId = setInterval(() => {
      fetchEarned();
    }, 1000 * 5);
    return () => clearInterval(intervalId);
  }, [account, nft]);

  const fetchEarned = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const nftStakeContract = new ethers.Contract(
        stakeAddress,
        NftStakeArtifact.abi,
        signer
      );
      const earnedAmount = await nftStakeContract.getCurrentStakeEarned(
        nft.tokenId
      );
      setEarned(earnedAmount.toString());
    } catch (error: any) {
      setMessage(`❌ Error fetching earned rewards: ${error.message}`);
      console.error("Error fetching earned rewards:", error);
    }
  };

  const unStakeNFT = async () => {
    if (nftStake && nft.tokenId) {
      try {
        // TODO: Not doing anything with the result so far.
        const result = await nftStake.unStakeNFT(nft.tokenId);
        setMessage(`🎉 Successfully unstaked NFT with ID ${nft.tokenId}!`);
      } catch (error: any) {
        setMessage(`❌ Error unstaking NFT: ${error.message}`);
      }
    }
  };

  const harvest = async () => {
    if (nftStake) {
      try {
        // TODO: Not doing anything with the result so far.
        const result = await nftStake.harvest(nft.tokenId);
        setMessage(
          `🎉 Successfully harvested rewards for NFT with ID ${nft.tokenId}!`
        );
        setEarned(0);
      } catch (error: any) {
        setMessage(`❌ Error harvesting rewards: ${error.message}`);
        console.error("Error harvesting rewards:", error);
      }
    }
  };

  return (
    <>
      {nft && (
        <StakingCard
          image={nft?.url}
          name={`#${nft.tokenId}`}
          description={`Earned: ${ethers.utils.formatEther(earned)} EGGS`}
          onHarvest={harvest}
          onUnStake={unStakeNFT}
        />
      )}
    </>
  );
};

export default StakedNFTCard;