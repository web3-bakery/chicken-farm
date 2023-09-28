import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { transitions } from "../theme";

interface Props {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
}

const GameCard: React.FC<Props> = (props) => {
  const { name, description, link, image } = props;

  return (
    <Box className="game-card" sx={styles.root}>
      <Box
        className="game-card__image"
        sx={{
          ...styles.image,
          backgroundImage: `url(${image})`,
        }}
      />
      <Box className="game-card__content" sx={styles.content}>
        <Typography variant="h4">{name}</Typography>
        <Typography sx={{ mb: 2 }}>{description}</Typography>
        <Button href={link} variant="contained" size="large">
          Play now
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  root: {
    position: "relative",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: 1,
    height: 220,
    flex: 1,

    "&:hover": {
      "& .game-card__image": {
        transform: "scale(1.1)",
      },

      "& .game-card__content": {
        opacity: 1,
      },
    },
  },

  image: {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: transitions[300],
  },

  content: {
    p: 4,
    position: "relative",
    backgroundColor: "rgba(0,0,0,.66)",
    opacity: 0,
    transition: transitions[300],
    height: "100%",

    ".MuiTypography-root": {
      color: "common.white",
    },
  },
};

export default GameCard;
