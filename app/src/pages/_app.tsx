import type { AppProps } from "next/app";

import { Web3Provider } from "@ethersproject/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Web3ReactProvider } from "@web3-react/core";

import { ThemeProvider } from "@mui/material";

import { THEME } from "../theme";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 1000;
    return library;
  };

  return (
    <ThemeProvider theme={THEME}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Web3ReactProvider>
    </ThemeProvider>
  );
}
