import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import ChickenEggNFT_CONTRACT from "../contracts/ChickenEggNFT.json";
import useTokenBalance from "../hooks/useTokenBalance";
interface Props {
  account: string;
}

const EggBalance: React.FC<Props> = (props) => {
  const { account } = props;

  const { data, isError, isLoading, refetch } = useTokenBalance(
    account,
    ChickenEggNFT_CONTRACT.address
  );
  return (
    <>
      {isLoading ? <Skeleton variant="text" /> : null}

      {isError ? <div>Error</div> : null}

      {data ? (
        <Typography variant="h5" color="text.secondary" mt={0}>
          You have {data.toString()} eggs
        </Typography>
      ) : null}
    </>
  );
};

export default EggBalance;
