import React from "react";
import {
  Typography,
  Button,
  List,
  ListItem,
  Link,
  Box,
  Container,
} from "@mui/material";
import Base from "../layouts/Base";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Chickens and EGGS</title>
        <meta name="description" content="Play the new web3 game!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Box sx={{ padding: 3 }}>
            <Typography variant="h1" align="center" gutterBottom>
              🐔 Eggspedition! 🐔
            </Typography>

            <Typography variant="body2" gutterBottom>
              Welcome to the grand Eggspedition! Venture into the quirkiest coop
              on the blockchain where each cluck is a call for adventure and
              every egg is a golden opportunity.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
              <Link href="game">
                <Button
                  sx={{ height: 40, mt: 2 }}
                  color="secondary"
                  variant="contained"
                >
                  🐔 To the Chickens 🐔
                </Button>
              </Link>
            </Box>
            <Typography variant="h4" gutterBottom>
              🥚 What Makes Eggspedition So Egg-citing? 🥚
            </Typography>

            <List>
              <ListItem>
                <Typography>
                  🎉 <strong>Interactive Adventures</strong>: Every ChickenNFT
                  is a story waiting to be told! See the dramas unfold and
                  maybe, just maybe, find a golden EGG.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  💰 <strong>Golden Opportunities</strong>: Daily egg hunts lead
                  to EGG tokens! Trade or treasure? Your call!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  🔥 <strong>Fiery Marketplace</strong>: Got a rare clucker? A
                  bejeweled egg? The market's always hot!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  ❤️ <strong>Flock and Flourish</strong>: Our community is all
                  heart... and a bit of feather! Join and see!
                </Typography>
              </ListItem>
            </List>

            <Typography variant="h4" gutterBottom>
              🐣 Ready to Start Your Eggspedition? 🐣
            </Typography>

            <List>
              <ListItem>
                <Typography>
                  <strong>Embark on an Adventure</strong>: Get your first
                  ChickenNFT and watch the saga begin!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>Hunt for Treasures</strong>: Daily quests lead to EGG
                  tokens. Every egg's a mystery!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <strong>Trade or Triumph</strong>: Keep or sell? Every
                  decision is an adventure!
                </Typography>
              </ListItem>
            </List>

            <Box sx={{ display: "flex", justifyContent: "center", margin: 2 }}>
              <Link href="game">
                <Button variant="contained" color="primary" size="large">
                  🚀 Embark on Your Eggspedition!
                </Button>
              </Link>
            </Box>

            <Typography variant="h4" gutterBottom>
              🎤 Hear from our Fellow Adventurers 🎤
            </Typography>

            <Box sx={{ fontStyle: "italic", marginBottom: 2 }}>
              <Typography variant="subtitle1">
                "I never knew a virtual chicken could be so adventurous! Every
                day's a new quest!"
                <Typography variant="caption" display="block">
                  – Jordan the Joyful
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ fontStyle: "italic", marginBottom: 2 }}>
              <Typography variant="subtitle1">
                "Egg hunts, sly foxes, market trades - Eggspedition has it all!"
                <Typography variant="caption" display="block">
                  – Riley the Risk-taker
                </Typography>
              </Typography>
            </Box>

            <Typography variant="h4" gutterBottom>
              🐥 Join the Eggspedition Crew! 🐥
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              We've got a clucking awesome community! Share tales, get updates,
              and partake in special quests.
              <Link href="#">Discord</Link> | <Link href="#">Twitter</Link>
            </Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "primary.main",
              borderRadius: 2,
              boxShadow: 1,
              overflow: "hidden",
              my: 4,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 1) 100%)",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                p: 4,
                position: "relative",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography gutterBottom variant="h4">
                  🎉 Join the Ultimate Eggventure now! 🥚
                </Typography>
                <Typography>
                  Hatch into the world of "Eggspedition!" and embark on a
                  cracking journey like no other. Will you become the ultimate
                  eggplorer? Only one way to find out. Dive in now!
                </Typography>
                <Link href="game">
                  <Button
                    sx={{ height: 40, mt: 2 }}
                    color="secondary"
                    variant="contained"
                  >
                    🐔 To the Chickens 🐔
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Typography variant="body2" align="center" gutterBottom>
            Got queries or need a map for your Eggspedition? Check our{" "}
            <Link href="info">FAQ cove</Link>.
          </Typography>
        </Container>
      </Base>
    </>
  );
}
