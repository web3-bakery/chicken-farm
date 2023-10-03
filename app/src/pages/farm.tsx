import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Container, Typography, Tooltip } from "@mui/material";
import Base from "../layouts/Base";
import MintChicken from "../components/MintChicken";
import ChickenList from "../components/ChickenList";

import EGGS_CONTRACT from "../contracts/EGGS.json";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Link from "next/link";

import { hooks, metaMask } from "../components/web3/connectors/metaMask";

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
      loadTotalSupply();
    }
  }, [isActive, accounts]);
  useEffect(() => {
    if (account) {
      loadAccountBalance();
    }
  }, [account]);

  const [tokenSupply, setTokenSupply] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  async function loadAccountBalance() {
    if (!provider) {
      return;
    }

    let token = new ethers.Contract(
      EGGS_CONTRACT.address,
      EGGS_CONTRACT.abi,
      provider
    );
    try {
      let _balance = await token.balanceOf(account);
      _balance = ethers.utils.formatEther(_balance);
      setBalance(_balance);
    } catch (error) {
      console.log("error", error);
    }
  }
  async function loadTotalSupply() {
    if (!provider) {
      return;
    }

    let token = new ethers.Contract(
      EGGS_CONTRACT.address,
      EGGS_CONTRACT.abi,
      provider
    );

    try {
      let totalSupply = await token.totalSupply();
      totalSupply = ethers.utils.formatEther(totalSupply);
      setTokenSupply(totalSupply);
    } catch (error) {
      console.log("error", error);
    }
  }

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
              <Typography variant="h3" gutterBottom>
                Welcome new farmer!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please connect your wallet to continue.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h1">Your Eggspedition! </Typography>
              <Typography variant="h5" gutterBottom>
                Dive into the eggciting multiverse, where chickens reign supreme
                and treasures await.
              </Typography>

              <Tooltip title="This is the total amount of eggs in the Eggspedition universe!">
                <Box
                  sx={{
                    bgcolor: "primary",
                    borderRadius: 2,
                    boxShadow: 1,
                    overflow: "hidden",
                    my: 4,
                    position: "relative",
                    p: 2,
                  }}
                >
                  🥚 Total Eggs in the Universe: <strong>{tokenSupply}</strong>
                </Box>
              </Tooltip>
              <Tooltip title="This is your amount of eggs!">
                <Box
                  sx={{
                    bgcolor: "primary",
                    borderRadius: 2,
                    boxShadow: 1,
                    overflow: "hidden",
                    my: 4,
                    position: "relative",
                    p: 2,
                  }}
                >
                  🥚 Your Eggs: <strong>{balance}</strong>
                </Box>
              </Tooltip>

              <Typography variant="h6" gutterBottom>
                Ready for a new chicken companion?
              </Typography>
              <Box
                sx={{
                  bgcolor: "primary",
                  borderRadius: 2,
                  boxShadow: 1,
                  overflow: "hidden",
                  my: 4,
                  position: "relative",
                  p: 2,
                }}
              >
                <MintChicken provider={provider} account={account} />
                <Typography variant="body2" align="center" gutterBottom>
                  You can mint a ChickenNFT with 1 EGGS and 10 SMR. Questions?
                  Check our <Link href="info">FAQ cove</Link>.
                </Typography>
              </Box>

              <Typography variant="h6" gutterBottom>
                Your Eggspeditioner Chickens:
              </Typography>
              <Box
                sx={{
                  bgcolor: "primary",
                  borderRadius: 2,
                  boxShadow: 1,
                  overflow: "hidden",
                  my: 4,
                  position: "relative",
                  p: 2,
                }}
              >
                <ChickenList provider={provider} account={account} />
              </Box>
            </>
          )}
        </Container>
      </Base>
    </>
  );
}
