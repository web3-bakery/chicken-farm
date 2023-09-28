import React from "react";
import { Typography } from "@mui/material";
import useBlockNumber from "../../hooks/useBlockNumber";

export const BlockNumber = () => {
  const { data } = useBlockNumber();
  return <Typography color="text.secondary">Block #{data}</Typography>;
};
