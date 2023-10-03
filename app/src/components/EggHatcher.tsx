import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { ethers } from "ethers";

import NftContract from "../contracts/ChickenNFT.json";
import EGGSContract from "../contracts/EGGS.json";
import moment from "moment";

const EggHatcher = ({ chicken, isLoading, provider }: any) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleHatch = async () => {
    setLoading(true);
    try {
      // Replace the following with your logic:
      // Example: await contract.hatchEgg(eggId, { from: account });

      const nftContract = new ethers.Contract(
        NftContract.address,
        NftContract.abi,
        provider.getSigner()
      );

      const eggsContract = new ethers.Contract(
        EGGSContract.address,
        EGGSContract.abi,
        provider.getSigner()
      );
      const tx = await eggsContract.approve(
        NftContract.address,
        ethers.utils.parseEther("1")
      );
      await tx.wait();

      let res = await nftContract.hatchEgg(chicken.tokenId, {
        gasLimit: 5000000,
      });
      await res.wait();

      // Placeholder logic for hatching success
      setLoading(false);
      setSuccess(true);
    } catch (err: any) {
      // Handle the error
      setLoading(false);
      setError(err.message || "An error occurred!");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: 3,
        justifyContent: "center",
      }}
    >
      {moment(chicken.nextEggMintedTime).diff(moment().unix()) > 0 ? (
        <Typography variant="body1" gutterBottom>
          Your chicken is not ready to hatch!
        </Typography>
      ) : (
        <>
          <Typography variant="body1" gutterBottom>
            or ready to hatch an egg?
          </Typography>
          <Button
            variant="contained"
            startIcon={
              isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <Typography>🐣</Typography>
              )
            }
            color="primary"
            disabled={loading}
            onClick={handleHatch}
          >
            Hatch Egg
            {loading && <CircularProgress size={24} sx={{ ml: 1 }} />}
          </Button>

          <Snackbar
            open={success}
            autoHideDuration={6000}
            onClose={() => setSuccess(false)}
          >
            <Alert
              onClose={() => setSuccess(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              Congratulations! Your egg has been hatched! 🐣
            </Alert>
          </Snackbar>

          <Snackbar
            open={!!error}
            autoHideDuration={6000}
            onClose={() => setError(null)}
          >
            <Alert
              onClose={() => setError(null)}
              severity="error"
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>
        </>
      )}
    </Box>
  );
};

export default EggHatcher;
