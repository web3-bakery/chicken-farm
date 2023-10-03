import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";

interface Props {
  label: string;
  value?: string | null;
  symbol?: string | null;
}

const KPI: React.FC<Props> = (props) => {
  const { label, value, symbol } = props;
  return (
    <Box sx={styles.card}>
      <Typography color="text.secondary" fontSize={14} mt={0}>
        {label}
      </Typography>
      <Box sx={styles.wrapper}>
        <Typography boxShadow={1} variant="h6" my={0} mr={1}>
          {value ? value.split(".")[0] : <Skeleton width={60} />}
        </Typography>
        <Typography
          boxShadow={1}
          fontWeight={700}
          fontSize={12}
          color="text.secondary"
        >
          {symbol}
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    marginBottom: "30px",
    gap: 2,
  },
  card: {
    bgcolor: "background.paper",
    p: 2,
    flex: 1,
    borderRadius: 2,
    boxShadow: 1,
  },
  wrapper: {
    display: "flex",
    alignItems: "flex-end",
  },
};

export default KPI;
