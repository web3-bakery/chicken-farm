import React from "react";
import { Box, Typography } from "@mui/material";

import BurnTokens from "../../../components/BurnTokens";
import TotalBurnedTokens from "../../../components/TotalBurnedTokens";

const Burn = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4">Burn EGG Tokens</Typography>
          <Typography>
            You can either burn or sell your tokens. By burning them you
            participate in the Leaderboard below.
          </Typography>
        </Box>
        <Box>
          <TotalBurnedTokens />
        </Box>
      </Box>
      <BurnTokens />
    </Box>
  );
};

const styles = {
  root: {
    bgcolor: "primary.main",
    borderRadius: 2,
    boxShadow: 1,
    overflow: "hidden",
  },
  wrapper: {
    display: "flex",
    gap: 4,
    p: 4,
  },
};

export default Burn;
