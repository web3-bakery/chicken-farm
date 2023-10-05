import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import NftContract from "../contracts/ChickenNFT.json";
import EGGSContract from "../contracts/EGGS.json";
import moment from "moment";

const EggMinter = ({ chicken, onMintEgg, isLoading }: any) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: 3,
        justifyContent: "center",
      }}
    >
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        startIcon={
          isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <Typography>🥚</Typography>
          )
        }
        onClick={onMintEgg}
      >
        {chicken.isAlive
          ? isLoading
            ? "Minting..."
            : "Mint Egg"
          : "Chicken is Dead"}
      </Button>
    </Box>
  );
};

export default EggMinter;
