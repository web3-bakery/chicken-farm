import { ethers } from "ethers";
import AuctionBox from "../../components/Auction/AuctionBox";
import { hooks, metaMask } from "../../components/web3/connectors/metaMask";
import Base from "../../layouts/Base";
import { Container } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import auctionContract from "../../contracts/SimpleAuction.json";
import chickenContract from "../../contracts/ChickenNFT.json";
import Link from "next/link";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
export default function AuctionIndex() {
  const provider = useProvider();

  const [activeAuctions, setActiveAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAuctions = async () => {
    setLoading(true);
    if (!provider) return;
    console.log("fetchAuctions");

    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    let auctions = await _auctionContract.getActiveAuctions();

    console.log("auctions1", auctions);

    setLoading(false);
    auctions = auctions.filter((auction: any) => auction !== "0");
    auctions = auctions.reverse();
    setActiveAuctions(auctions);

    return "";
  };

  useEffect(() => {
    if (provider) {
      console.log("sdsd");
      fetchAuctions();
    }
  }, [provider]);

  return (
    <>
      <Head>
        <title>Auctions</title>
      </Head>

      <Base>
        <Container maxWidth="md">
          <div className="container mx-auto">
            <h1 className="py-4 px-4 font-bold text-2xl">
              These are the auctions currently ongoing
            </h1>
            <Link href="/auction/create">Create Auction</Link>

            <div className="flex flex-wrap">
              {provider ? (
                loading ? (
                  <div>Loading...</div>
                ) : (
                  activeAuctions.map((auction: any) => {
                    console.log("auction123", auction);
                    return (
                      <AuctionBox
                        nftAddress={chickenContract.address}
                        tokenId={Number(auction)}
                      />
                    );
                  })
                )
              ) : (
                <div>Hey Mate! Maybe Try connecting your metamask?</div>
              )}
            </div>
          </div>
        </Container>
      </Base>
    </>
  );
}
