import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Container, Typography, Tooltip } from "@mui/material";
import Base from "../layouts/Base";
import MintChicken from "../components/MintChicken";
import ChickenList from "../components/ChickenList";

import EGGS_CONTRACT from "../contracts/EGGS.json";
import ChickenNFT_CONTRACT from "../contracts/ChickenNFT.json";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Link from "next/link";

import { hooks, metaMask } from "../components/web3/connectors/metaMask";
import KPI from "../components/KPI";

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
      loadChickenSupply();
    }
  }, [isActive, accounts]);
  useEffect(() => {
    if (account) {
      loadAccountBalance();
    }
  }, [account]);

  const [tokenSupply, setTokenSupply] = useState<string | null>(null);
  const [aliveChickenSupply, setaliveChickenSupply] = useState<string | null>(
    null
  );
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
  async function loadChickenSupply() {
    if (!provider) {
      return;
    }

    let chicken = new ethers.Contract(
      ChickenNFT_CONTRACT.address,
      ChickenNFT_CONTRACT.abi,
      provider
    );

    try {
      let aliveSupply = await chicken.totalAliveChickens();
      console.log("aliveSupply", aliveSupply);
      console.log("aliveSupply", aliveSupply);
      setaliveChickenSupply(aliveSupply.toString());
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
                Mint your ChickenNFT get some eggs and grow your farm!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <KPI
                    label="🥚 Total Eggs"
                    value={tokenSupply}
                    symbol="EGGS"
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <KPI
                    label="🐔 Total Alive Chickens"
                    value={aliveChickenSupply}
                    symbol="Chickens"
                  />
                </Box>
              </Box>

              <Typography variant="h4" gutterBottom>
                Ready to hatch your chicken in no time?
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
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <MintChicken provider={provider} account={account} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <KPI
                      label="🥚 Your Eggs"
                      value={balance?.toString()}
                      symbol="EGGS"
                    />
                  </Box>
                </Box>

                <Typography variant="body2" align="center" gutterBottom>
                  You can mint a ChickenNFT with 1 EGGS and 10 SMR. Questions?
                  Check our <Link href="info">FAQ cove</Link>.
                </Typography>
              </Box>

              <Typography variant="h4" gutterBottom>
                Your Chickens
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
