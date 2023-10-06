import { Box, Typography, Input, Button, TextField } from "@mui/material";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";

interface Props {
  provider: any;
  daoContract: any;
  account: string;
  createProposalCallback: () => void;
}

const CreateProposal = (props: Props) => {
  const { provider, daoContract, account, createProposalCallback } = props;
  const [loading, setLoading] = useState(false);

  const [formInput, updateFormInput] = React.useState({
    title: "",
    url: "",
    amount: 0,
    recipient: "",
  });
  // Calls the `createProposal` function in the contract, using the tokenId from `fakeNftTokenId`
  const createProposal = async () => {
    if (!provider) return;

    setLoading(true);

    const { title, url, amount, recipient } = formInput;

    if (!validForm()) {
      console.error("the form is not valid");
      setLoading(false);
    }

    try {
      const tx = await daoContract.createProposal(
        title,
        url,
        ethers.utils.parseEther(amount.toString()),
        recipient,
        { gasLimit: 1000000 }
      );
      await tx.wait();
      createProposalCallback();
    } catch (e) {
      console.error(e);
    }

    setLoading(false);

    return;
  };

  // basic validation
  const validForm = (): boolean => {
    let valid = true;
    if (formInput.title === "") {
      valid = false;
    }
    if (formInput.url === "") {
      valid = false;
    }
    if (formInput.amount < 0) {
      valid = false;
    }
    if (!ethers.utils.isAddress(formInput.recipient)) {
      valid = false;
    }
    return valid;
  };

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Create a Proposal
      </Typography>

      <Typography sx={{ marginBottom: 2 }}>
        Now you can create an proposal. Creating a proposal costs 10 EGGS
      </Typography>
      <TextField
        disabled={loading}
        placeholder="Your Proposal Title"
        label="Title"
        fullWidth
        variant="outlined"
        sx={{ mb: 2, bgcolor: "background.paper" }}
        value={formInput.title}
        onChange={(e: any) =>
          updateFormInput({
            ...formInput,
            title: e.target.value,
          })
        }
      />

      <TextField
        disabled={loading}
        placeholder="https://..."
        label="External Link"
        fullWidth
        variant="outlined"
        sx={{ mb: 2, bgcolor: "background.paper" }}
        value={formInput.url}
        onChange={(e: any) =>
          updateFormInput({
            ...formInput,
            url: e.target.value,
          })
        }
      />
      <TextField
        disabled={loading}
        type="number"
        placeholder="Proposal Amount in SMR"
        label="Proposal Amount in SMR"
        fullWidth
        variant="outlined"
        value={formInput.amount}
        sx={{ mb: 2, bgcolor: "background.paper" }}
        onChange={(e: any) =>
          updateFormInput({
            ...formInput,
            amount: e.target.value,
          })
        }
      />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          disabled={loading}
          placeholder={account}
          label="Recipient Address"
          fullWidth
          variant="outlined"
          sx={{ bgcolor: "background.paper" }}
          value={formInput.recipient}
          onChange={(e: any) =>
            updateFormInput({
              ...formInput,
              recipient: e.target.value,
            })
          }
        />
        <Button
          disabled={loading}
          color="secondary"
          variant="contained"
          onClick={() => updateFormInput({ ...formInput, recipient: account })}
        >
          Use my address
        </Button>
      </Box>

      <Button
        sx={{ mt: 2, height: 40, alignSelf: "flex-start" }}
        variant="contained"
        onClick={createProposal}
      >
        Create
      </Button>
    </Box>
  );
};

export default CreateProposal;
