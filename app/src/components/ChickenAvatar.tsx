import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import React from "react";

interface Props {
  level: number;
}

const ChickenAvatar = (props: Props) => {
  const { level } = props;
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        position: "relative",
      }}
    >
      <Avatar
        sx={{
          width: "inherit",
          height: "inherit",
          fontSize: 60,
          bgcolor: "rgba(0,0,0,0.5)",
        }}
      >
        🐔
      </Avatar>
      <Box
        sx={{
          fontSize: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "common.white",
          color: "background.paper",
          fontWeight: "bold",
          borderRadius: "50%",
          height: 32,
          width: 32,
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      >
        <Tooltip title="Level">
          <div>{level}</div>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ChickenAvatar;
