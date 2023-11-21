"use client";
import React, { useEffect, useState } from "react";
import Base from "../../layouts/Base";
import { Container, Typography } from "@mui/material";
import { hooks } from "../../components/web3/connectors/metaMask";
import ItemList from "./(_components)/ItemList";
const { useAccounts, useIsActive } = hooks;

const Inventory = () => {
  const accounts = useAccounts();
  const isActive = useIsActive();

  const [account, setAccount] = useState("");

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  return (
    <Base>
      <Container maxWidth="md">
        <Typography variant="h1">Inventory</Typography>
        {account ? (
          <>
            <p>account connected.</p>
            <ItemList account={account} />
          </>
        ) : (
          <p>account not connected.</p>
        )}
      </Container>
    </Base>
  );
};

export default Inventory;
