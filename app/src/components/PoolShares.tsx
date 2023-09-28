import React from "react";
import { Typography, Box } from "@mui/material";
import useTokenBalance from "../hooks/useTokenBalance";
import { useWeb3React } from "@web3-react/core";
import { PoolShare } from "./PoolShare";

export const PoolShares = () => {
  const { library, account } = useWeb3React();

  const SHIMMERSEA_EGGS_LP = {
    address: "0x49042C23f4399D3b085039F3E262a7A3Ad7344C4",
    link: "https://shimmersea.finance/add/0x1074010000000000000000000000000000000000/0xdFCF738225F6508F7A664c3c7D236432501e16d4",
  };

  const IOTABEE_EGGS_LP = {
    address: "0x4E01ee025E944161Da3Ed9a6557BDfbAeA2E5D6D",
    link: "",
  };

  return (
    <>
      {account && (
        <>
          <Typography variant="h3" gutterBottom>
            Pool Shares
          </Typography>
          <Box sx={styles.root}>
            <Box sx={styles.card}>
              <Typography variant="h5" gutterBottom>
                ShimmerSea EGGS Pool
              </Typography>
              <PoolShare pool={SHIMMERSEA_EGGS_LP} />
            </Box>
            <Box sx={styles.card}>
              <Typography variant="h5" gutterBottom>
                IotaBee EGGS Pool
              </Typography>
              <PoolShare pool={IOTABEE_EGGS_LP} />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    gap: 4,
  },
  card: {
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 1,
    p: 4,
    maxWidth: "100%",
  },
};
