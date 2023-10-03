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

const ChickenDetail = ({provider, account}: any) => {
  const [chicken, setChicken] = useState<Chicken | null>(null);

  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  async function loadMetadata() {
    const nftContract = new ethers.Contract(
      NftContract.address,
      NftContract.abi,
      provider
    );

    const chickenData = await nftContract.getChickenDetails(Number(id));
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
    if (account) {
      loadMetadata();
    }
  }, [account, id]);

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
                <Chip label="Passed Away 🥀" color="secondary" />
              ) : (
                <Chip label="Alive & Clucking" color="primary" />
              )}
            </CardContent>
          </Card>
          <pre style={{width: "100px"}}>{JSON.stringify(chicken)}</pre>
        </Container>
      </Base>
    </>
  );
};

export default ChickenDetail;
