import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FARM_CONTRACT from "../../contracts/FarmNFT.json";
import { ethers } from "ethers";
import FarmMatrix from "./FarmMatrix";

import { hooks, metaMask } from "../web3/connectors/metaMask";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
interface Farm {
  size: number;
  // Add more attributes as needed
}

const FarmDisplay: React.FC = ({ farmId, selectedItem }: any) => {
  const [farm, setFarm] = useState<Farm | null>(null);

  const [account, setAccount] = useState("");
  const provider = useProvider();
  const accounts = useAccounts();

  const isActive = useIsActive();

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  const handlePlaceItem = async (x: number, y: number, itemId: number) => {
    if (!provider) {
      return;
    }
    const farmNFT = new ethers.Contract(
      FARM_CONTRACT.address,
      FARM_CONTRACT.abi,
      provider.getSigner()
    );
    if (account) {
      console.log("account", account);
      console.log("x", x);
      console.log("y", y);
      console.log("itemId", itemId);
      console.log("selectedItem", selectedItem);
      try {
        const tx = await farmNFT.placeItem(farmId, x, y, selectedItem.itemId);
        const receipt = await tx.wait();
        console.log(receipt);
      } catch (error) {
        console.log("error", error);
      }
      // TODO: Update UI to reflect changes or fetch the updated farm details.
    }
  };

  // Fetch farm data here using ethers.js
  useEffect(() => {
    const fetchData = async () => {
      if (!provider) {
        return;
      }

      try {
        const farmNFT = new ethers.Contract(
          FARM_CONTRACT.address,
          FARM_CONTRACT.abi,
          provider
        );
        const farmData = await farmNFT.getFarmDetails(farmId);
        setFarm(farmData);

        console.log("farmData", farmData);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [farmId]);

  return (
    <Box boxShadow={3} padding={3}>
      <Typography variant="h6">Farm Details</Typography>
      {farm ? (
        <>
          <Typography variant="body1">Size: {farm.size.toString()}</Typography>
          <FarmMatrix farm={farm} onPlaceItem={handlePlaceItem} />
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
      {/* Add more farm details display here */}
    </Box>
  );
};

export default FarmDisplay;
