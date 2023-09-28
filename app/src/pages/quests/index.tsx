import Head from "next/head";
import React, { useEffect, useState } from "react";
import Base from "../../layouts/Base";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import QuestList from "./components/QuestList";
import Leaderboard from "./components/Leaderboard";
import { Web3Provider } from "@ethersproject/providers";
import QuestsABI from "../../contracts/Quests.json";
import IERC20 from "../../contracts/IERC20.json";
import { ADDRESSES } from "../../contracts/addresses";
import { ethers } from "ethers";

// Replace with your actual Quest and Player types
interface Quest {
  id: number;
  description: string;
  points: number;
  requiredTokenAddress: string;
  requiredTokenAmount: string;
  active: boolean;
  solved: boolean;
  userCanSolve: boolean;
  balance: number;
}

interface Player {
  user: string;
  points: number;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Quests() {
  const { library, account } = useWeb3React<Web3Provider>();
  const [quests, setQuests] = useState<Array<any>>([]);
  const [leaderboard, setLeaderboard] = useState<Array<any>>([]);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [open, setOpen] = React.useState(false);
  console.log("quests", quests);
  useEffect(() => {
    if (!library) return;
    if (!account) return;
    fetchQuests();
    // fetchLeaderboard();
  }, [library, account]);

  const fetchQuests = async () => {
    if (!library) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const questContract = new ethers.Contract(
      ADDRESSES.questsAddr,
      QuestsABI.abi,
      signer
    );
    try {
      const userPoints = await questContract.userPoints(account);
      setPlayerPoints(userPoints.toNumber());
    } catch (error) {
      console.log("error userPoints", error);
    }
    try {
      const questCount = await questContract.nextQuestId();
      const fetchedQuests: Quest[] = [];
      for (let i = 0; i < questCount; i++) {
        const questData = await questContract.quests(i);
        let userCanSolve = false;
        try {
          let data = await questContract.canSolveQuest(i);
          console.log("data", data);
          userCanSolve = data;
        } catch (error) {
          console.log("error canSolveQuest", error);
        }

        let balance = false;
        try {
          const tokenContract = new ethers.Contract(
            questData.requiredTokenAddress,
            IERC20.abi,
            signer
          );
          let data = await tokenContract.balanceOf(account);
          console.log(
            "requiredTokenAmount",
            questData.requiredTokenAmount.toNumber()
          );
          console.log("balance", data);
          console.log("balance toNumber", data?.toNumber());
          balance = data?.toNumber() || -1;
        } catch (error) {
          console.log("error balance", error);
        }

        console.log(
          "questData",
          questData.description,
          ": ",
          userCanSolve,
          ": ",
          balance
        );

        const quest: Quest = {
          id: questData.id,
          description: questData.description,
          points: questData.points,
          requiredTokenAddress: questData.requiredTokenAddress,
          requiredTokenAmount: questData.requiredTokenAmount,
          active: questData.active,
          solved: false,
          userCanSolve: userCanSolve,
          balance: -1,
        };
        console.log("quest", quest);
        fetchedQuests.push(quest);
      }

      setQuests(fetchedQuests);
    } catch (error) {
      console.log("error", error);
    }
  };

  async function fetchLeaderboard() {
    if (!library) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const questContract = new ethers.Contract(
      ADDRESSES.questsAddr,
      QuestsABI.abi,
      signer
    );

    const rawLeaderboard = await questContract.getTop10Players();
    const leaderboard: Player[] = rawLeaderboard.map((playerData: any) => ({
      user: playerData.user,
      points: playerData.points.toNumber(),
    }));

    setLeaderboard(leaderboard);
  }

  const handleSolve = async (questId: number) => {
    if (!library) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const questContract = new ethers.Contract(
      ADDRESSES.questsAddr,
      QuestsABI.abi,
      signer
    );

    try {
      let tx = await questContract.completeQuest(questId, {
        gasLimit: 1000000,
      });

      console.log(`Solve quest ${questId}`);

      let recipe = await tx.wait();

      console.log("recipe", recipe);

      for (let index = 0; index < recipe.events.length; index++) {
        const event = recipe.events[index];
        if (event.event === "QuestCompleted") {
          console.log("QuestCompleted", event);
          setOpen(true);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Quests</title>
        <meta
          name="description"
          content="Join the Treasures of Shimmer. Do quests and climb the leaderboard!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Quests</Typography>
          <Typography variant="h3">Points: {playerPoints}</Typography>
          <Container>
            <Box sx={{ marginTop: 4 }}>
              {quests.length <= 0 ? (
                "Loading quests..."
              ) : (
                <QuestList quests={quests || []} onSolve={handleSolve} />
              )}
            </Box>
            {/* <Box sx={{ marginTop: 4 }}>
              {quests.length <= 0 ? (
                "Loading leaderboard..."
              ) : (
                <Leaderboard leaderboard={leaderboard} />
              )}
            </Box> */}
          </Container>
        </Container>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h2 id="parent-modal-title">Quest Solved!</h2>
            <p id="parent-modal-description">
              Awesome, you just solved a quest!
            </p>
            <Button onClick={handleClose}>Okay!</Button>
          </Box>
        </Modal>
      </Base>
    </>
  );
}
