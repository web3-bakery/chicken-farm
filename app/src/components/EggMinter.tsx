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
      {moment(chicken.nextEggMintedTime).diff(moment().unix()) > 0 ? (
          <Typography>
          Your chicken is not reeady to lay an egg!
          </Typography>
      ) : (
        <Typography>
          {chicken.isAlive ? "You can mint an egg now!" : ""}
        </Typography>
      )}
      <Button
        variant="contained"
        startIcon={
          isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <Typography>🥚</Typography>
          )
        }
        onClick={onMintEgg}
        disabled={
          !chicken.isAlive ||
          isLoading ||
          moment(chicken.nextEggMintedTime).diff(moment().unix()) > 0
        }
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
