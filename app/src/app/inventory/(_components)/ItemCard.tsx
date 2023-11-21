// components/ItemCard.tsx

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Item } from "./interfaces/Item";
import ERC1155Balance from "../../../components/ERC1155Balance";
import { address } from "../../../contracts/FarmItems.json";

interface ItemCardProps {
  item: Item;
  account: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, account }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={"./farmItems/img/" + item.id + ".png"}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <ERC1155Balance
          account={account}
          contractAddress={address}
          id={item.id}
        />
      </CardContent>
    </Card>
  );
};

export default ItemCard;
