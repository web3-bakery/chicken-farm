import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ConnectButton } from "../web3/ConnectButton";

interface Props {
  icon: React.ReactNode;
  content: {
    title: string;
    description: string;
    button: string;
  };
}

const CallToAction = (props: Props) => {
  const { icon, content } = props;
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          p: 4,
          position: "relative",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography gutterBottom variant="h4">
            {content.title}
          </Typography>
          <Typography>{content.description}</Typography>

          <ConnectButton color="secondary" sx={{ mt: 3 }} />
        </Box>
        {icon}
      </Box>
    </Box>
  );
};

const styles = {
  root: {
    bgcolor: "primary.main",
    borderRadius: 2,
    boxShadow: 1,
    overflow: "hidden",
    my: 4,
    position: "relative",

    "& svg": {
      maxHeight: 140,
      maxWidth: 140,
    },
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 0.5) 100%)",
  },
};
export default CallToAction;
