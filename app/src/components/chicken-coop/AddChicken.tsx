import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import useContract from "../../hooks/useContract";
import ChickenCoop_CONTRACT from "../../contracts/ChickenCoop.json";
import ChickenNFT_CONTRACT from "../../contracts/ChickenNFT.json";
import fetchChickenIds from "../../hooks/fetchChickenIds";
interface Props {
  account: string;
  coopId: number;
}

const AddChicken: React.FC<Props> = (props) => {
  const { account, coopId } = props;
  const [selectedId, setSelectedId] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedId(event.target.value as string);
  };
  const contractChickenNFT = useContract(
    ChickenNFT_CONTRACT.address,
    ChickenNFT_CONTRACT.abi
  );
  const contractChickenCoop = useContract(
    ChickenCoop_CONTRACT.address,
    ChickenCoop_CONTRACT.abi
  );

  const { data, isError, isLoading, refetch } = fetchChickenIds(account);

  const addChicken = async () => {
    if (!contractChickenNFT || !contractChickenCoop) return;

    let x = await contractChickenNFT.approve(
      ChickenCoop_CONTRACT.address,
      selectedId
    );
    await x.wait();
    x = await contractChickenCoop.addChickenToCoop(coopId, selectedId);
    await x.wait();
    refetch();
  };

  return (
    <>
      {isLoading ? <Skeleton variant="text" /> : null}

      {isError ? <div>Error</div> : null}

      {data && data.length <= 0 ? (
        <Typography variant="h5" color="text.secondary" mt={0}>
          You don't have any chickens
        </Typography>
      ) : (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Your chickens</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedId}
            label="Chicken"
            onChange={handleChange}
          >
            {data?.map((id) => (
              <MenuItem key={id} value={id}>
                {id}
              </MenuItem>
            ))}
          </Select>
          <Button onClick={addChicken}>Add Chicken</Button>
        </FormControl>
      )}
    </>
  );
};

export default AddChicken;
