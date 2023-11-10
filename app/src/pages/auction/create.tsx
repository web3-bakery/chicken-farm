import { useNotification } from "../../context/NotificationContext";

import { ethers } from "ethers";
import { useEffect, useState } from "react";

import auctionContract from "../../contracts/SimpleAuction.json";
import chickenContract from "../../contracts/ChickenNFT.json";
import { hooks, metaMask } from "../../components/web3/connectors/metaMask";
import Base from "../../layouts/Base";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import Head from "next/head";
import { Router } from "next/router";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function Home() {
  const provider = useProvider();
  const router = useRouter();
  const { showNotification } = useNotification();

  // Create state for each form field
  const [nftAddress, setNftAddress] = useState(chickenContract.address);
  const [tokenId, setTokenId] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [totalTime, setTotalTime] = useState("");

  // Handle form submission
  const handleSubmit = (event: any) => {
    event.preventDefault();
    initializeAuction({
      nftAddress,
      tokenId,
      startingPrice,
      totalTime,
    });
  };
  async function initializeAuction(data: any) {
    if (!provider) return;
    console.log("Initializing Auction...");
    const price = ethers.utils.parseUnits(startingPrice, "ether").toString();
    console.log("nftAddress", nftAddress);
    console.log("tokenId", tokenId);
    console.log("price", price);

    // Run contract function

    // await runContractFunction({
    //   params: initializeAuctionOptions,
    //   onSuccess: handleInitializeSuccess,
    //   onError: (error: any) => console.log(error),
    // });

    console.log("provider2", provider);
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider.getSigner()
    );

    const nftContract = new ethers.Contract(
      chickenContract.address,
      chickenContract.abi,
      provider.getSigner()
    );

    try {
      const approve = await nftContract.approve(
        auctionContract.address,
        tokenId
      );

      await approve.wait();

      const auction = await _auctionContract.InitializeAuction(
        nftAddress,
        tokenId,
        price,
        totalTime,
        {
          gasLimit: 300000,
        }
      );
      console.log("auction", auction);
      let x = auction.wait();
      // success
      console.log("x", x);
      handleInitializeSuccess(x);
    } catch (error: any) {
      console.log("error", error.message);
    }
  }

  async function handleInitializeSuccess(tx: any) {
    console.log(
      "Auction Initialized. Please wait for about 30 seconds to see your auction in Home Page of dapp"
    );
    showNotification("NFT Auction Listed", "success");

    setTimeout(() => {
      router.push("/auction");
    }, 3000);
  }
  return (
    <>
      <Head>
        <title>Chicken Detail</title>
      </Head>

      <Base>
        <Container maxWidth="md">
          {provider && (
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
              sx={{ "& .MuiTextField-root": { m: 1 } }}
            >
              <Typography variant="h6" gutterBottom>
                Put your NFT on Auction!
              </Typography>
              <TextField
                label="NFT Address"
                value={nftAddress}
                onChange={(e) => setNftAddress(e.target.value)}
                fullWidth
              />
              <TextField
                label="Token ID"
                type="number"
                value={tokenId}
                onChange={(e) => setTokenId(e.target.value)}
                fullWidth
              />
              <TextField
                label="Starting Price (in ETH)"
                type="number"
                value={startingPrice}
                onChange={(e) => setStartingPrice(e.target.value)}
                fullWidth
              />
              <TextField
                label="Total Time (in seconds)"
                type="number"
                value={totalTime}
                onChange={(e) => setTotalTime(e.target.value)}
                fullWidth
              />
              <Button type="submit" variant="contained" color="primary">
                Initialize Auction
              </Button>
            </Box>
          )}
        </Container>
      </Base>
    </>
  );
}
