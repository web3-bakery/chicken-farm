import React from "react";
import { Box, Typography, Skeleton, Button } from "@mui/material";
import useChickenCoop from "../../hooks/useChickenCoop";

interface Props {
  account: string;
}
import { ethers } from "ethers";
import ChickenCoopCard from "./ChickenCoopCard";

const ChickenCoops: React.FC<Props> = (props) => {
  const { account } = props;
  const { data, isError, isLoading, refetch } = useChickenCoop(account);

  return (
    <Box>
      {isLoading ? <Skeleton variant="text" /> : null}

      {isError ? <div>Error</div> : null}

      {data && data.length === 0 ? (
        <Typography variant="h5" color="text.secondary" mt={0}>
          No Chicken Coops
        </Typography>
      ) : null}

      {data && data.length > 0 ? (
        <>
          {data.map((tokenId) => (
            <div key={tokenId.toString()}>
              <ChickenCoopCard tokenId={Number(tokenId)} />
            </div>
          ))}
        </>
      ) : null}
    </Box>
  );
};

export default ChickenCoops;
