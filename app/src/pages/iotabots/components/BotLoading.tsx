import React from "react";
import { Box, Button, Skeleton, Typography } from "@mui/material";

const BotLoading = () => {
  return (
    <Box sx={styles.root}>
      <Skeleton variant="rectangular" animation="wave" sx={styles.image} />
      <Box sx={styles.content}>
        <Typography variant="h6">
          <Skeleton width={80} animation="wave" />
        </Typography>
        <Typography>
          <Skeleton width={120} animation="wave" />
        </Typography>
        <Box sx={styles.buttons}>
          {[1, 2, 3].map((button) => (
            <Button key={button} disabled>
              <Skeleton width={40} />
            </Button>
          ))}
        </Box>
        <Typography>
          <Skeleton width={120} animation="wave" />
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  root: {
    overflow: "hidden",
    mt: 4,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 1,
  },
  image: {
    height: 220,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 4,
  },
  buttons: { display: "flex", gap: 2, justifyContent: "center" },
};

export default BotLoading;
