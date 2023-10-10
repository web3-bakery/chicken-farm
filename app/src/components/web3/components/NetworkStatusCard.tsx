import React from "react";
import { Box } from "@mui/material";

import { NetworkName } from "./NetworkName";
import Link from "next/link";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { IconButtonFancy } from "../../IconButtonFancy";

import { hooks } from "../connectors/metaMask";

const { useIsActive, useProvider } = hooks;

export const NetworkStatusCard = () => {
  const isActive = useIsActive();
  const provider = useProvider();

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "fixed",
        bottom: 20,
        right: 20,
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box mr={4}>{isActive && <NetworkName provider={provider} />}</Box>
      <Link
        target="_blank"
        href="https://explorer.evm.testnet.shimmer.network/"
      >
        <IconButtonFancy>
          <OpenInNewRoundedIcon />
        </IconButtonFancy>
      </Link>
    </Box>
  );
};
