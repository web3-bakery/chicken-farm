import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Box, Typography, Button } from "@mui/material";

import NftStakeArtifact from "../../../contracts/NftStake.json";
import NftArtifact from "../../../contracts/IERC721.json";
import useSoonabots from "../../../hooks/contracts/useSoonabots";
import { ADDRESSES } from "../../../contracts/addresses";

interface NftProps {
  tokenId: number;
  url: string;
  staked?: boolean;
}

interface Props {
  stakeAddress: string;
  nft: NftProps;
  disabled: boolean;
}

const StakeButton: React.FC<Props> = (props) => {
  const { nft, stakeAddress, disabled } = props;

  const [nftStake, setNftStake] = useState<any>(null);
  const [message, setMessage] = useState("");

  const { account, library } = useWeb3React();

  const { refetch } = useSoonabots(account || "", ADDRESSES.soonabotsAddr);

  useEffect(() => {
    if (library && account) {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const nftStakeContract = new ethers.Contract(
        stakeAddress,
        NftStakeArtifact.abi,
        signer
      );

      setNftStake(nftStakeContract);
    }
  }, [library, account, nft]);

  const stakeNFT = async () => {
    if (nftStake && nft.tokenId) {
      try {
        const provider = new ethers.providers.Web3Provider(library.provider);
        const signer = provider.getSigner();
        const soonabotsContract = new ethers.Contract(
          ADDRESSES.soonabotsAddr,
          NftArtifact.abi,
          signer
        );
        const tx = await soonabotsContract.approve(stakeAddress, nft.tokenId);
        await tx.wait();
        const result = await nftStake.stakeNFT([nft.tokenId]);
        setMessage(`🎉 Successfully staked NFT with ID ${nft.tokenId}!`);
        console.log("NFT staked:", result);
        nft.staked = true;
        await result.wait();
        refetch();
      } catch (error: any) {
        setMessage(`❌ Error staking NFT: ${error.message}`);
        console.error("Error staking NFT:", error);
      }
    }
  };

  return (
    <Box>
      <Box>
        {disabled ? (
          <Button disabled={disabled} variant="contained">
            Stake Soon
          </Button>
        ) : (
          <Button disabled={disabled} variant="contained" onClick={stakeNFT}>
            Stake NFT
          </Button>
        )}
      </Box>

      {message && <Typography variant="body1">{message}</Typography>}
    </Box>
  );
};

export default StakeButton;
