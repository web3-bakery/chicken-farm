import React from "react";
import { Inter } from "next/font/google";

import { Box, CssBaseline } from "@mui/material";

import { Header } from "../components/Header";
import { useRouter } from "next/router";

interface Props {
  hero?: React.ReactNode;
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const Base: React.FC<Props> = ({ children, hero }) => {
  const router = useRouter();

  return (
    <main className={inter.className}>
      <Box sx={styles} className={hero ? "hero" : ""}>
        <CssBaseline />
        <Header />
        {hero}
        {children}
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
