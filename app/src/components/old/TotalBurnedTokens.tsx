import React, { useEffect, useState } from "react";

import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import TOKEN from "../../contracts/Token.json";
import KPI from "./KPI";
import { ADDRESSES } from "../../contracts/addresses";

const TotalBurnedTokens = ({ provider }: any) => {
  const [totalBurnedTokens, setTotalBurnedTokens] = useState("");
  const deadAddress = "0x000000000000000000000000000000000000dEaD";

  const tokenAddress = ADDRESSES.eggsAddr;
  useEffect(() => {
    const fetchTotalBurnedTokens = async () => {
      if (!provider || !ethers.utils.isAddress(tokenAddress)) return;

      const tokenContract = new ethers.Contract(tokenAddress, TOKEN, provider);
      try {
        const burnedTokens = await tokenContract.balanceOf(deadAddress);
        setTotalBurnedTokens(ethers.utils.formatUnits(burnedTokens, 18));
      } catch (error: any) {
        console.error(`Error fetching total burned tokens: ${error.message}`);
      }
    };
    if (provider) {
      fetchTotalBurnedTokens();
    }
  }, [provider, tokenAddress]);

  return (
    <KPI label="Total Burned Tokens" value={totalBurnedTokens} symbol="EGGS" />
  );
};

export default TotalBurnedTokens;
