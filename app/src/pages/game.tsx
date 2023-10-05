import React, { useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import FarmDisplay from "../components/Game/FarmDisplay";
import Base from "../layouts/Base";
import CreateNewFarm from "../components/Game/CreateNewFarm";
import ItemsDisplay from "../components/Game/ItemsDisplay";

import { hooks, metaMask } from "../components/web3/connectors/metaMask";
import KPI from "../components/KPI";
import UserFarms from "../components/Game/UserFarms";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

const Game = () => {
  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const provider = useProvider();
  const [farmId, setFarmId] = useState<any | null>(null);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const isActive = useIsActive();
  console.log("isActive", isActive);
  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  const onFarmClicked = (farmId: string) => {
    console.log("onFarmClicked", farmId);
    setFarmId(farmId.toString());
  };
  const onItemSelected = (item: any) => {
    console.log("onItemSelected", item);
    setSelectedItem(item);
  };

  return (
    <Base>
      <Box padding={3}>
        <CreateNewFarm />
        <Typography variant="h4" gutterBottom>
          Your Farms
        </Typography>

        <UserFarms onFarmClickedCallback={onFarmClicked} />

        {account && provider ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <FarmDisplay farmId={farmId} selectedItem={selectedItem} />
            </Grid>
            <Grid item xs={12} md={4}>
              <ItemsDisplay onItemSelectedCallback={onItemSelected} />
            </Grid>
          </Grid>
        ) : (
          <Typography>Please connect your wallet to view your farm.</Typography>
        )}
      </Box>
    </Base>
  );
};

export default Game;
