import React from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import Link from "next/link";
import moment from "moment";
import "moment-duration-format";
import ChickenCoop_CONTRACT from "../../contracts/ChickenCoop.json";
import useContract from "../../hooks/useContract";

interface ChickenCardProps {
  coopId: number;
  tokenId: number;
}

const ChickenCard: React.FC<ChickenCardProps> = ({ tokenId, coopId }) => {
  const contractChickenCoop = useContract(
    ChickenCoop_CONTRACT.address,
    ChickenCoop_CONTRACT.abi
  );
  const removeFromCoop = async () => {
    if (!contractChickenCoop) return;
    let x = await contractChickenCoop.removeChickenFromCoop(coopId, tokenId);
    await x.wait();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1.5,
        width: "200px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        bgcolor: "#2E2E2E",
      }}
    >
      <Link href={`/chickens/${tokenId}`}>
        <Typography sx={{ fontSize: 40, cursor: "pointer" }}>{"🐔"}</Typography>
      </Link>
      <Typography fontWeight="bold" variant="subtitle1">
        Chicken #{tokenId}
      </Typography>
      <Button onClick={removeFromCoop}>Remove from Coop</Button>
    </Box>
  );
};

export default ChickenCard;
