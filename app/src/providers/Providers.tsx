"use client";

import React, { PropsWithChildren } from "react";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@mui/material";

import { THEME } from "../theme";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NotificationProvider } from "../context/NotificationContext";

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <NotificationProvider>{children}</NotificationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
