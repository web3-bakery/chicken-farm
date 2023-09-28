import React from "react";
import { Box } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BlockNumber } from "./BlockNumber";
import { NetworkName } from "./NetworkName";
import Link from "next/link";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { IconButtonFancy } from "../IconButtonFancy";

export const Network = () => {
  const { library } = useWeb3React<Web3Provider>();

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
      <Box mr={4}>
        {library && <NetworkName />}
        {library && <BlockNumber />}
      </Box>
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
