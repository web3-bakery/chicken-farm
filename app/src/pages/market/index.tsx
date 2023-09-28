import React, { useEffect, useState } from "react";

import { ethers } from "ethers";

import SellProduct from "./components/SellProduct";
import MarketItems from "./components/MarketItems";

import IERC721Enumerable from "../../contracts/IERC721Enumerable.json";
import NFTMarketABI from "../../contracts/NFTMarket.json";

import { ADDRESSES } from "../../contracts/addresses";

import useSoonabots from "../../hooks/contracts/useSoonabots";
import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Hero from "../../components/Hero";
import Base from "../../layouts/Base";
import { GAMES } from "../../mocks/games";

declare var window: any;
declare var ethereum: any;
const Market = () => {
  const { account, library } = useWeb3React();

  const [nfts, setNfts] = useState([]);
  const { data, isFetched, error, refetch } = useSoonabots(
    account || "",
    ADDRESSES.soonabotsAddr
  );
  useEffect(() => {}, []);

  useEffect(() => {
    if (library && account) {
    }
  }, [library, account]);

  const createMarketItem = async (
    nftContractAddress: string,
    tokenId: number,
    price: any
  ) => {
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();

    const nftMarketContract = new ethers.Contract(
      ADDRESSES.nftMarketAddr,
      NFTMarketABI.abi,
      signer
    );

    const productContract = new ethers.Contract(
      nftContractAddress,
      IERC721Enumerable.abi,
      signer
    );

    const listingPrice = await nftMarketContract.getListingPrice();
    const priceInWei = ethers.utils.parseUnits(price, "ether");
    try {
      const tx0 = await productContract.approve(
        ADDRESSES.nftMarketAddr,
        tokenId,
        { gasLimit: 500000 }
      );
      await tx0.wait();
      console.log("approve product:", tx0);
    } catch (error) {
      console.error("Error approve product:", error);
      console.error("Failed to approve product.");
    }

    try {
      const tx = await nftMarketContract.createMarketItem(
        nftContractAddress,
        tokenId,
        priceInWei,
        { value: listingPrice }
      );
      await tx.wait();
      console.log("Market item created successfully");
    } catch (error) {
      console.error("Error creating market item:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Bot Market</title>
        <meta name="description" content="Trade NFTs for free." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base hero={<Hero image={GAMES[0].image} />}>
        
        {library && account && <SellProduct nfts={data} createMarketItem={createMarketItem} />}
        {library && account && <MarketItems />}
      </Base>
    </>
  );
};

export default Market;
