import React from "react";

import { Box } from "@mui/material";
import useTokenBalance from "../hooks/useTokenBalance";
import { ADDRESSES } from "../contracts/addresses";
import KPI from "./KPI";

interface Props {
  totalSupply: string | null;
  playerBalance: string | null;
  account: string;
}

const Balance: React.FC<Props> = (props) => {
  const { totalSupply, playerBalance, account } = props;

  const { data, isError, isLoading, refetch } = useTokenBalance(
    account,
    ADDRESSES.eggsAddr
  );

  const infos = [
    { label: "Current Supply", value: totalSupply },
    { label: "Player Balance", value: String(data) },
  ];

  return (
    <Box sx={styles.container}>
      {infos.map((info) => (
        <KPI key={info.label} {...info} />
      ))}
    </Box>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    marginBottom: "30px",
    gap: 2,
  },
};

export default Balance;
