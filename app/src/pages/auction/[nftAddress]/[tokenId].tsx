import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNotification } from "../../../context/NotificationContext";

import auctionContract from "../../../contracts/SimpleAuction.json";
import chickenContract from "../../../contracts/ChickenNFT.json";
import { hooks, metaMask } from "../../../components/web3/connectors/metaMask";
import Base from "../../../layouts/Base";
import Head from "next/head";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";

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
  const accounts = useAccounts();
  const { showNotification } = useNotification();

  const router = useRouter();
  const { nftAddress, tokenId } = router.query;
  const [imageURI, setImageURI] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");
  const [bids, setBids] = useState<any[]>([]);

  //Date variable to check if the auction has ended
  //Initially would be in unix format
  const [date, setDate] = useState("");
  const [endTime, setEndTime] = useState(0);
  //bool for conditional rendering to show auction ended functions
  const [auctionEnded, setAuctionEnded] = useState(true);
  //bool for conditional rendering for some functions for the nft Sellet(Auction creator)
  const [isOwnedByUser, setIsOwnedByUser] = useState(false);
  //bool for conditional rendering for some functions for the nft Auction Winner(Highest bid maker)
  const [isAuctionWinner, setisAuctionWinner] = useState(false);

  const [loading, setLoading] = useState(true);
  const [bidPrice, setBidPrice] = useState("");

  const [account, setAccount] = useState("");
  const [currentWinner, setCurrentWinner] = useState("");

  interface Auction {
    auctions: [
      {
        currentPrice: string;
        nftSeller: string;
      }
    ];
  }

  // Helper function to format time left
  const formatTimeLeft = (time: any) => {
    // Calculate hours, minutes and seconds
    const hours = Math.floor(time / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = Math.floor(time % 60);

    // Output the result in HH:MM:SS format
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const [timeLeft, setTimeLeft] = useState("");

  const [specificAuction, setSpecificAuction] = useState<Auction>({
    auctions: [
      {
        currentPrice: "",
        nftSeller: "",
      },
    ],
  });

  const fetchAuction = async () => {
    setLoading(true);
    if (!provider) return;
    console.log("fetchAuctions");
    console.log("nftAddress", nftAddress);
    console.log("tokenId", tokenId);

    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    const auctionDetails = await _auctionContract.nftContractAuctions(
      nftAddress,
      tokenId
    );
    console.log("auctionDetails", auctionDetails);
    setCurrentWinner(auctionDetails.currentWinner);

    // Use a Set to store unique bidder addresses
    const uniqueBidders = new Set<string>();
    try {
      let index = 0;
      while (true) {
        // Loop until an error is thrown
        const bidderAddress = await _auctionContract.getSpecificAddress(
          nftAddress,
          tokenId,
          index
        );
        uniqueBidders.add(bidderAddress);
        index++;
      }
    } catch (error) {
      // When getSpecificAddress reverts, it means we've reached the end of the bidders array
    }

    const bidders = Array.from(uniqueBidders);

    // Now, we can get the bids for each bidder
    const auctionBids = bidders.map(async (bidder: string) => {
      const bidAmount = await _auctionContract.getBidOfAnAddress(
        nftAddress,
        tokenId,
        bidder
      );
      return {
        tokenId,
        bidder,
        bidAmount: ethers.utils.formatEther(bidAmount),
      };
    });
    // Resolve all promises from map
    const resolvedAuctionBids = await Promise.all(auctionBids);
    setBids((bids: any) => [...resolvedAuctionBids]);

    let auctionOngoing = await _auctionContract.getStateOfAuction(
      nftAddress,
      tokenId
    );

    console.log("auctionOngoing", auctionOngoing);

    const tokenURI = await getTokenURI();
    console.log(`The TokenURI is ${tokenURI}`);

    const startingTime = await getStartingTime();
    console.log(`The starting time is ${startingTime}`);

    const durationOfAuction = await getAuctionInterval();
    console.log(`The duration of auction is ${durationOfAuction}`);
    const currentTime = Math.round(Date.now() / 1000);
    console.log(`The current time is ${currentTime}`);
    console.log(`The auction will end at ${startingTime + durationOfAuction}`);
    setEndTime(Number(startingTime) + Number(durationOfAuction));
    if (
      Number(startingTime) + Number(durationOfAuction) <
      Number(currentTime)
    ) {
      setAuctionEnded(true);
      console.log("auctionEnded: TRUE");
    } else {
      setAuctionEnded(false);
      console.log("auctionEnded: FALSE");
    }

    const seller = await getSellerOfTheNft();
    console.log(`seller ${seller}`);

    console.log("account", account);
    account == seller ? setIsOwnedByUser(true) : setIsOwnedByUser(false);

    const winner = await getWinnerOfAuction();
    console.log(`winner ${winner}`);
    console.log(`account ${account}`);
    account == winner ? setisAuctionWinner(true) : setisAuctionWinner(false);

    const temporaryHighestBid = await getTemporaryHighestBid();

    setSpecificAuction({
      auctions: [
        {
          currentPrice: temporaryHighestBid,
          nftSeller: seller,
        },
      ],
    });
    setLoading(false);
  };

  const getTokenURI = async () => {
    console.log("getTokenURI");
  };

  const getStartingTime = async () => {
    console.log("getStartingTime");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    let startingTimeOfAuction = await _auctionContract.getStartingTimeOfAuction(
      nftAddress,
      tokenId
    );

    console.log("startingTimeOfAuction", startingTimeOfAuction);
    return startingTimeOfAuction;
  };
  const getWinnerOfAuction = async () => {
    console.log("getWinnerOfAuction");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    let currentWinner = await _auctionContract.getCurrentWinner(
      nftAddress,
      tokenId
    );

    console.log("currentWinner", currentWinner);
    return currentWinner;
  };
  const getTemporaryHighestBid = async () => {
    console.log("getTemporaryHighestBid");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    let temporaryHighestBid = await _auctionContract.getTemporaryHighestBid(
      nftAddress,
      tokenId
    );

    console.log("currentWinner", temporaryHighestBid);
    return temporaryHighestBid;
  };
  const getAuctionInterval = async () => {
    console.log("getAuctionInterval");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    let intervalOfNftAuction = await _auctionContract.getIntervalOfNftAuction(
      nftAddress,
      tokenId
    );

    console.log("intervalOfNftAuction", intervalOfNftAuction);
    return intervalOfNftAuction;
  };
  const getSellerOfTheNft = async () => {
    console.log("getSellerOfTheNft");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );

    let sellerOfTheNft = await _auctionContract.getSellerOfTheNft(
      nftAddress,
      tokenId
    );

    console.log("sellerOfTheNft", sellerOfTheNft);
    return sellerOfTheNft;
  };

  async function MakeBid() {
    console.log("MakeBid", bidPrice);
    const msgVal = ethers.utils.parseUnits(bidPrice, "ether").toString();
    console.log("msgVal", msgVal);
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider?.getSigner()
    );

    let bit = await _auctionContract.makeBid(nftAddress, tokenId, {
      value: msgVal,
    });
    handleBidSuccess(bit);
  }

  //If the make bid was called succesfully to show the notification to user
  async function handleBidSuccess(tx: any) {
    await tx.wait(1);
    console.log(
      "Bid Initialized. Please wait for about 30 seconds to see your bid in Bids Section  of this nft"
    );

    showNotification("Bid has been placed", "success");

    fetchAuction();
  }

  //Function will be called when the nft seller wants to withdraw Highest Bid
  //Integrates the "withdrawWinningBid" function of the Contract
  //Can be only called by the Auction creator
  async function WithdrawWinningBid() {
    console.log("Withdrawing Winning Bid");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider?.getSigner()
    );

    let tx = await _auctionContract.withdrawWinningBid(nftAddress, tokenId);
    WithdrawWinningBidSuccess(tx);
  }

  async function WithdrawWinningBidSuccess(tx: any) {
    await tx.wait(1);
    console.log("You have received the winning bid in your wallet");
    showNotification(
      "Your have received the winning bid in your wallet",
      "success"
    );
  }

  //Function will be called when the nft seller wants to withdraw nft as auction ended with no bids
  //Integrates the "withdrawNft" function of the Contract
  //Can be only called by the Auction creator
  async function WithdrawNft() {
    console.log("Withdrawing Nft after unsuccesful Auction");
    console.log("Claiming Nft after Winning Auction");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider?.getSigner()
    );

    let tx = await _auctionContract.withdrawNft(nftAddress, tokenId);
    WithdrawNftSuccess(tx);
  }

  async function WithdrawNftSuccess(tx: any) {
    await tx.wait(1);
    console.log(
      "You have received the nft in your wallet as the auction ended without no bids"
    );

    showNotification("You have received the nft", "success");
  }

  //Function will be called when the nft auction winner need to receive his nft
  //Integrates the "receiveNft" function of the Contract
  //Can be only called by the Auction winner
  async function ClaimNft() {
    console.log("Claiming Nft after Winning Auction");
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider?.getSigner()
    );

    let tx = await _auctionContract.receiveNft(nftAddress, tokenId);
    ClaimNftSuccess(tx);
  }
  async function ClaimNftSuccess(tx: any) {
    await tx.wait(1);
    console.log(
      "You have received the nft in your wallet as the as your made the highest winning bid"
    );
    showNotification("You have reeeived the nft", "success");
  }

  const updateCountdown = () => {
    const interval = setInterval(() => {
      const currentTime = Math.round(Date.now() / 1000);
      const timeLeft = Number(endTime) - currentTime;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setAuctionEnded(true);
        setTimeLeft("Auction has ended");
      } else {
        setTimeLeft(formatTimeLeft(timeLeft));
      }
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (provider && accounts && accounts?.length > 0) {
      setAccount(accounts[0]);
      console.log("sdsd");
    }
  }, [accounts, provider]);
  useEffect(() => {
    if (account) {
      fetchAuction();
    }
  }, [account]);

  return (
    <>
      <Head>
        <title>Chicken Detail</title>
      </Head>

      <Base>
        <Container maxWidth="md">
          <div className="container mx-auto">
            <h1 className="py-12 px-4 font-bold text-2xl  ml-auto">
              The details of the Nft
            </h1>
            <div className="flex flex-wrap">
              {provider ? (
                loading || !specificAuction ? (
                  <div>Loading...</div>
                ) : (
                  <div style={{ minHeight: "80vh" }}>
                    <div className="flex ml-20 mt-20">
                      <img src={imageURI} alt="" className="w-2/5" />
                      <div className="text-xl text-white ml-20 space-y-8 text-black shadow-2xl rounded-lg border-2 p-5 bg-[#16de66]">
                        {auctionEnded ? (
                          <span>Auction has ended</span>
                        ) : (
                          <span>Time left: {timeLeft}</span>
                        )}
                        <div>
                          Current Price:{" "}
                          <span className="">
                            {ethers.utils.formatUnits(
                              specificAuction?.auctions[0]?.currentPrice,
                              "ether"
                            )}
                          </span>
                        </div>
                        <div>
                          Nft Owner:{" "}
                          <span className="text-sm">
                            {specificAuction?.auctions[0]?.nftSeller}
                          </span>
                        </div>
                        <div>
                          Current Winner:{" "}
                          <span className="text-sm">{currentWinner}</span>
                        </div>
                        <div>
                          Auction Ended:{" "}
                          <span className="text-sm">
                            {auctionEnded ? "True" : "False"}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div>
                          {!auctionEnded ? (
                            <Box
                              component="form"
                              onSubmit={MakeBid}
                              noValidate
                              autoComplete="off"
                              sx={{
                                "& .MuiTextField-root": { m: 1, width: "25ch" },
                              }}
                            >
                              <Typography variant="h6" gutterBottom>
                                Make A Bid
                              </Typography>
                              <TextField
                                label="Bid Price In Eth"
                                type="number"
                                value={bidPrice}
                                onChange={(e) => setBidPrice(e.target.value)}
                                fullWidth
                              />
                              <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                              >
                                Submit Bid
                              </Button>
                            </Box>
                          ) : (
                            <div>This Auction has Ended</div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {loading ? (
                        <div>loading bits...</div>
                      ) : (
                        bids?.map((bid: any) => {
                          const { bidder, bidAmount } = bid;
                          return (
                            <ul>
                              <li>bidder: {bidder}</li>
                              <li>bidAmount: {bidAmount}</li>
                            </ul>
                          );
                        })
                      )}
                      {auctionEnded ? (
                        isOwnedByUser ? (
                          <div className="ml-auto ">
                            <div className="mt-6">
                              <Button
                                size="large"
                                color="primary"
                                variant="contained"
                                onClick={WithdrawWinningBid}
                              >
                                Withdraw Winning Bid
                              </Button>
                            </div>
                            <div>
                              <Button
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={WithdrawNft}
                              >
                                Withdraw Nft
                              </Button>
                            </div>
                          </div>
                        ) : isAuctionWinner ? (
                          <div className="ml-auto mt-6 ">
                            <Button
                              size="large"
                              variant="contained"
                              color="primary"
                              onClick={ClaimNft}
                            >
                              Claim Your Nft
                            </Button>
                          </div>
                        ) : (
                          <div> was? </div>
                        )
                      ) : (
                        <div> was 2?</div>
                      )}
                    </div>
                    <p>isAuctionWinner: {isAuctionWinner ? "true" : "false"}</p>
                  </div>
                )
              ) : (
                <div>Web3 Currently Not Enabled</div>
              )}
            </div>
          </div>
        </Container>
      </Base>
    </>
  );
}
