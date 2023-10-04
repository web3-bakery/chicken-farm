import { useRouter } from "next/router";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  LinearProgress,
  Grid,
  Chip,
} from "@mui/material";
import Head from "next/head";
import Base from "../../layouts/Base";
import { ethers } from "ethers";
import NftContract from "../../contracts/ChickenNFT.json";
import { useEffect, useState } from "react";

import { hooks, metaMask } from "../../components/web3/connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

type Chicken = {
  id: number;
  imageUrl: string;
  stats: {
    attackPower: number;
    defensePower: number;
    intelligencePoints: number;
    speed: number;
    level: number;
    nextEggMintedTime: number;
    birthTime: number;
    isDead: boolean;
  };
};

const ChickenDetail = () => {
  const [chicken, setChicken] = useState<Chicken | null>(null);
  const accounts = useAccounts();
  const provider = useProvider();

  const isActive = useIsActive();

  const [account, setAccount] = useState("");
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if (provider && accounts && accounts?.length > 0) {
      setAccount(accounts[0]);
    }
  }, [accounts, provider]);

  console.log("provider", provider);
  async function loadMetadata() {
    console.log("provider2", provider);
    const nftContract = new ethers.Contract(
      NftContract.address,
      NftContract.abi,
      provider
    );

    console.log("id", id);
    const chickenData = await nftContract.getChickenDetails(Number(id));
    console.log("chickenData", chickenData);
    // Here, you might need a way to generate imageUrl, e.g., based on chickenData.
    const imageUrl = `/path/to/images/${id}.png`; // Just an example

    const chickenDetails: Chicken = {
      id: Number(id),
      imageUrl: imageUrl,
      stats: {
        attackPower: Number(chickenData[0]),
        defensePower: Number(chickenData[1]),
        intelligencePoints: Number(chickenData[2]),
        speed: Number(chickenData[3]),
        level: Number(chickenData[4]),
        nextEggMintedTime: Number(chickenData[5]),
        birthTime: Number(chickenData[6]),
        isDead: chickenData[7],
      },
    };

    console.log("chickenDetails", chickenDetails);

    setChicken(chickenDetails);
  }

  useEffect(() => {
    if (account && provider) {
      loadMetadata();
    }
  }, [account, provider]);

  return (
    <>
      <Head>
        <title>Chicken Detail</title>
      </Head>

      <Base>
        <Container maxWidth="md">
          <Typography variant="h2" gutterBottom align="center">
            🐔 Chicken Detail 🐔
          </Typography>

          <Card sx={{ maxWidth: 800, mx: "auto", my: 4 }}>
            <CardMedia
              component="img"
              height="300"
              image={chicken?.imageUrl || ""}
              alt="Chicken"
            />
            <CardContent>
              <Grid container spacing={2} mt={2}>
                <Grid item xs={6}>
                  💪 Attack Power: {chicken?.stats.attackPower || 0}
                  <LinearProgress
                    variant="determinate"
                    value={chicken?.stats.attackPower! * 10 || 0}
                  />
                </Grid>
                <Grid item xs={6}>
                  🛡️ Defense Power: {chicken?.stats.defensePower || 0}
                  <LinearProgress
                    variant="determinate"
                    value={chicken?.stats.defensePower! * 10 || 0}
                  />
                </Grid>
                <Grid item xs={6}>
                  🧠 Intelligence: {chicken?.stats.intelligencePoints || 0}
                  <LinearProgress
                    variant="determinate"
                    value={chicken?.stats.intelligencePoints! * 10 || 0}
                  />
                </Grid>
                <Grid item xs={6}>
                  ⚡ Speed: {chicken?.stats.speed || 0}
                  <LinearProgress
                    
                    variant="determinate"
                    value={chicken?.stats.speed! * 10 || 0}
                  />
                </Grid>
              </Grid>

              <Typography variant="body2" mt={2}>
                🏆 Level: {chicken?.stats.level}
              </Typography>
              {chicken?.stats.isDead ? (
                <Chip label="Passed Away 🥀" color="error" />
              ) : (
                <Chip label="Alive & Clucking" color="success" />
              )}
            </CardContent>
          </Card>
        </Container>
      </Base>
    </>
  );
};

export default ChickenDetail;
