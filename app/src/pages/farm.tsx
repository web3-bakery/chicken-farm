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
  const [loading, setLoading] = useState(false);

  async function onChickenMinted(x: any) {
    console.log("farm::onChickenMinted", x);
    setLoading(true);
    await loadTotalSupply();
    await loadChickenSupply();
    await loadAccountBalance();
    setLoading(false);
  }

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
              <Typography gutterBottom mb={2}>
                Mint your ChickenNFT get some eggs and grow your farm!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  flexWrap: "wrap",
                  mb: 4,
                }}
              >
                <KPI label="🥚 Total Eggs" value={tokenSupply} symbol="EGGS" />
                <KPI
                  label="🐔 Total Alive Chickens"
                  value={aliveChickenSupply}
                  symbol="Chickens"
                />
              </Box>

              <Typography variant="h4" gutterBottom>
                Ready to hatch your chicken in no time?
              </Typography>
              <Typography gutterBottom>
                You can mint a ChickenNFT with 1 EGGS and 10 SMR. Questions?
                Check our <Link href="info">FAQ cove</Link>.
              </Typography>
              <Box sx={{ mt: 2, mb: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <KPI
                    label="🥚 Your Eggs"
                    value={balance?.toString()}
                    symbol="EGGS"
                  />
                  <MintChicken
                    provider={provider}
                    account={account}
                    onChickenMinted={onChickenMinted}
                  />
                </Box>
              </Box>

              <Typography variant="h4" gutterBottom>
                Your Chickens
              </Typography>
              {loading ? (
                <Typography gutterBottom>Loading...</Typography>
              ) : (
                <ChickenList provider={provider} account={account} />
              )}
            </>
          )}
        </Container>
      </Base>
    </>
  );
}
