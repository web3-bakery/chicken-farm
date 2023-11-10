import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { hooks } from "../../components/web3/connectors/metaMask";
import { Card, CardContent, Typography } from "@mui/material";
import auctionContract from "../../contracts/SimpleAuction.json";

const { useProvider } = hooks;
const truncateStr = (fullStr: any, strLen: any) => {
  if (fullStr.length <= strLen) return fullStr;
  const separator = "...";
  const seperatorLength = separator.length;
  const charsToShow = strLen - seperatorLength;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  return (
    fullStr.substring(0, frontChars) +
    separator +
    fullStr.substring(fullStr.length - backChars)
  );
};

export default function AuctionBox({ nftAddress, tokenId }: any) {
  const router = useRouter();
  const provider = useProvider();

  const [imageURI, setImageURI] = useState("");
  const [seller, setSeller] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenDescription, setTokenDescription] = useState("");
  const [price, setPrice] = useState(0);

  const [loading, setLoading] = useState(true);

  // const { runContractFunction: getTokenURI } = useWeb3Contract({
  //   abi: nftAbi,
  //   contractAddress: nftAddress,
  //   functionName: "tokenURI",
  //   params: {
  //     tokenId: tokenId,
  //   },
  // });

  async function updateUI() {
    setLoading(true);
    console.log("Updating UI...");
    console.log("provider", provider);
    console.log("nftAddress", nftAddress);
    console.log("tokenId", tokenId);

    if (!provider) return;

    // const tokenURI = await getTokenURI();
    // console.log(`The TokenURI is ${tokenURI}`);
    // if (tokenURI) {
    //   const requestURL = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    //   const tokenURIResponse = await (await fetch(requestURL)).json();
    //   const imageURI = tokenURIResponse.image;
    //   const imageURIURL = imageURI.replace("ipfs://", "https://ipfs.io/ipfs/");
    //   setImageURI(imageURIURL);
    //   setTokenName(tokenURIResponse.name);
    //   setTokenDescription(tokenURIResponse.description);
    // }
    const _auctionContract = new ethers.Contract(
      auctionContract.address,
      auctionContract.abi,
      provider
    );
    const temporaryHighestBid = await _auctionContract.getTemporaryHighestBid(
      nftAddress,
      tokenId
    );
    console.log("temporaryHighestBid", temporaryHighestBid);
    setPrice(temporaryHighestBid);
    setLoading(false);
  }

  useEffect(() => {
    if (provider) {
      updateUI();
    }
  }, [provider]);

  const formattedSellerAddress = truncateStr(seller || "", 15);

  const handleCardClick = () => {
    router.push(`/auction/${nftAddress}/${tokenId}`);
  };

  return (
    <div>
      <div>
        {!loading ? (
          <Card style={{ cursor: "pointer" }} onClick={handleCardClick}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                #{tokenId}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="italic text-sm"
              >
                Owned by {formattedSellerAddress}
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                className="font-bold"
              >
                {ethers.utils.formatUnits(price, "ether")} SMR
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <div>Loading...2</div>
        )}
      </div>
    </div>
  );
}
