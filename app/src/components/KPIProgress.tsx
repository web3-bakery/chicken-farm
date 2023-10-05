import { Grid, LinearProgress, Box } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  value: number;
}

const KPIProgress = (props: Props) => {
  const { label, value } = props;
  return (
    <Box sx={{ p: 2, bgcolor: "#2E2E2E", borderRadius: 2 }}>
      {label + " " + value}
      <LinearProgress variant="determinate" value={value * 10} />
    </Box>
  );
};

export default KPIProgress;
