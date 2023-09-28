import React from "react";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import { useWeb3React } from "@web3-react/core";

import Base from "../../layouts/Base";
import StakeApes from "./components/StakeApes";
import StakeLilApes from "./components/StakeLilApes";
import StakeIOTAHeros from "./components/StakeIOTAHeros";
import StakeSoonabots from "./components/StakeSoonabots";
import ConnectSection from "../../components/ConnectSection";

export default function Stake() {
  const { active } = useWeb3React();
  return (
    <>
      <Head>
        <title>Stake</title>
        <meta
          name="description"
          content="Stake IOTABOTS or other BOTS and Friends of the Ecosystem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Stake</Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Unlock hidden wealth by participating in our diverse staking pools,
            where you can stake your SOONABOTS NFTs or eligible community
            project NFTs to harvest bountiful Testnet EGGS tokens.
          </Typography>
          {active ? (
            <>
              <StakeSoonabots />
              <StakeApes />
              <StakeLilApes />
              <StakeIOTAHeros />
            </>
          ) : (
            <ConnectSection />
          )}
        </Container>
      </Base>
    </>
  );
}
