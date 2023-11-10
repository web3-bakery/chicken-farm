import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@mui/material";

import { THEME } from "../theme";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderExample from "../components/web3/components/ProviderExample";
import { NotificationProvider } from "../context/NotificationContext";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <NotificationProvider>
          <Component {...pageProps} />
        </NotificationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
