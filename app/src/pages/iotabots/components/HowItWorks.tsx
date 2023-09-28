import React from "react";
import { Box, Typography } from "@mui/material";

const HowItWorks = () => {
  return (
    <Box>
      <Typography gutterBottom variant="h4">
        How it works
      </Typography>
      <Typography gutterBottom variant="h5">
        EGGS Token Burning Process
      </Typography>
      <Typography color="text.secondary">
        Burning EGGS tokens permanently removes a specified amount of tokens
        from circulation, reducing the total supply. This action is
        irreversible.
      </Typography>
      <Typography mt={2} gutterBottom variant="h6">
        Step 1: Approve the contract
      </Typography>
      <Typography color="text.secondary">
        Before burning tokens, you need to approve the smart contract to
        transfer the specified amount of EGGS tokens on your behalf. This is a
        security measure implemented in the ERC20 standard to ensure that you
        maintain control over your tokens.
      </Typography>
      <Typography color="text.secondary">
        By approving the contract, you grant permission for the smart contract
        to transfer a specific amount of tokens from your account. This
        allowance can be changed at any time by approving a new amount.
      </Typography>
      <Typography mt={2} gutterBottom variant="h6" component="h6">
        Step 2: Burn tokens
      </Typography>
      <Typography color="text.secondary">
        After approving the contract, you can proceed to burn the tokens.
        Clicking the "Burn Tokens" button will send a transaction to the smart
        contract, which will transfer the specified amount of tokens to a
        designated "dead" address. This action effectively removes the tokens
        from circulation.
      </Typography>
      <Typography color="text.secondary">
        Please note that burning tokens is an irreversible action. Once burned,
        the tokens cannot be recovered.
      </Typography>
    </Box>
  );
};

export default HowItWorks;
