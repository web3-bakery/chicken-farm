import React from "react";
import { Box, Typography, Skeleton } from "@mui/material";
import useChickenCoopDetail from "../../hooks/useChickenCoopDetail";
import Link from "next/link";

interface Props {
  tokenId: number;
}

const ChickenCoops: React.FC<Props> = (props) => {
  const { tokenId } = props;

  const { data, isError, isLoading, refetch } = useChickenCoopDetail(tokenId);
  const { level, lastCollected, chickenIds } = Array.isArray(data)
    ? { level: 0, lastCollected: 0, chickenIds: [] }
    : data || { level: 0, lastCollected: 0, chickenIds: [] };

  return (
    <Box
      onClick={() => {
        console.log("clicked", tokenId);
      }}
    >
      <Link href={`/farm/chicken-coop/${tokenId}`}>
        {isLoading ? <Skeleton variant="text" /> : null}

        {isError ? <div>Error</div> : null}

        {data ? (
          <>
            <Typography variant="h3" color="text.secondary" mt={4}>
              Chicken Coop #{tokenId}
            </Typography>
            <Typography variant="h5" color="text.secondary" mt={0}>
              {chickenIds.length}/{level * 2}
            </Typography>
          </>
        ) : null}
      </Link>
    </Box>
  );
};

export default ChickenCoops;
