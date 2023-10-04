import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ethers } from "ethers";
import utils from "../utils";
import moment from "moment";
import "moment-duration-format";
import EggHatcher from "./EggHatcher";
import EggMinter from "./EggMinter";
import NftContract from "../contracts/ChickenNFT.json";

interface ChickenListItemProps {
  chicken: {
    tokenId: number;
    isAlive: boolean;
    nextEggMintedTime: number;
  };
  onMintEgg: () => void;
  provider: any;
}

const ChickenListItem: React.FC<ChickenListItemProps> = ({ chicken, onMintEgg, provider }) => {
  const actionTime = moment(chicken.nextEggMintedTime).diff(moment().unix());
  const formattedTime = moment
    .duration(actionTime * 1000)
    .format("h [hrs], m [min], s [secs]");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
        p: 1.5,
        width: "200px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        background: "#4a5154"
      }}
    >
      <Link href={`/chickens/${chicken.tokenId}`}>
        <Typography sx={{ fontSize: 40, cursor: "pointer" }}>{"🐔"}</Typography>
      </Link>
      <Typography variant="subtitle2">Chicken #{chicken.tokenId}</Typography>
      <Typography>{chicken.isAlive ? "🐔 Alive" : "💀 Dead"}</Typography>
      <Typography variant="caption">
        {actionTime > 0 ? `Next action in: ${formattedTime}` : "Your chicken is ready for egg-tion!"}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <EggMinter chicken={chicken} onMintEgg={onMintEgg} />
        <EggHatcher chicken={chicken} provider={provider} />
      </Box>
    </Box>
  );
};


export default ChickenListItem;
