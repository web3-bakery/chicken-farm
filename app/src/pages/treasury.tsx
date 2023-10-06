import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Tooltip,
  Button,
  List,
  ListItem,
} from "@mui/material";
import Base from "../layouts/Base";
import BurnEggs from "../components/BurnEggs";

import EGGS_CONTRACT from "../contracts/EGGS.json";
import CHICKEN_NFT_CONTRACT from "../contracts/ChickenNFT.json";

import { ethers } from "ethers";
import moment from "moment";
import "moment-duration-format";
import { hooks, metaMask } from "../components/web3/connectors/metaMask";
import KPI from "../components/KPI";
import Link from "next/link";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
export default function Treasury() {
  const accounts = useAccounts();
  const provider = useProvider();

  const isActive = useIsActive();

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState("");
  const [rewards, setRewards] = useState("0");
  const [aliveChickenSupply, setaliveChickenSupply] = useState<string | null>(
    null
  );
  const [treasuryBalance, setTreasuryBalance] = useState<string | null>(null);
  const [aliveUserChickens, setAliveUserChickens] = useState<any | null>(null);
  const [cycleTimeLeft, setCycleTimeLeft] = useState<string>("");

  async function startNewCycle() {
    setLoading(true);
    if (!provider && !account) {
      return;
    }
    if (provider) {
      let chickenNFT = new ethers.Contract(
        CHICKEN_NFT_CONTRACT.address,
        CHICKEN_NFT_CONTRACT.abi,
        provider.getSigner()
      );

      const tx = await chickenNFT.startNewCycle();
      await tx.wait();
      setLoading(false);
    }
  }

  async function claimRewards() {
    console.log("claimRewards test");
    if (!provider && !account) {
      return;
    }
    let chickenNFT = new ethers.Contract(
      CHICKEN_NFT_CONTRACT.address,
      CHICKEN_NFT_CONTRACT.abi,
      provider?.getSigner()
    );

    let tx = await chickenNFT.withdrawRewards();
    await tx.wait();
  }
  async function loadTotalSupply() {
    setLoading(true);
    if (!provider && !account) {
      return;
    }
    let token = new ethers.Contract(
      EGGS_CONTRACT.address,
      EGGS_CONTRACT.abi,
      provider
    );

    let chickenNFT = new ethers.Contract(
      CHICKEN_NFT_CONTRACT.address,
      CHICKEN_NFT_CONTRACT.abi,
      provider
    );

    let totalChickenSupply = await chickenNFT.totalAliveChickens();
    console.log("totalChickenSupply test", totalChickenSupply);
    setaliveChickenSupply(totalChickenSupply.toString());
    let _rewards = await chickenNFT.pendingRewards(account);
    setRewards(ethers.utils.formatEther(_rewards));
    let userChickens = await chickenNFT.walletOfOwner(account);
    let _aliveUserChickens = [];
    for (let i = 0; i < userChickens.length; i++) {
      let chicken = userChickens[i];
      let chickenInfo = await chickenNFT.getChickenDetails(chicken);
      console.log("chickenInfo test", chickenInfo);
      if (chickenInfo.isDead == false) {
        _aliveUserChickens.push(chicken);
      }
    }
    setAliveUserChickens(_aliveUserChickens);
    // Treasury Balance
    let _treasuryBalance = await chickenNFT.treasury();
    console.log("Treasury value:", ethers.utils.formatEther(_treasuryBalance)); // Convert from wei to ether for display: ;
    setTreasuryBalance(ethers.utils.formatEther(_treasuryBalance));

    // Cycle Time Left
    let nextCycleTimestamp = await chickenNFT.nextCycleTimestamp();

    let x = moment
      .duration(moment(Number(nextCycleTimestamp)).diff(moment().unix()) * 1000)
      .format("h [hrs], m [min], s [secs]");
    setCycleTimeLeft(nextCycleTimestamp);

    setLoading(false);
  }

  useEffect(() => {
    if (provider && accounts && accounts?.length > 0) {
      setAccount(accounts[0]);
    }
  }, [accounts, provider]);

  useEffect(() => {
    if (account) {
      loadTotalSupply();
    }
  }, [account]);

  const calculateReward = () => {
    if (!treasuryBalance || !aliveUserChickens) return 0;
    let x = Number(aliveUserChickens.length) + 1; // +1 for the caller of startNewCycle
    console.log(
      "Number(aliveUserChickens.length)",
      Number(aliveUserChickens.length)
    );
    console.log("x test", x);
    console.log("Number(treasuryBalance)", Number(treasuryBalance));
    const reward = (Number(treasuryBalance) * 0.8) / x;
    return reward;
  };

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
              <Typography variant="h3" gutterBottom>
                Welcome new farmer!
              </Typography>
              <Typography variant="body1" gutterBottom>
                Please connect your wallet to continue.
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h1">EGGS Treasury! </Typography>

              <Typography gutterBottom mb={2}>
                The EGGS Treasury rewards active players every day.
              </Typography>
              {!loading && (
                <>
                  <Box
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {moment(Number(cycleTimeLeft)).diff(moment().unix()) <=
                    0 ? (
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
                        <Typography variant="body1" gutterBottom>
                          🎉 Start the new cycle and become some shares of the
                          treasury!
                        </Typography>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={startNewCycle}
                        >
                          Start new cycle
                        </Button>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          my: 4,
                        }}
                      >
                        ⏳ Time left for current cycle:{" "}
                        <strong>
                          {moment
                            .duration(
                              moment(Number(cycleTimeLeft)).diff(
                                moment().unix()
                              ) * 1000
                            )
                            .format("h [hrs], m [min], s [secs]")}
                        </strong>
                      </Box>
                    )}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      flexWrap: "wrap",
                      mb: 4,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <KPI
                        label=" 🐔 Current Alive Chicken Supply"
                        value={aliveChickenSupply}
                        symbol="Chickens"
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <KPI
                        label="🏦 Treasury Balance"
                        value={treasuryBalance}
                        symbol="SMR"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      flexWrap: "wrap",
                      mb: 4,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <KPI
                        label=" Claimable rewards"
                        value={rewards}
                        symbol="SMR"
                      />

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "position",
                        }}
                      >
                        {Number(rewards) > 0 && (
                          <Button
                            sx={{
                              width: "50%",
                            }}
                            variant="contained"
                            color="primary"
                            onClick={() => claimRewards()}
                          >
                            Claim Rewards
                          </Button>
                        )}
                      </Box>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <KPI
                        label="Your Next estimated rewards"
                        value={calculateReward().toString()}
                        symbol="SMR"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 4,
                      flexWrap: "wrap",
                      mb: 4,
                    }}
                  >
                    <Typography variant="h5" gutterBottom>
                      💰 How it works
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                      Every time SMR tokens dance into the EGG-osystem, they
                      feed into the grand treasury.
                    </Typography>
                    <Typography variant="body1">
                      A whopping <strong>80%</strong> of this glistening trove
                      is graciously shared amongst the{" "}
                      <strong>active players</strong>, raining down on them
                      daily. But, the benevolence doesn't stop there! Retains a
                      precious <strong>20%</strong>, which is then elegantly
                      divided:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <List>
                        <ListItem sx={{ display: "list-item" }}>
                          🎮 Half is channeled into the game's{" "}
                          <strong>Development Treasury</strong> ensuring the
                          world of EGG-osystem keeps evolving.
                        </ListItem>
                        <ListItem sx={{ display: "list-item" }}>
                          🌍 The other half seeds the{" "}
                          <strong>Community Treasury</strong>, which not only
                          fuels the game but also breathes life into real-world
                          sustainable farm projects. Because here here, fantasy
                          meets reality and we all do a positive impact on the
                          world. Checkout the{" "}
                          <Link href="dao">experimental ChickenDAO</Link>.
                        </ListItem>
                      </List>
                    </Typography>
                  </Box>
                </>
              )}
            </>
          )}
        </Container>
      </Base>
    </>
  );
}
