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
import Call2ActionBox from "../components/Home/Call2ActionBox";

export default function Home() {
  return (
    <>
      <Head>
        <title>🐔 Chicken Farm</title>
        <meta name="description" content="Play the new web3 game!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Box sx={{ padding: 4, spacing: 4 }}>
            <Typography variant="h1" align="center" gutterBottom>
              🐔 Chicken Farm 🐔
            </Typography>

            <Typography variant="body1" gutterBottom>
              Dive into the ultimate coop on the metaverse. Adventure awaits in
              every EGG!
            </Typography>

            <Call2ActionBox
              title="🎉 Join the Ultimate Eggventure now! 🥚"
              description="Hatch into the world of 'Eggspedition!' and embark on a cracking
            journey like no other. Will you become the ultimate eggplorer? Only
            one way to find out. Dive in now!"
              link="farm"
              linkText="🐔 To the Chickens 🐔"
            />

            <Typography variant="h4" mt={4} gutterBottom>
              🥚 Why Join The Eggspedition? 🥚
            </Typography>

            <List>
              <ListItem>
                <Typography>
                  🎉 Unique ChickenNFT tales and crazy EGG hunts!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  💰 Earn and trade EGG tokens. It's all in your hands!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>🔥 Hot market for rare items!</Typography>
              </ListItem>
              <ListItem>
                <Typography>❤️ Join our vibrant community!</Typography>
              </ListItem>
            </List>

            <Typography variant="h4" mt={4} gutterBottom>
              🐣 Start Your Journey 🐣
            </Typography>

            <List>
              <ListItem>
                <Typography>
                  Collect ChickenNFTs and unveil their stories.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Daily quests with mystery eggs!</Typography>
              </ListItem>
              <ListItem>
                <Typography>Trade, collect, and have fun!</Typography>
              </ListItem>
            </List>

            <Typography variant="h4" mt={4} gutterBottom>
              🎤 Reviews from Adventurers 🎤
            </Typography>

            <Box sx={{ fontStyle: "italic", mt: 2 }}>
              <Typography variant="subtitle1">
                "Virtual chickens, real fun! Every day is a new quest!"
                <Typography variant="caption" display="block">
                  – Chick Norris
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ fontStyle: "italic", mt: 2 }}>
              <Typography variant="subtitle1">
                "This Eggspedition is a egg-citing web3 egg-venture!"
                <Typography variant="caption" display="block">
                  – Mc Egg
                </Typography>
              </Typography>
            </Box>

            <Box sx={{ fontStyle: "italic", mt: 2 }}>
              <Typography variant="subtitle1">
                "BEE BOB BOO"
                <Typography variant="caption" display="block">
                  – iotabots
                </Typography>
              </Typography>
            </Box>

            <Typography variant="h4" mt={4} gutterBottom>
              Disclaimer
            </Typography>
            <Typography variant="body1" gutterBottom>
              Step into the wild world of Eggspedition with an understanding
              that this feathery foray is all about fun and games and does not
              constitute financial advice. While crypto can be clucking
              unpredictable, ensure you're only putting in what you can afford
              to lose. Before diving beak-first, do your homework and remember:
              every crypto coop has its risks, and no golden egg is guaranteed!
            </Typography>
            <Call2ActionBox
              title={"🎉 Join the Ultimate Eggventure now! 🥚"}
              description={
                "Hatch into the world of 'Eggspedition!' and embark on a cracking journey like no other. Will you become the ultimate eggplorer? Only one way to find out. Dive in now!"
              }
              link={"farm"}
              linkText={"🐔 To the Chickens 🐔"}
            />
            <Typography variant="body2" align="center" mt={4} gutterBottom>
              Need help? Explore our <Link href="info">FAQs</Link>.
            </Typography>
          </Box>
        </Container>
      </Base>
    </>
  );
}
