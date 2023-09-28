import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

export const NetworkName = () => {
  const { library } = useWeb3React<Web3Provider>();
  const [chainId, setChainId] = useState(-1);

  useEffect(() => {
    let init = async () => {
      let res = await library?.getNetwork();
      console.log("res", res);
      if (res?.chainId) {
        setChainId(res.chainId);
      }
    };
    if (library) {
      init();
    }
  }, [library]);

  return <Typography>ShimmerEVM Testnet ({chainId})</Typography>;
};
