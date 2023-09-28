import React, { useState, useEffect } from "react";
import { Button, Typography, Box, Skeleton } from "@mui/material";

import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import SoonabotRacingABI from "../../../contracts/SoonabotRace.json";
import ERC20ABI from "../../../contracts/Token.json";

import { ADDRESSES } from "../../../contracts/addresses";
import { Countdown } from "../../../components/Countdown";
import useSoonabots from "../../../hooks/contracts/useSoonabots";
import KPI from "../../../components/KPI";
import Rank from "../../../components/Rank";

const eggsTokenAddress = "0xdFCF738225F6508F7A664c3c7D236432501e16d4"; // Test Token

const SoonabotRacing = () => {
  const { account, library } = useWeb3React();

  const { data, isFetched, error, refetch } = useSoonabots(
    account || "",
    ADDRESSES.soonabotsAddr
  );

  // TODO: Update this to the actual event start date and time
  const treasuryEventStartDate = new Date("2023-05-03T15:00:00");
  const [balance, setBalance] = useState(0);
  const [races, setRaces] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const showMessage = (message: string) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    const fetchRaces = async () => {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        ADDRESSES.soonabotRaceAddr,
        SoonabotRacingABI.abi,
        signer
      );
      const races = [];
      let raceId = 0;
      let race;

      do {
        try {
          race = await contract.getRace(raceId);
          races.push(race);
          raceId++;
        } catch (error) {
          console.log("error", error);
          race = null;
        }
      } while (race);

      let _balance = await contract.balanceOf(signer.getAddress());
      setBalance(_balance.toNumber());
      setRaces(races);
    };

    if (account && data && isFetched) {
      fetchRaces();
    }
  }, [account, library, loading, data]);

  const joinOrCreateRace = async (id: number) => {
    console.log("id", id);
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        ADDRESSES.soonabotRaceAddr,
        SoonabotRacingABI.abi,
        signer
      );

      const eggsTokenContract = new ethers.Contract(
        eggsTokenAddress,
        ERC20ABI,
        signer
      );

      const entryFee = ethers.utils.parseUnits("1", 18); // Assuming 18 decimals in EGGS token
      let txApprove = await eggsTokenContract.approve(
        ADDRESSES.soonabotRaceAddr,
        entryFee
      );
      await txApprove.wait();

      const txJoin = await contract.play(id);
      await txJoin.wait();
      showMessage("Successfully joined the race! 🚀🎉");
    } catch (error) {
      console.error("Error:", error);
      showMessage("Error: Unable to join or create a race. 😢");
    }
    setLoading(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Soonabots
          </Typography>
          {/* <Countdown targetDate={treasuryEventStartDate} /> */}
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Do a race with your SOONABOT 🤖
          </Typography>

          <Typography>{message}</Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          {account && <KPI label="Race Wins" value={String(balance)} />}
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Soonabots
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          {data &&
            data.map((bot) => (
              <Box
                key={bot}
                sx={{
                  bgcolor: "background.paper",
                  p: 2,
                  borderRadius: 2,
                  boxShadow: 1,
                  flex: 1,
                  display: "flex",
                  flexDirection: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ flex: 1 }}>🤖 {bot}</Typography>
                <Button
                  disabled={loading}
                  variant="contained"
                  onClick={() => joinOrCreateRace(bot)}
                  sx={{ height: 36, width: 120 }}
                >
                  {loading ? <Skeleton width={50} /> : "Play"}
                </Button>
              </Box>
            ))}
          {data && data.length === 0 && <Box>Nix hasche in de Dasche</Box>}
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          List of Races
        </Typography>
        <Typography color="text.secondary">
          To participate, you need to pay an entry fee of 1 EGGS token and have
          a Soonabot NFT. Enter your Soonabot ID and click the button to join or
          create a race. Each race can have up to 3 bots.
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          {races.map((race, index) => {
            const bots = race[0].map((bot: any) => ` #${bot}`);
            const winner = race[0].map((bot: any) =>
              race[2].toNumber() === bot.toNumber() ? String(bot) : ""
            );

            return (
              <Rank
                key={index}
                rank={index + 1}
                address={`Soonabots: ${bots}`}
                highlight={{
                  label: "Winner",
                  value: winner,
                }}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SoonabotRacing;
