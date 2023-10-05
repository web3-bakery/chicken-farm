import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import Link from "next/link";
import moment from "moment";
import "moment-duration-format";
import EggHatcher from "./EggHatcher";
import EggMinter from "./EggMinter";

interface ChickenListItemProps {
  chicken: {
    tokenId: number;
    isAlive: boolean;
    nextEggMintedTime: number;
  };
  onMintEgg: () => void;
  onHatchEgg: () => void;
  provider: any;
}

const ChickenListItem: React.FC<ChickenListItemProps> = ({
  chicken,
  onMintEgg,
  onHatchEgg,
  provider,
}) => {
  const actionTime = moment(chicken.nextEggMintedTime).diff(moment().unix());
  const formattedTime = moment
    .duration(actionTime * 1000)
    .format("h [hrs], m [min], s [secs]");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 1.5,
        width: "200px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        bgcolor: "#2E2E2E",
      }}
    >
      <Link href={`/chickens/${chicken.tokenId}`}>
        <Typography sx={{ fontSize: 40, cursor: "pointer" }}>{"🐔"}</Typography>
      </Link>
      <Typography fontWeight="bold" variant="subtitle1">
        Chicken #{chicken.tokenId}
      </Typography>
      {chicken.isAlive ? (
        <Chip
          size="small"
          label="Alive"
          color="success"
          sx={{ fontWeight: "bold" }}
        />
      ) : (
        <Chip
          size="small"
          label="Dead"
          sx={{ fontWeight: "bold" }}
          color="error"
        />
      )}
      {chicken.isAlive && actionTime > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="caption">Next action ready in</Typography>
          <Typography variant="h6">{formattedTime}</Typography>
        </Box>
      ) : (
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <EggMinter chicken={chicken} onMintEgg={onMintEgg} />
          <EggHatcher
            chicken={chicken}
            provider={provider}
            onHatchEgg={onHatchEgg}
          />
        </Box>
      )}
    </Box>
  );
};

export default ChickenListItem;
