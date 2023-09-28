import React from "react";
import Link from "next/link";

import { useWeb3React } from "@web3-react/core";

import { Box } from "@mui/material";
import { ConnectButton } from "../../web3/ConnectButton";
import ProfileImage from "./ProfileImage";

interface WhitelistItem {
  id: string;
  address: string;
}

export const IdentityMenu: React.FC = () => {
  const { account, library } = useWeb3React<any>();
  const [bots, setBots] = React.useState<number[]>([]);

  
  React.useEffect(() => {
    if (account) {
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  const displayAddress = account 
  ? account.slice(0, 5) + "..." + account.slice(account.length - 3) 
  : null;
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      {account ? (
        <Link href="/profile">
          <Box sx={{ cursor: "pointer" }}>
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
