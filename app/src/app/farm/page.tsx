"use client";

import React, { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import Base from "../../layouts/Base";
import { hooks } from "../../components/web3/connectors/metaMask";
import ChickenCoops from "../../components/farm/ChickenCoops";

const { useAccounts, useIsActive } = hooks;

const Farm = () => {
  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const isActive = useIsActive();

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  return (
    <>
      <Base>
        <Container maxWidth="md">
          {!isActive ? (
            <>
              <Typography variant="h1" gutterBottom>
                Welcome new farmer!
              </Typography>
              <Typography gutterBottom>
                Please connect your wallet to continue.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h1">Farm </Typography>
              <Typography variant="h3" gutterBottom>
                Your Chicken Coops
              </Typography>
              {account && <ChickenCoops account={account} />}
            </>
          )}
        </Container>
      </Base>
    </>
  );
};

export default Farm;
