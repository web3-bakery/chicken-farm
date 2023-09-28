// MarketItems.js
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import NFTMarketABI from "../../../contracts/NFTMarket.json";

import {ADDRESSES} from "../../../contracts/addresses";
import { useWeb3React } from "@web3-react/core";

function MarketItems() {
  const [marketItems, setMarketItems] = useState([]);
  const { account, library } = useWeb3React();

  useEffect(() => {
    if (library) {
      fetchMarketItems().then(setMarketItems);
    }
  }, [library]);
  
  const fetchMarketItems = async () => {
    console.log("fetchMarketItems");
    const provider = new ethers.providers.Web3Provider(library.provider);
    const signer = provider.getSigner();
    const nftMarketContract = new ethers.Contract(
      ADDRESSES.nftMarketAddr,
      NFTMarketABI.abi,
      provider
    );
    const items = await nftMarketContract.fetchMarketItems();
    return items.map((item: any) => ({
      ...item,
      itemId: item.itemId.toString(),
      tokenId: item.tokenId.toString(),
      price: ethers.utils.formatEther(item.price),
    }));
  };

  const buyItem = async (nftContract: any, itemId: any, price: any) => {
    const provider = new ethers.providers.Web3Provider(library.provider);
    const nftMarketContract = new ethers.Contract(
      ADDRESSES.nftMarketAddr,
      NFTMarketABI.abi,
      provider.getSigner()
    );

    try {
      const tx = await nftMarketContract.createMarketSale(nftContract, itemId, {
        value: ethers.utils.parseEther(price),
      });
      await tx.wait();
      console.log("Market item purchased successfully");
    } catch (error) {
      console.error("Error purchasing market item:", error);
    }
  };

  return (
    <div className="market-items-container">
      {marketItems.length === 0 && <h3>No items in marketplace</h3>}
      {marketItems.map((item: any) => (
        <div key={item.itemId} className="market-item">
          <h3>Item ID: {item.itemId}</h3>
          <p>NFT Contract: {item.nftContract}</p>
          <p>Token ID: {item.tokenId}</p>
          <p>Price: {item.price} SMR</p>
          <button
            onClick={() => buyItem(item.nftContract, item.itemId, item.price)}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default MarketItems;