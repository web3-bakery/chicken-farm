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
  Avatar,
  Badge,
} from "@mui/material";
import Head from "next/head";
import Base from "../../layouts/Base";
import { ethers } from "ethers";
import NftContract from "../../contracts/ChickenNFT.json";
import { useEffect, useState } from "react";

import { hooks, metaMask } from "../../components/web3/connectors/metaMask";
import ChickenAvatar from "../../components/ChickenAvatar";
import KPIProgress from "../../components/KPIProgress";

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

  const KPIS = [
    {
      label: "💪Attack",
      value: chicken?.stats.attackPower,
    },
    {
      label: "🛡️Defense",
      value: chicken?.stats.defensePower,
    },
    {
      label: "🧠 Intelligence",
      value: chicken?.stats.intelligencePoints,
    },
    {
      label: "⚡ Speed",
      value: chicken?.stats.speed,
    },
  ];

  return (
    <>
      <Head>
        <title>Chicken Detail</title>
      </Head>

      <Base>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 4,
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "#2E2E2E",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ChickenAvatar level={chicken?.stats.level || 0} />
              <Typography mt={2} mb={1} variant="h5" align="center">
                Chicken #{id}
              </Typography>
              {!chicken?.stats.isDead ? (
                <Chip
                  size="small"
                  label="Alive"
                  color="success"
                  sx={{ fontWeight: "bold" }}
                />
              ) : (
                <Chip
                  size="small"
                  label="Dead"
                  sx={{ fontWeight: "bold" }}
                  color="error"
                />
              )}
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              {chicken &&
                KPIS.map((kpi) => (
                  <KPIProgress label={kpi.label} value={kpi.value || 0} />
                ))}
            </Box>
          </Box>
        </Container>
      </Base>
    </>
  );
};

export default ChickenDetail;
