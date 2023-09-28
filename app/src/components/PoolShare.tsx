import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Typography, Box, Button } from "@mui/material";
import useTokenBalance from "../hooks/useTokenBalance";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { ADDRESSES } from "../contracts/addresses";
import TokenABI from "../contracts/Token.json";
import Link from "next/link";

export const PoolShare = ({ pool }: any) => {
  const { push } = useRouter();
  const { library, account } = useWeb3React();
  const [balance, setBalance] = useState("0");
  const [totalSupply, setTotalSupply] = useState("0");
  const [shares, setShares] = useState("0");

  useEffect(() => {
    if (account) {
      fetchBalance();
    }
    console.log("PoolShare", pool);
  }, [pool]);

  const fetchBalance = async () => {
    if (!pool) return;
    const provider = new ethers.providers.Web3Provider(library.provider);
    const contract = new ethers.Contract(pool.address, TokenABI, provider);
    let _balance = await contract.balanceOf(account);
    console.log("balance", _balance);
    setBalance(ethers.utils.formatEther(_balance));
    let _totalSupply = await contract.totalSupply();
    setTotalSupply(ethers.utils.formatEther(_totalSupply));
    const c = Number(_balance.mul(100).div(_totalSupply)) / 100;

    setShares(c.toString());
  };

  return balance ? (
    <Box sx={styles.root}>
      <Typography color="text.secondary">
        <strong>Balance:</strong> {balance}
      </Typography>
      <Typography color="text.secondary">
        <strong>Total Supply:</strong> {totalSupply}
      </Typography>
      <Typography color="text.secondary">
        <strong>Shares:</strong> {shares}%
      </Typography>
      <Typography color="text.secondary">
        <strong>LP Address:</strong> {pool?.address}
      </Typography>
      {pool.link && (
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          size="large"
          onClick={() => window.open(pool.link, "_blank")}
        >
          Jump to Pool
        </Button>
      )}
    </Box>
  ) : (
    <></>
  );
};

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 1,
  },
};
