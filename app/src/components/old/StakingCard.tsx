import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface Props {
  image?: string;
  name: string;
  description?: string;
  stakeButton?: React.ReactNode;
  onUnStake?: () => void;
  onHarvest?: () => void;
  error?: string;
}

const StakingCard: React.FC<Props> = (props) => {
  const { image, name, description, error, stakeButton, onUnStake, onHarvest } =
    props;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        minWidth: 200,
        overflow: "hidden",
      }}
    >
      {image && (
        <Box
          sx={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: 160,
          }}
        />
      )}
      <Box sx={{ p: 2 }}>
        <Typography fontSize={20} fontWeight={700} gutterBottom>
          {name}
        </Typography>
        {description && <Typography>{description}</Typography>}
        <Box>
          {stakeButton && stakeButton}
          {onUnStake && <Button onClick={onUnStake}>Unstake</Button>}
          {onHarvest && <Button onClick={onHarvest}>Harvest</Button>}
        </Box>
        {error && <Typography color="error.main">{error}</Typography>}
      </Box>
    </Box>
  );
};

export default StakingCard;
