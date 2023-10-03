import React, { useState } from "react";
import { ethers } from "ethers";
import abi from "../../contracts/EGGSBurnLeaderboard.json";
import TOKEN from "../../contracts/Token.json";

import { Box, Button, TextField, Typography } from "@mui/material";
import { ADDRESSES } from "../../contracts/addresses";

const BurnTokens = ({provider, isActive}: any) => {
  const [amount, setAmount] = useState<number>(10);
  const [status, setStatus] = useState("");

  const contractAddress = ADDRESSES.eggsBurnAddr;
  const tokenContractAddress = ADDRESSES.eggsAddr;

  const burnTokens = async () => {
    if (!provider) {
      setStatus("No provider available");
      return;
    }

    if (!ethers.utils.isAddress(contractAddress)) {
      setStatus("Invalid contract address");
      return;
    }

    try {
      await approveContract();
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      setStatus("Sending transaction...");
      const tx = await contract.burnTokens(
        ethers.utils.parseUnits(String(amount), 18)
      );
      setStatus("Transaction sent, waiting for confirmation...");
      await tx.wait();
      setStatus("Transaction confirmed, tokens burned! 🔥");
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const approveContract = async () => {
    if (!provider) {
      setStatus("No provider available");
      return;
    }

    if (!ethers.utils.isAddress(contractAddress)) {
      setStatus("Invalid contract address");
      return;
    }

    const signer = provider.getSigner();
    const amountToApprove = ethers.utils.parseUnits(String(amount), 18);

    try {
      setStatus("Sending approval transaction...");
      let token = new ethers.Contract(tokenContractAddress, TOKEN, signer);
      const tx = await token.approve(contractAddress, amountToApprove);
      setStatus("Approval transaction sent, waiting for confirmation...");
      await tx.wait();
      setStatus("Approval transaction confirmed");
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "background.paper",
      }}
    >
      {isActive && (
        <Box sx={{ display: "flex", gap: 4 }}>
          <TextField
            sx={{
              flex: 1,
            }}
            type="number"
            variant="filled"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            label="Amount to burn"
          />
          <Button
            variant="contained"
            disabled={amount <= 0}
            onClick={burnTokens}
          >
            Burn Tokens 🔥
          </Button>
        </Box>
      )}
      {status && <Typography>{status}</Typography>}
    </Box>
  );
};

export default BurnTokens;
