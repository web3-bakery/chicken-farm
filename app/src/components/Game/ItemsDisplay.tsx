import { Box, Button, Typography, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";

import ITEMS_CONTRACT from "../../contracts/ItemsNFT.json";
import { ethers } from "ethers";

import { hooks, metaMask } from "../web3/connectors/metaMask";
enum ItemType {
  BUILDING,
  TREE,
  FIELD,
} // Same enum as in contract for conversion

// Mapping from ItemType enum to display emoji
const ITEM_EMOJIS: any = {
  1: "🏠",
  2: "🌳",
  3: "🌾",
};

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

interface Item {
  name: string;
  itemId: number;
  balance: string;
  // Add more attributes as needed
}

const ItemsDisplay: React.FC = ({onItemSelectedCallback}: any) => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item[]>([]);
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
    loadUserItems();
  }, [account]);

  const handleSelectItem = async (item: any) => {
    console.log("handleSelectItem", item);
    setSelectedItem(item)
    onItemSelectedCallback(item)
  }

    
  const loadUserItems = async () => {
    if (!provider) {
      return;
    }
    const itemsNFT = new ethers.Contract(
      ITEMS_CONTRACT.address,
      ITEMS_CONTRACT.abi,
      provider.getSigner()
    );
    if (account) {
      const userItems: Array<any> = [];
      const MAX_ITEM_ID = 3; // This is just a hypothetical number

      for (let i = 1; i <= MAX_ITEM_ID; i++) {
        const balance = await itemsNFT.balanceOf(account, i);
        console.log("balance", balance);

        const itemType = await itemsNFT.items(i);
        console.log("itemType", itemType);
        userItems.push({
          itemId: i,
          itemType: ItemType[itemType],
          balance: balance.toString(),
        });
        console.log("userItems", itemType);
      }

      console.log("userItems", userItems);
      setItems(userItems);
      // TODO: Update UI to reflect changes or fetch the updated farm details.
    }
  };

  return (
    <Box boxShadow={3} padding={3}>
      <Typography variant="h6">Available Items</Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item.itemId}>
            <Typography variant="body1">{item.name}</Typography>
            <Button variant="contained" color={ item.itemId == selectedItem?.itemId ? "primary" : "secondary"  } onClick={() => handleSelectItem(item)} >
              Place on Farm
              {ITEM_EMOJIS[item.itemId] || "🌱"}({item.balance})
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ItemsDisplay;
