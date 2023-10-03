// components/BurnEggs.tsx

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import CHICKEN_CONTRACT from "../contracts/ChickenNFT.json";
import EGGS_CONTRACT from "../contracts/EGGS.json";
const BurnEggs = ({ provider, account }: any) => {
  const [amount, setAmount] = useState<string>("");

  const handleBurn = async () => {
    if (!account) return;

    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      CHICKEN_CONTRACT.address,
      CHICKEN_CONTRACT.abi,
      signer
    );

    const eggs_contract = new ethers.Contract(
      EGGS_CONTRACT.address,
      EGGS_CONTRACT.abi,
      signer
    );

    // Convert the amount to wei (or the smallest unit of your token)
    const amountToBurn = ethers.utils.parseEther(amount);
    console.log("amountToBurn test", amountToBurn);
    try {
      const tx1 = await eggs_contract.approve(contract.address, amountToBurn);
      await tx1.wait();

      const tx = await contract.burnEggs(amountToBurn); // Assuming the method to burn tokens is named "burn"
      await tx.wait();
      console.log("Burned successfully!");
    } catch (error) {
      console.error("Error burning EGGS:", error);
    }
  };

  return (
    <div>
      <TextField
        label="Amount to Burn"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleBurn}>
        Burn EGGS
      </Button>
    </div>
  );
};

export default BurnEggs;
