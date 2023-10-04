import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";

import NftContract from "../contracts/ChickenNFT.json";
import EGGSContract from "../contracts/EGGS.json";

const MintChicken = ({ provider, account }: any) => {
  const [nftContract, setNftContract] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (account) {
      const signer = provider.getSigner();
      const _nftContract = new ethers.Contract(
        NftContract.address,
        NftContract.abi,
        signer
      );

      setNftContract(_nftContract);
    }
  }, [account]);

  const mintNFT = async () => {
    setLoading(true);
    try {
      const signer = provider.getSigner();
      const eggsContract = new ethers.Contract(
        EGGSContract.address,
        EGGSContract.abi,
        signer
      );
      const tx = await eggsContract.approve(
        NftContract.address,
        ethers.utils.parseEther("1")
      );
      await tx.wait();
      const result = await nftContract.createChicken({
        gasLimit: 5000000,
        value: ethers.utils.parseEther("10"),
      });
      setMessage(`🎉 Successfully minted NFT!`);
      await result.wait();
    } catch (error: any) {
      setMessage(`❌ Error minting NFT: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={mintNFT}
          startIcon={
            loading ? (
              <CircularProgress size={24} />
            ) : (
              <Typography>🐔</Typography>
            )
          }
        >
          Mint ChickenNFT
        </Button>
      </Box>

      {message && (
        <Box mt={2}>
          {message.startsWith("🎉") ? (
            <Alert severity="success">{message}</Alert>
          ) : (
            <Alert severity="error">{message}</Alert>
          )}
        </Box>
      )}
    </Box>
  );
};

export default MintChicken;
