import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Box, Typography } from "@mui/material";

import utils from "../../../utils";
import UnStakedNFTCard from "./UnStakedNFTCard";

const NFT_ADDR = "0xA1C16Aa93572326bCE72b923c1e27A35166876c3";
const NFT_STAKING_ADDR = "";

const StakeIOTAHeros = () => {
  const { active, account, library } = useWeb3React();

  const [nfts, setNfts] = useState<any>([]);

  useEffect(() => {
    if (active && account) {
      utils.loadNfts(library, NFT_ADDR, account).then((data) => {
        loadMetadata(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);

  async function loadMetadata(_nfts: Array<any>) {
    let array = [];

    for (let index = 0; index < _nfts.length; index++) {
      const token_index = _nfts[index].tokenId;

      let obj = {
        tokenId: token_index,
        url: "https://api.iotaheroes.com/hero/image/" + token_index + ".png",
      };
      array.push(obj);
    }
    setNfts(array);
  }

  return (
    <div>
      <Typography variant="h4">IOTA Heroes</Typography>
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
        {nfts.length > 0 &&
          nfts.map((a: any, index: number) => {
            return (
              <div key={a.tokenId}>
                <div key={index}>
                  {account && (
                    <UnStakedNFTCard
                      stakeAddress={NFT_STAKING_ADDR}
                      nft={a}
                      disabled={true}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </Box>
    </div>
  );
};

export default StakeIOTAHeros;
