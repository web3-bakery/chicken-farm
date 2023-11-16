import React from "react";
import { Box, Typography, Skeleton, Button } from "@mui/material";
import useTokenBalance from "../../hooks/useTokenBalance";
import useContract from "../../hooks/useContract";
import { ethers } from "ethers";

interface Props {
  name: string;
  account: string;
  contractAddress: string;
  abi: Object;
}

const ShopItem: React.FC<Props> = (props) => {
  const { name, account, contractAddress, abi } = props;
  const contract = useContract(contractAddress, abi);

  const { data, isError, isLoading, refetch } = useTokenBalance(
    account,
    contractAddress
  );

  const buy = async () => {
    console.log("buying: ", name);
    let x = await contract?.buy({
      value: ethers.utils.parseEther("10"),
    });
    await x.wait();
    refetch();
  };

  return (
    <Box>
      <Typography variant="h5" color="text.secondary" mt={0}>
        {name}
      </Typography>
      <Typography variant="h5" color="text.secondary" mt={0}>
        contractAddress: {contractAddress}
      </Typography>
      {isLoading || isError ? (
        <Skeleton variant="text" />
      ) : (
        <>
          <Typography variant="h5" color="text.secondary" mt={0}>
            Balance: {data?.toString()}
          </Typography>
          <Button onClick={buy}>Buy {name}</Button>
        </>
      )}
    </Box>
  );
};

export default ShopItem;
