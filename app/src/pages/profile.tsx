import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";

import { Container, Typography } from "@mui/material";
import Base from "../layouts/Base";
import { PoolShares } from "../components/PoolShares";
import ConnectSection from "../components/ConnectSection";

export default function Profile() {
  const { library, account } = useWeb3React();

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
          {account ? (

            <>
              <h1>Profile</h1>
            </>
          ) : <ConnectSection />}
        </Container>
      </Base>
    </>
  );
}
