import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Box, Typography, Button, CircularProgress, Alert } from "@mui/material";

import NftContract from "../contracts/ChickenNFT.json";
import EGGSContract from "../contracts/EGGS.json";

const MintChicken = () => {
  const [nftContract, setNftContract] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { account, library } = useWeb3React();

  useEffect(() => {
    if (library && account) {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const _nftContract = new ethers.Contract(
        NftContract.address,
        NftContract.abi,
        signer
      );

      setNftContract(_nftContract);
    }
  }, [library, account]);

  const mintNFT = async () => {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const eggsContract = new ethers.Contract(
        EGGSContract.address,
        EGGSContract.abi,
        signer
      );
      const tx = await eggsContract.approve(NftContract.address, ethers.utils.parseEther("1"));
      await tx.wait();
      const result = await nftContract.createChicken({ gasLimit: 5000000, value: ethers.utils.parseEther("10") });
      setMessage(`🎉 Successfully minted NFT!`);
      await result.wait();
    } catch (error: any) {
      setMessage(`❌ Error minting NFT: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 3, borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Ready to hatch your chicken?
      </Typography>

      <Box mt={2}>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <Button variant="contained" color="primary" size="large" onClick={mintNFT}>
            Mint ChickenNFT
          </Button>
        )}
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
