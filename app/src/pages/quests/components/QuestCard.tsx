import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { ethers } from "ethers";

const QuestCard = ({ quest, onSolve }: any) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {quest?.description}
        </Typography>
        <Typography color="textSecondary">
          Points: {quest?.points?.toNumber()}
        </Typography>
        <Typography color="textSecondary">
          Your Balance: {quest?.balance}
        </Typography>
        <Typography color="textSecondary">
          Required tokens:{" "}
          {ethers.utils.formatEther(quest?.requiredTokenAmount || 0)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          disabled={!quest?.userCanSolve}
          size="small"
          onClick={() => onSolve(quest?.id)}
        >
          Solve
        </Button>
        {quest?.active ? "Active" : "Inactive"}
      </CardActions>
    </Card>
  );
};
export default QuestCard;
