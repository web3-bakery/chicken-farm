import React, { useState } from 'react';
import { ADDRESSES } from '../../../contracts/addresses';

interface MarketItem {
  contractAddress: string;
  tokenId: number;
  price: number;
}

function SellProduct({ nfts, createMarketItem }: any) {
  const [selectedNft, setSelectedNft] = useState<MarketItem>({
    contractAddress: '',
    tokenId: 0,
    price: 0,
  });
  const [price, setPrice] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (selectedNft) {
      createMarketItem(ADDRESSES.soonabotsAddr, selectedNft, price);
    }
  };

  const handleNftSelect = (e: any) => {
    const selectedTokenId = e.target.value;
    console.log('selectedTokenId', selectedTokenId);
    console.log('nfts', nfts);
    const foundNft = nfts.find((nft: any) => nft == selectedTokenId);
    console.log('foundNft', foundNft);
    setSelectedNft(foundNft);
  };

  return (
    <div className="sell-product">
      <h2>List Your Items for Sale</h2>
      <form onSubmit={handleSubmit} className="sell-product-form">
        <label htmlFor="nftSelect">Select Item:</label>
        <select id="nftSelect" onChange={handleNftSelect}>
          <option value="">--Select Item--</option>
          {nfts?.map((nft: any) => (
            <option key={nft} value={nft}>
              NFT #{nft}
            </option>
          ))}
        </select>

        <label htmlFor="price">Listing Price (in SMR):</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit" disabled={!selectedNft}>
          List Item for Sale
        </button>
      </form>
    </div>
  );
}

export default SellProduct;