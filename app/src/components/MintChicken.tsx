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

const MintChicken = ({ provider, account, onChickenMinted }: any) => {
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

      // Check if the NFT contract has been approved to spend our tokens
      const allowance = await eggsContract.allowance(
        account,
        NftContract.address
      );

      if (allowance.lt(ethers.utils.parseEther("1"))) {
        setMessage(`Please approve the NFT contract to spend your tokens`);
        // Approve the NFT contract to spend our tokens
        const tx = await eggsContract.approve(
          NftContract.address,
          ethers.utils.parseEther("1")
        );
        await tx.wait();
      }

      const result = await nftContract.createChicken({
        gasLimit: 5000000,
        value: ethers.utils.parseEther("10"),
      });
      setMessage(`🎉 Successfully minted NFT!`);
      let x = await result.wait();
      onChickenMinted(x);
      console.log("Button::result", result);
      console.log("Button::wait", x);
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
          Mint Chicken
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
