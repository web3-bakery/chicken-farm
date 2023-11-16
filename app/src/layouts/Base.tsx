import React from "react";
import { Inter } from "next/font/google";

import { Box, CssBaseline } from "@mui/material";

import { Header } from "../components/Header";
import ProviderExample from "../components/web3/components/ProviderExample";

import { NetworkStatusCard } from "../components/web3/components/NetworkStatusCard";

interface Props {
  hero?: React.ReactNode;
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const Base: React.FC<Props> = ({ children, hero }) => {
  return (
    <main className={inter.className}>
      <ProviderExample />
      <Box sx={styles} className={hero ? "hero" : ""}>
        <CssBaseline />
        <Header />
        {hero}
        {children}
        <NetworkStatusCard />
      </Box>
    </main>
  );
};

const styles = {
  pb: "120px",
  pt: "140px",

  "&.hero": {
    pt: 0,
  },
};

export default Base;
