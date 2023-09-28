import Head from "next/head";
import React from "react";
import Base from "../../layouts/Base";
import { Container } from "@mui/material";
import Hero from "../../components/Hero";
import { GAMES } from "../../mocks/games";
import SoonabotRacing from "./components/SoonabotRacing";
import { useWeb3React } from "@web3-react/core";
import ConnectSection from "../../components/ConnectSection";

export default function Soonabots() {
  const { account } = useWeb3React();

  return (
    <>
      <Head>
        <title>Soonabots</title>
        <meta
          name="description"
          content="Soonabots Race - a web3 Game for Soonabots NFTs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base hero={<Hero image={GAMES[1].image} />}>
        <Container maxWidth="md">
          {account ? <SoonabotRacing /> : <ConnectSection />}
        </Container>
      </Base>
    </>
  );
}
