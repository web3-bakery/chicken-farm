import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Modal,
  Box,
} from "@mui/material";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import { ADDRESSES } from "../../../contracts/addresses";
import GAME from "../../../contracts/Game.json";

interface Props {
  id: string;
  image: string;
  name: string;
  refetchGame: () => void;
}

const buttons = [
  { id: 1, label: "✊" },
  { id: 2, label: "✋" },
  { id: 3, label: "✌️" },
];

const Bot: React.FC<Props> = (props) => {
  const { id, image, name, refetchGame } = props;

  const { account, library } = useWeb3React();

  const [winner, setWinner] = useState({ message: "" });
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function startGame(bet: any) {
    try {
      setWinner({ message: "" });
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      let contract = new ethers.Contract(
        ADDRESSES.iotabotsGameAddr,
        GAME.abi,
        signer
      );

      let tx = await contract.createSingleGame(id, bet, {
        value: ethers.utils.parseEther("1"),
      });

      let recipe = await tx.wait();

      console.log("recipe", recipe);

      for (let index = 0; index < recipe.events.length; index++) {
        const event = recipe.events[index];
        if (event.event === "gamePlayed") {
          console.log("event found:", event);

          const { winner, _bot_bet, _player_bet } = event.args;
          console.log("winner: ", winner);
          console.log("_bot_bet: ", _bot_bet);
          console.log("_player_bet: ", _player_bet);

          if (winner && winner.length > 0) {
            if (winner === account) {
              setWinner({
                message: `😀 You won 10 EGGS! 🎉`,
              });
            } else if (winner === ADDRESSES.iotabotsGameAddr) {
              setWinner({
                message: `Sorry - your 🤖 won!`,
              });
            } else {
              setWinner({
                message: `Draw! There is no winner!`,
              });
            }
          }
        }
      }

      setLoading(false);
      handleOpen();
      refetchGame();
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card sx={styles.card}>
        <CardMedia height={240} component="img" image={image} alt="IOTABOT" />
        <CardContent sx={styles.card}>
          <Typography gutterBottom variant="h6">
            {`IOTABOT ${name}`}
          </Typography>
          <Typography sx={{ mb: 2 }}>Play against your IOTABOT!</Typography>
          <Box sx={styles.buttons}>
            {buttons.map((button) => (
              <Button
                key={button.id}
                disabled={loading}
                className="playBtn"
                variant="outlined"
                onClick={() => startGame(button.id - 1)}
              >
                {button.label}
              </Button>
            ))}
          </Box>

          {loading ? (
            <CircularProgress />
          ) : (
            <p className="result_field">Choose and play!</p>
          )}
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            IOTABOTS Game
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {winner ? winner.message : ""}
          </Typography>
          <Button onClick={handleClose}>Okay!</Button>
        </Box>
      </Modal>
    </Grid>
  );
};

const styles = {
  card: {
    bgcolor: "background.paper",
    borderRadius: 2,
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 2,
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "background.paper",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 4,
  },
};

export default Bot;
