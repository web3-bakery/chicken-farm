import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Box, Container, Typography, Tooltip, Button } from "@mui/material";
import Base from "../layouts/Base";
import MintChicken from "../components/MintChicken";
import ChickenList from "../components/ChickenList";
import BurnEggs from "../components/BurnEggs";

import EGGS_CONTRACT from "../contracts/EGGS.json";
import CHICKEN_NFT_CONTRACT from "../contracts/ChickenNFT.json";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Link from "next/link";
import moment from "moment";
import "moment-duration-format";
import { start } from "repl";
import AliveChickensCount from "../components/AliveChickensCount";
import { hooks, metaMask } from "../components/web3/connectors/metaMask";

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

  const [account, setAccount] = useState("");
  const [tokenSupply, setTokenSupply] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [treasuryBalance, setTreasuryBalance] = useState<string | null>(null);
  const [burners, setBurners] = useState<any[]>([]);
  const [cycleTimeLeft, setCycleTimeLeft] = useState<string>("");
  const [burnersList, setBurnersList] = useState<
    Array<{ address: string; burnedEggs: number }>
  >([]);

  async function startNewCycle() {
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
    }
  }
  async function loadTotalSupply() {
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

    let totalSupply = await token.totalSupply();
    totalSupply = ethers.utils.formatEther(totalSupply);
    console.log("totalSupply test", totalSupply);
    setTokenSupply(totalSupply);

    let _balance = await token.balanceOf(account);
    _balance = ethers.utils.formatEther(_balance);
    setBalance(_balance);

    // Treasury Balance
    let _treasuryBalance = await provider!.getBalance(
      CHICKEN_NFT_CONTRACT.address
    );
    setTreasuryBalance(ethers.utils.formatEther(_treasuryBalance));

    // Burners Information
    console.log("burnerAddresses test");
    let burnerAddresses: any = [];
    let index = 0;
    while (true) {
      try {
        let burnerAddress = await chickenNFT.burners(index);
        burnerAddresses.push(burnerAddress);
        index++;
      } catch (error) {
        break;
      }
    }

    const burnersWithData = [];
    for (const burner of burnerAddresses) {
      const burnedEggs = await chickenNFT.burnedEggsByUser(burner);
      burnersWithData.push({
        address: String(burner),
        burnedEggs: Number(ethers.utils.formatEther(burnedEggs)),
      });
    }
    setBurnersList(burnersWithData);

    // Cycle Time Left
    let nextCycleTimestamp = await chickenNFT.nextCycleTimestamp();

    let x = moment
      .duration(moment(Number(nextCycleTimestamp)).diff(moment().unix()) * 1000)
      .format("h [hrs], m [min], s [secs]");
    setCycleTimeLeft(x);
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
              <Typography variant="h5" gutterBottom>
                The EGGS Treasury is where all the commmuntiy funds are stored.
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
              <Tooltip title="This is your amount of eggs!">
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
                  🥚 Your Eggs: <strong>{balance}</strong>
                </Box>
              </Tooltip>
              <AliveChickensCount provider={provider} />;
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
                🏦 Treasury Balance: <strong>{treasuryBalance} SMR</strong>
              </Box>
              <BurnEggs provider={provider} account={account} />
              <Typography variant="h6" gutterBottom>
                Burner Addresses and EGGS:
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
                {burnersList.map((burner, index) => (
                  <Typography key={index}>
                    Adresse: {burner.address} - burned EGGS: {burner.burnedEggs}
                  </Typography>
                ))}
              </Box>
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
                ⏳ Time left for current cycle: <strong>{cycleTimeLeft}</strong>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={startNewCycle}
              >
                Start new cycle
              </Button>
            </>
          )}
        </Container>
      </Base>
    </>
  );
}
