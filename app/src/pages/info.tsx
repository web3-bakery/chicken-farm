import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Base from "../layouts/Base";

export default function Info() {
  return (
    <>
      <Head>
        <title>Eggspedition Info & FAQ</title>
        <meta name="description" content="All you need to know about Eggspedition!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">📘 Eggspedition Information</Typography>

          <Typography variant="h6" gutterBottom>
            About Eggspedition
          </Typography>
          <Typography variant="body1" paragraph>
            Eggspedition is an eggciting game set in a vast multiverse, where you can collect, mint, and engage with your very own chickens! Dive deep into this world and discover the countless treasures and adventures awaiting you.
          </Typography>

          <Typography variant="h6" gutterBottom>
            How to Play
          </Typography>
          <Typography variant="body1" paragraph>
            Start your journey by minting a chicken. Once you have your feathered friend, embark on various missions, collect eggs, and expand your flock!
          </Typography>

          <Typography variant="h1">❓ FAQ</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">How do I mint a chicken?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Navigate to the game dashboard, and you'll find the 'Mint Chicken' button. Click on it, and follow the on-screen instructions. It costs 1 EGG Tokens and some SMR Tokens to mint a chicken.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Is there a limit to how many chickens I can mint?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, each player can mint chickens with no limits. You just need an EGG and some SMR Tokens to mint a chicken.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">How do I earn eggs?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Get some chickens and you will get EGGS each day for free until your chickens are dead. Be a good chicken farmer! Also by participating in missions and daily quests. Stay active, and the eggs will come rolling in!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Can I trade or sell my chickens?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, all chickens are represented as NFTs (ERC721 Tokens), allowing you to trade or sell them in any NFT marketplace.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">Are there any upcoming features?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We have a lot planned for the Eggspedition universe! New missions, chickens, and more interactive features are in the pipeline. Stay tuned!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Base>
    </>
  );
}
