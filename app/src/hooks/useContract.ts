import { Contract } from "@ethersproject/contracts";
import { useMemo, useState } from "react";
import { hooks, metaMask } from "../components/web3/connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function useContract<T extends Contract = Contract>(
  address: string,
  ABI: any
): T | null {
  const provider = useProvider();

  if (!address || !ABI || !provider) {
    return null;
  }

  try {
    return new Contract(address, ABI, provider.getSigner()) as T;
  } catch (error) {
    console.error("Failed To Get Contract", error);

    return null;
  }
}
