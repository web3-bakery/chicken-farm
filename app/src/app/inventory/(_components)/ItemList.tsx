// pages/index.tsx

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";
import { Item } from "./interfaces/Item";
import useContract from "../../../hooks/useContract";
import FarmITems_CONTRACT from "../../../contracts/FarmItems.json";

interface ItemListProps {
  account: string;
}

const ItemList: React.FC<ItemListProps> = ({ account }) => {
  const [items, setItems] = useState<Item[]>([]);
  const contract = useContract(
    FarmITems_CONTRACT.address,
    FarmITems_CONTRACT.abi
  );

  const fetchMetadata = async (url: string): Promise<Item> => {
    const response = await fetch(url);
    const metadata = await response.json();
    console.log("metadata", metadata);
    return {
      id: parseInt(metadata.id),
      name: metadata.name,
      description: metadata.description,
      imageUrl: metadata.image,
    };
  };

  const fetchItems = async () => {
    try {
      // Fetch items logic (fetch IDs, then metadata for each ID)
      // ...
      // Example: Fetch all token IDs (modify based on your contract's functions)
      const tokenIds = [0, 1, 2, 3];

      const itemPromises = tokenIds.map(async (id: number) => {
        const metadataUrl = `http://localhost:3000/farmItems/metadata/${id}.json`; // Modify to match your metadata URL structure
        return fetchMetadata(metadataUrl);
      });

      const fetchedItems = await Promise.all(itemPromises);

      setItems(fetchedItems);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Grid container spacing={1}>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <ItemCard item={item} account={account} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
