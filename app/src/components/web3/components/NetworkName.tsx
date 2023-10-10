import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { hooks, metaMask } from "../connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export const NetworkName = (provider: any) => {
  const chainId = useChainId();

  return <Typography>ShimmerEVM Testnet (ChainID: {chainId})</Typography>;
};
