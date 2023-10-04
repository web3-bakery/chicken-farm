import React from "react";
import Link from "next/link";

import { useWeb3React } from "@web3-react/core";

import { Box, Button } from "@mui/material";
import ProfileImage from "./ProfileImage";

import { hooks, metaMask } from "../../components/web3/connectors/metaMask";
import ConnectButton from "../web3/components/ConnectButton";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

interface WhitelistItem {
  id: string;
  address: string;
}

export const IdentityMenu: React.FC = () => {
  const [bots, setBots] = React.useState<number[]>([]);

  const accounts = useAccounts();

  console.log("accounts", accounts);

  const account = accounts ? accounts[0] : "";

  const displayAddress = account 
  ? account.slice(0, 5) + "..." + account.slice(account.length - 3) 
  : null;
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      {account ? (
        <Link href="/profile">
          <Box sx={{ cursor: "pointer", color: "white" }}>
            {displayAddress}
          </Box>
        </Link>
      ) : (
        <ConnectButton />
      )}
    </Box>
  );
};

export default IdentityMenu;
