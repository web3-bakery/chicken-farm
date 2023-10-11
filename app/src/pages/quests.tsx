import Head from "next/head";
import React, { useEffect, useState } from "react";
import Base from "../layouts/Base";
import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import QuestList from "../components/Quests/QuestList";
import { Web3Provider } from "@ethersproject/providers";
import QuestsContract from "../contracts/Quests.json";
import EGGS from "../contracts/EGGS.json";
import ChickenNFT from "../contracts/ChickenNFT.json";
import { ethers } from "ethers";

import { hooks, metaMask } from "../components/web3/connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

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
  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const provider = useProvider();

  const isActive = useIsActive();

  const [quests, setQuests] = useState<Array<any>>([]);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  useEffect(() => {
    if (isActive && account) {
      fetchQuests();
    }
  }, [account]);

  const fetchQuests = async () => {
    console.log("provider", provider);
    if (!provider) return;
    const questContract = new ethers.Contract(
      QuestsContract.address,
      QuestsContract.abi,
      provider.getSigner()
    );
    try {
      const userPoints = await questContract.userPoints(account);
      console.log("userPoints", userPoints);
      setPlayerPoints(userPoints.toNumber());
    } catch (error) {
      console.log("error userPoints", error);
    }
    try {
      const questCount = await questContract.nextQuestId();
      const fetchedQuests: Quest[] = [];
      for (let i = 0; i < questCount; i++) {
        const questData = await questContract.quests(i);
        console.log("questData", questData);
        let userCanSolve = false;
        let solved = false;
        let requiredTokenAmount = questData.requiredTokenAmount;
        try {
          let data = await questContract.canSolveQuest(i);
          console.log("data", data);
          userCanSolve = data;
        } catch (error: any) {
          console.log("error canSolveQuest", error);
          console.log("error reason", error.reason);

          if (error.reason === "Quest already completed") {
            console.log("Quest already solved");
            solved = true;
          }
        }

        let balance = 0;
        try {
          const tokenContract: any = new ethers.Contract(
            questData.requiredTokenAddress,
            EGGS.abi,
            provider
          );
          let data = await tokenContract.balanceOf(account);
          //   console.log(
          //     "requiredTokenAmount",
          //     questData.requiredTokenAmount.toNumber()
          //   );

          console.log("balance", data);
          if (questData.requiredTokenAddress == ChickenNFT.address) {
            balance = data.toNumber();
            requiredTokenAmount = requiredTokenAmount.toNumber();
          } else {
            balance = Number(ethers.utils.formatEther(data));
            requiredTokenAmount = Number(
              ethers.utils.formatEther(requiredTokenAmount)
            );
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
            requiredTokenAmount: requiredTokenAmount,
            active: questData.active,
            solved: solved,
            userCanSolve: userCanSolve,
            balance: balance,
          };
          fetchedQuests.push(quest);
          console.log("quest", quest);
        } catch (error) {
          console.log("error balance", error);
        }
      }
      setQuests(fetchedQuests);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSolve = async (questId: number) => {
    if (!provider) return;
    const questContract = new ethers.Contract(
      QuestsContract.address,
      QuestsContract.abi,
      provider.getSigner()
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
          fetchQuests();
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
