"use client";

import React, { useEffect, useState } from "react";

import { Container, Typography } from "@mui/material";
import Base from "../../layouts/Base";
import ShopItem from "../../components/Shop/ShopItem";

import ChickenNFT_CONTRACT from "../../contracts/ChickenNFT.json";
import ChickenCoop_CONTRACT from "../../contracts/ChickenCoop.json";
import { hooks } from "../../components/web3/connectors/metaMask";

const { useAccounts, useIsActive } = hooks;

const Shop = () => {
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
        <Typography variant="h1">Shop</Typography>
        {account ? (
          <>
            <ShopItem
              name="Chicken"
              account={account}
              contractAddress={ChickenNFT_CONTRACT.address}
              abi={ChickenNFT_CONTRACT.abi}
            />
            <ShopItem
              name="ChickenCoop"
              account={account}
              contractAddress={ChickenCoop_CONTRACT.address}
              abi={ChickenCoop_CONTRACT.abi}
            />
          </>
        ) : (
          <p>account not connected.</p>
        )}
      </Container>
    </Base>
  );
};

export default Shop;
