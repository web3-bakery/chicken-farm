import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import axios from "axios";

import IERC721Metadata from "../../../contracts/IERC721Metadata.json";
import utils from "../../../utils";
import UnStakedNFTCard from "./UnStakedNFTCard";

const APES_ADDR = "0xE3cA4D93277cDFf239032E08A7383ea6775b6A95";
const APES_STAKING_ADDR = "";

const StakeApes = () => {
  const { active, account, library } = useWeb3React();

  const [nfts, setNfts] = useState<any>([]);

  useEffect(() => {
    if (active && account) {
      utils.loadNfts(library, APES_ADDR, account).then((data) => {
        loadMetadata(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);

  async function loadMetadata(_nfts: Array<any>) {
    const provider = new ethers.providers.Web3Provider(library.provider);

    let contract_Metadata = new ethers.Contract(
      APES_ADDR,
      IERC721Metadata.abi,
      provider
    );

    let array = [];

    for (let index = 0; index < _nfts.length; index++) {
      const token_index = _nfts[index].tokenId;
      let metadata_url = await contract_Metadata.tokenURI(token_index);
      metadata_url = metadata_url.replace("ipfs://", "");

      let res = await axios.get(
        "https://cloudflare-ipfs.com/ipfs/" + metadata_url + ".json"
      );
      let obj = {
        tokenId: token_index,
        url: res?.data?.image.replace(
          "ipfs://",
          "https://cloudflare-ipfs.com/ipfs/"
        ),
      };
      array.push(obj);
    }
    setNfts(array);
  }

  return (
    <div>
      <Typography variant="h4">Apes</Typography>
      <Typography color="text.secondary">Coming soon</Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
          mb: 4,
        }}
      >
        {account &&
          nfts.length > 0 &&
          nfts.map((a: any, index: number) => (
            <UnStakedNFTCard
              key={index}
              stakeAddress={APES_STAKING_ADDR}
              nft={a}
              disabled={true}
            />
          ))}
      </Box>
    </div>
  );
};

export default StakeApes;
