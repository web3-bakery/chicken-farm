import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import IOTABOTS_ABI from "../../contracts/iotabots_abi.json";
import TOKEN from "../../contracts/Token.json";

import { Container, Typography, Box } from "@mui/material";

import Base from "../../layouts/Base";
import { ADDRESSES } from "../../contracts/addresses";
import Leaderboard from "../../components/Leaderboard";
import Balance from "../../components/Balance";
import Bot from "./components/Bot";
import BotLoading from "./components/BotLoading";
import { GAMES } from "../../mocks/games";
import Hero from "../../components/Hero";
import Rules from "./components/Rules";
import HowItWorks from "./components/HowItWorks";
import Burn from "./components/Burn";
import ConnectSection from "../../components/ConnectSection";

interface Bot {
  attributes: Array<object>;
  date: number;
  description: string;
  dna: string;
  edition: number;
  image: string;
  name: string;
}

export default function Iotabots() {
  const { active, account, library } = useWeb3React();

  const [playerTokens, setPlayerTokens] = useState<string | null>(null);
  const [tokenSupply, setTokenSupply] = useState<string | null>(null);
  const [bots, setBots] = useState<Array<any>>([]);

  async function loadGame() {
    const provider = new ethers.providers.Web3Provider(library.provider);

    let token = new ethers.Contract(ADDRESSES.eggsAddr, TOKEN, provider);
    let playerTokenBanlance = await token.balanceOf(account);
    playerTokenBanlance = ethers.utils.formatEther(playerTokenBanlance);
    let totalSupply = await token.totalSupply();
    totalSupply = ethers.utils.formatEther(totalSupply);
    setTokenSupply(totalSupply);
    setPlayerTokens(playerTokenBanlance);

    let botsTokenBanlance = await token.balanceOf(ADDRESSES.iotabotsAddr);
    botsTokenBanlance = ethers.utils.formatEther(botsTokenBanlance);
  }

  async function loadBots() {
    const provider = new ethers.providers.Web3Provider(library.provider);
    let contract = new ethers.Contract(
      ADDRESSES.iotabotsAddr,
      IOTABOTS_ABI,
      provider
    );

    const data = await contract.walletOfOwner(account);

    const items: Array<Bot> = await Promise.all(
      data.map(async (i: any) => {
        let token_index = i.toNumber();
        const metadata_url = await contract.tokenURI(token_index);
        const metadata = await axios.get(metadata_url);

        return metadata.data;
      })
    );

    setBots(items);
  }

  useEffect(() => {
    if (account && library.provider) {
      loadBots();
      loadGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  return (
    <>
      <Head>
        <title>IOTABOTS</title>
        <meta
          name="description"
          content="The first PFP NFTs on IOTA and Shimmer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Base hero={<Hero image={GAMES[0].image} />}>
        {active ? (
          <>
            <Container maxWidth="md">
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h3" sx={{ mb: 1 }}>
                    Rock, Paper, Scissors
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    Play now against your IOTABOTS and collect EGGS from wining
                    Rock, Paper, Scissors against them. Good luck!
                  </Typography>
                  {account && library.provider && (
                    <Balance
                      playerBalance={playerTokens}
                      totalSupply={tokenSupply}
                      account={account}
                    />
                  )}
                  <Box sx={{ textAlign: "center" }}>
                    {bots &&
                      bots.map(({ image, name, edition }, index) => (
                        <Bot
                          key={index}
                          id={edition}
                          image={image}
                          name={name}
                          refetchGame={loadGame}
                        />
                      ))}
                    {!bots && <BotLoading />}
                  </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Rules />
                </Box>
              </Box>
            </Container>

            <Container sx={{ mt: 6 }} maxWidth="md">
              <Burn />

              <Box sx={{ my: 6 }}>
                <Typography variant="h3" sx={{ mb: 1 }}>
                  Leaderboard
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  These are the honorful top 10 burners. Go a head and burn some
                  yourself to show up here.
                </Typography>
                {active && <Leaderboard top={10} />}
              </Box>

              <HowItWorks />
            </Container>
          </>
        ) : (
          <Container maxWidth="md">
            <ConnectSection />
          </Container>
        )}
      </Base>
    </>
  );
}
