import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Container, Typography, Tooltip } from "@mui/material";
import Base from "../../layouts/Base";
import { hooks, metaMask } from "../../components/web3/connectors/metaMask";
import ChickenCoops from "../../components/farm/ChickenCoops";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function Farm() {
  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const provider = useProvider();

  const isActive = useIsActive();
  console.log("isActive", isActive);
  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  return (
    <>
      <Head>
        <title>Eggspedition: The Eggciting Journey!</title>
        <meta
          name="description"
          content="Embark on the ultimate eggventure in the world of web3 games."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
}
