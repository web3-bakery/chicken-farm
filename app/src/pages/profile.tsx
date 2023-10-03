import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";

import { Container, Typography } from "@mui/material";
import Base from "../layouts/Base";

import MetaMaskCard from "../components/web3/connectorCards/MetaMaskCard";
import NetworkCard from "../components/web3/connectorCards/NetworkCard";

import { hooks, metaMask } from "../components/web3/connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function Profile() {
  const accounts = useAccounts();

  console.log("accounts", accounts);
  const isActive = useIsActive();
  console.log("isActive", isActive);

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Your IOTABOTS and other NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Profile
          </Typography>
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
    </>
  );
}
