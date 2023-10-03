import React, { useCallback, useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import type { MetaMask } from "@web3-react/metamask";
import type { Network } from "@web3-react/network";

import { hooks as metaMaskHooks, metaMask } from "../connectors/metaMask";
import { hooks as networkHooks, network } from "../connectors/network";
const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = metaMaskHooks;

const Button: React.FC = () => {
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const [error, setError] = useState(undefined);

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  const switchChain = useCallback(
    async (desiredChainId: number) => {
      try {

        await metaMask.activate();

        setError(undefined);
      } catch (error: any) {
        setError(error);
      }
    },
    [metaMask, setError]
  );

  return (
    <button onClick={() => switchChain(0)} disabled={isActivating}>
      {error ? "Try again?" : "Connect"}
    </button>
  );
};

export default Button;
