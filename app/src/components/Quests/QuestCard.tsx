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
        <Typography variant="h6" component="div">
          {quest?.description}
        </Typography>
        <Typography color="textSecondary">
          Points: {quest?.points?.toNumber()}
        </Typography>
        <Typography color="textSecondary">
          Your Balance: {quest?.balance}
        </Typography>
        <Typography color="textSecondary">
          Required tokens: {quest?.requiredTokenAmount}
        </Typography>
      </CardContent>
      <CardActions>
        {quest?.solved ? (
          <Typography color="textSecondary">Quest solved!</Typography>
        ) : (
          <Button
            disabled={!quest?.userCanSolve}
            size="small"
            onClick={() => onSolve(quest?.id)}
          >
            Solve
          </Button>
        )}
        {quest?.active ? "Active" : "Inactive"}
      </CardActions>
    </Card>
  );
};
export default QuestCard;
