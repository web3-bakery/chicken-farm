import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import useTokenBalance from "../hooks/useTokenBalance";
interface Props {
  account: string;
  contractAddress: string;
}

const NFTBalance: React.FC<Props> = (props) => {
  const { account, contractAddress } = props;

  const { data, isError, isLoading, refetch } = useTokenBalance(
    account,
    contractAddress
  );
  return (
    <>
      {isLoading ? <Skeleton variant="text" /> : null}

      {isError ? <div>Error</div> : null}

      {data ? (
        <Typography variant="h5" color="text.secondary" mt={0}>
          You have {data.toString()} NFTs
        </Typography>
      ) : null}
    </>
  );
};

export default NFTBalance;
