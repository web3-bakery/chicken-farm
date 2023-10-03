import type { AppProps } from "next/app";

import { Web3Provider } from "@ethersproject/providers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Web3ReactProvider } from "@web3-react/core";

import { ThemeProvider } from "@mui/material";

import { THEME } from "../theme";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderExample from "../components/web3/components/ProviderExample";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 1000;
    return library;
  };

  return (
    <ThemeProvider theme={THEME}>
      <ProviderExample />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
