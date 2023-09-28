import { Box, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

import { ADDRESSES } from "../../../contracts/addresses";
import utils from "../../../utils";
import UnStakedNFTCard from "./UnStakedNFTCard";
import StakedNFTCard from "./StakedNFTCard";
import useSoonabots from "../../../hooks/contracts/useSoonabots";

const StakeSoonabots = () => {
  const { active, account, library } = useWeb3React();
  const [nfts, setNfts] = useState<any>([]);
  const [stakedNfts, setStakedNfts] = useState<any>([]);

  const { data } = useSoonabots(account || "", ADDRESSES.soonabotsAddr);

  useEffect(() => {
    if (active && account) {
      utils.loadNfts(library, ADDRESSES.soonabotsAddr, account).then((data) => {
        setNfts(data);
      });
      utils.getStakedNFTs(library, ADDRESSES.soonabotsStakeAddr, account).then(
        (data) => {
          setStakedNfts(data);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account, data]);

  return (
    <div>
      <Typography variant="h4">Soonabots</Typography>
      <Typography color="text.secondary">Available now!</Typography>
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
          stakedNfts.length > 0 &&
          stakedNfts.map((a: any, index: number) => (
            <StakedNFTCard
              key={index}
              stakeAddress={ADDRESSES.soonabotsStakeAddr}
              nft={a}
            />
          ))}
        {account &&
          nfts.length > 0 &&
          nfts.map((a: any, index: number) => (
            <UnStakedNFTCard
              key={index}
              stakeAddress={ADDRESSES.soonabotsStakeAddr}
              nft={a}
              disabled={false}
            />
          ))}
      </Box>
    </div>
  );
};

export default StakeSoonabots;