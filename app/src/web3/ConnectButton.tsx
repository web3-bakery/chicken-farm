import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import { Button, ButtonProps } from "@mui/material";

import { useEagerConnect, useInactiveListener } from "./hooks/hooks";
import { injected } from "./hooks/connectors";

enum ConnectorNames {
  Injected = "Connect",
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};

export const ConnectButton = (props: ButtonProps) => {
  const context = useWeb3React<Web3Provider>();
  const { connector, activate, error } = context;

  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  /* handle logic to eagerly connect to the injected ethereum provider, 
    if it exists and has granted access already */
  const triedEager = useEagerConnect();

  /* handle logic to connect in reaction to certain events on the injected
    ethereum provider, if it exists */
  useInactiveListener({ suppress: !triedEager || !!activatingConnector });

  const currentConnector = connectorsByName.Connect;
  const activating = currentConnector === activatingConnector;
  const connected = currentConnector === connector;
  const disabled = !triedEager || !!activatingConnector || connected || !!error;

  return (
    <Button
      {...props}
      size="large"
      color={props.color || "primary"}
      variant="contained"
      disabled={disabled}
      onClick={(): void => {
        console.log("hello world!");
        setActivatingConnector(currentConnector);
        activate(connectorsByName.Connect);
      }}
      startIcon={<AccountBalanceWalletRoundedIcon />}
    >
      {activating ? "..." : "Connect"}
    </Button>
  );
};
