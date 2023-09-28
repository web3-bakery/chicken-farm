import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import StakeButton from "./StakeButton";
import StakingCard from "../../../components/StakingCard";

interface NftProps {
  tokenId: number;
  url: string;
  staked?: boolean;
}
interface Props {
  stakeAddress: string;
  nft: NftProps;
  disabled: boolean;
}
const UnStakedNFTCard: React.FC<Props> = (props) => {
  const { nft, stakeAddress, disabled } = props;

  const { account } = useWeb3React();

  return (
    <>
      {account && (
        <StakingCard
          name={`#${nft?.tokenId}`}
          image={nft?.url}
          stakeButton={<StakeButton nft={nft} stakeAddress={stakeAddress} disabled={disabled} />}
        />
      )}
    </>
  );
};

export default UnStakedNFTCard;