import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { hooks, metaMask } from "../web3/connectors/metaMask";
import FARM_CONTRACT from "../../contracts/FarmNFT.json";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;
interface UserFarmsProps {
  contract: ethers.Contract; // This is the ethers.js contract instance
  userAddress: string; // Ethereum address of the current user
}

interface Props {
  onFarmClickedCallback: (farmId: string) => void;
}

const UserFarms = (props: Props) => {
  const { onFarmClickedCallback } = props;
  const [farms, setFarms] = useState<number[]>([]);
  const accounts = useAccounts();
  const [account, setAccount] = useState("");
  const provider = useProvider();

  const isActive = useIsActive();
  console.log("isActive", isActive);

  useEffect(() => {
    if (isActive && accounts && accounts.length > 0) {
      setAccount(accounts[0]);
    }
  }, [isActive, accounts]);

  useEffect(() => {
    const fetchFarms = async () => {
      if (!provider) {
        return;
      }
      try {
        const farmNFT = new ethers.Contract(
          FARM_CONTRACT.address,
          FARM_CONTRACT.abi,
          provider.getSigner()
        );
        const userFarms = await farmNFT.walletOfOwner(account);
        console.log("userFarms", userFarms);
        setFarms(userFarms);
      } catch (error) {
        console.error("Failed to fetch farms:", error);
      }
    };

    fetchFarms();
  }, [provider, account]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Farm ID</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {farms.map((farmId) => (
          <TableRow key={farmId.toString()}>
            <TableCell>{farmId.toString()}</TableCell>
            <TableCell>
              {/* You can route to a detail view page or open a modal to display farm details */}
              <Button
                onClick={() => onFarmClickedCallback(farmId.toString())}
                variant="contained"
                color="primary"
              >
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserFarms;
