import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import { hooks, metaMask } from "../web3/connectors/metaMask";
import FARM_CONTRACT from "../../contracts/FarmNFT.json";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

const CreateNewFarm = () => {
  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const provider = useProvider();

  const isActive = useIsActive();
  console.log("isActive", isActive);

  const createNewFarm = async () => {
    if (!provider) {
      return;
    }
    const farmNFT = new ethers.Contract(
      FARM_CONTRACT.address,
      FARM_CONTRACT.abi,
      provider.getSigner()
    );
    if (account) {
      const tx = await farmNFT.initializeFarm({ gasLimit: 1000000 });
      const receipt = await tx.wait();
      console.log(receipt);
      // TODO: Update UI to reflect changes or fetch the updated farm details.
    }
  };

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  return (
    <Button variant="contained" color="primary" onClick={createNewFarm}>
      Create New Farm
    </Button>
  );
};

export default CreateNewFarm;
