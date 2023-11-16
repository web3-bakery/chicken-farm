"use client";

import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import Base from "../../layouts/Base";

import MetaMaskCard from "../../components/web3/connectorCards/MetaMaskCard";
import NetworkCard from "../../components/web3/connectorCards/NetworkCard";
import { hooks } from "../../components/web3/connectors/metaMask";
import EggBalance from "../../components/EggBalance";
import ChickenNFT_CONTRACT from "../../contracts/ChickenNFT.json";

import useTokenBalance from "../../hooks/useTokenBalance";

const { useAccounts, useIsActive } = hooks;

export default function Profile() {
  const accounts = useAccounts();

  const isActive = useIsActive();
  const [account, setAccount] = useState("");

  const { data, refetch } = useTokenBalance(
    account,
    ChickenNFT_CONTRACT.address
  );

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
      refetch();
    }
  }, [isActive, accounts]);

  return (
    <Base>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Profile
        </Typography>

        <Typography variant="h5" gutterBottom>
          {account}
        </Typography>
        <Typography variant="body1" gutterBottom>
          ChickenNFT Balance: {data?.toString()}
        </Typography>
        {account && <EggBalance account={account} />}

        <Typography variant="h3" gutterBottom>
          Network Settings
        </Typography>

        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            fontFamily: "sans-serif",
          }}
        >
          <MetaMaskCard />
          <NetworkCard />
        </div>
      </Container>
    </Base>
  );
}
