import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Link,
  List,
  ListItem,
  Typography,
  Tooltip,
} from "@mui/material";
import Base from "../layouts/Base";
import { GAMES } from "../mocks/games";
import GameCard from "../components/GameCard";
import MintChicken from "../components/MintChicken";
import ChickenList from "../components/ChickenList";

import EGGS_CONTRACT from "../contracts/EGGS.json";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

export default function Game() {
  const { active, account, library } = useWeb3React();

  const [tokenSupply, setTokenSupply] = useState<string | null>(null);

  async function loadTotalSupply() {
    const provider = new ethers.providers.Web3Provider(library.provider);

    let token = new ethers.Contract(
      EGGS_CONTRACT.address,
      EGGS_CONTRACT.abi,
      provider
    );
    let totalSupply = await token.totalSupply();
    totalSupply = ethers.utils.formatEther(totalSupply);
    setTokenSupply(totalSupply);
  }

  useEffect(() => {
    if (account && library.provider) {
      loadTotalSupply();
    }
  }, [account, library]);

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
          {!active ? (
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
                <MintChicken />
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
                <ChickenList />
              </Box>
            </>
          )}
        </Container>
      </Base>
    </>
  );
}
