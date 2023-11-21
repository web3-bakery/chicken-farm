import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

import useERC1155TokenBalance from "../hooks/useERC1155TokenBalance";
interface Props {
  account: string;
  contractAddress: string;
  id: number;
}

const ERC1155Balance: React.FC<Props> = (props) => {
  const { account, contractAddress, id } = props;

  const { data, isError, isLoading, refetch } = useERC1155TokenBalance(
    account,
    contractAddress,
    id
  );
  return (
    <>
      {isLoading ? <Skeleton variant="text" /> : null}

      {isError ? <div>Error</div> : null}

      {data ? (
        <Typography variant="h6" color="text.secondary" mt={0}>
          Balance: {data.toString()}
        </Typography>
      ) : null}
    </>
  );
};

export default ERC1155Balance;
