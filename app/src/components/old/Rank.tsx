import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  rank: number;
  address?: string;
  highlight: {
    value: number | string;
    label: string;
  };
}

// <AddressWithTooltip address={burner.address} />

const Rank: React.FC<Props> = (props) => {
  const { rank, address, highlight } = props;

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{ flex: 1, display: "flex", p: 2, gap: 4, alignItems: "center" }}
      >
        <Typography variant="h5">#{rank}</Typography>
        {address && <Typography color="text.secondary">{address}</Typography>}
      </Box>
      <Box
        sx={{
          bgcolor: "grey.800",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 100,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          {highlight.value}
        </Typography>
        <Typography fontWeight={700} fontSize={12} color="text.secondary">
          {highlight.label}
        </Typography>
      </Box>
    </Box>
  );
};

export default Rank;
