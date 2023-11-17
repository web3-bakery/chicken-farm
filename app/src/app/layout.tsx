"use client";
import React, { PropsWithChildren } from "react";
import Providers from "../providers/Providers";
import { Inter } from "next/font/google";
import { Box, CssBaseline } from "@mui/material";

import { NetworkStatusCard } from "../components/web3/components/NetworkStatusCard";
import { Header } from "../components/Header";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box sx={styles}>
            <CssBaseline />
            <Header />
            {children}
            <NetworkStatusCard />
          </Box>
        </Providers>
      </body>
    </html>
  );
};

const styles = {
  pb: "120px",
  pt: "140px",
};

export default Layout;
