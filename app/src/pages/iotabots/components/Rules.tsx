import React from "react";
import { Box, Typography } from "@mui/material";

const RULES = [
  {
    id: 1,
    content: `Each player must connect their wallet to the IOTABOTVERSE platform
  and hold an IOTABOT (ERC721 Token) to participate in the game.`,
  },
  {
    id: 2,
    content: `Players can only play against their own IOTABOT.`,
  },
  {
    id: 3,
    content: `Each game round consists of one move: Rock, Paper, or Scissors.`,
  },
  {
    id: 4,
    content: `To initiate a game, the player must submit a move by signing a
    transaction on the ShimmerEVM network.`,
  },
  {
    id: 5,
    content: `Once both moves have been submitted, the smart contract will
    determine the winner using the standard Rock Paper Scissors rules: 
    Rock beats Scissors, Scissors beats Paper, Paper beats Rock.`,
  },
  {
    id: 6,
    content: `If the player wins, they are awarded 10 EGGS tokens.`,
  },
  {
    id: 7,
    content: `In case of a tie or a loss, the game is declared a draw or a loss
    respectively, and no rewards will be distributed.`,
  },
];

const Rules = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 3,
      }}
    >
      <Typography gutterBottom variant="h5">
        Rules
      </Typography>
      <Box>
        <ol
          style={{
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            paddingLeft: 24,
          }}
        >
          {RULES.map((rule) => (
            <li style={{ marginBottom: 8 }} key={rule.id}>
              <Typography color="text.secondary">{rule.content}</Typography>
            </li>
          ))}
        </ol>
      </Box>
    </Box>
  );
};

export default Rules;
