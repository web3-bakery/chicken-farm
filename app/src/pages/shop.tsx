import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Base from "../layouts/Base";
import ShopItem from "../components/Shop/ShopItem";

import ChickenNFT_CONTRACT from "../contracts/ChickenNFT.json";
import ChickenCoop_CONTRACT from "../contracts/ChickenCoop.json";
import { hooks, metaMask } from "../components/web3/connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function Shop() {
  const accounts = useAccounts();

  console.log("accounts", accounts);
  const isActive = useIsActive();
  console.log("isActive", isActive);
  const [account, setAccount] = useState("");

  console.log("isActive", isActive);
  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Buy cool things!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}
