import React from "react";
import useChickenCoopDetail from "../../hooks/useChickenCoopDetail";
import Link from "next/link";

import {
  Skeleton,
  Button,
  CardContent,
  CardActions,
  Card,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
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
      <Link href={`/farm/chicken-coop?id=${tokenId}`}>
        {isLoading ? <Skeleton variant="text" /> : null}

        {isError ? <div>Error</div> : null}

        {data ? (
          <>
            <Card sx={{ maxWidth: 440 }}>
              <CardMedia
                sx={{ height: 220, width: 220 }}
                image="/chicken-coop.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Chicken Coop #{tokenId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {chickenIds.length}/{level * 2}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </>
        ) : null}
      </Link>
    </Box>
  );
};

export default ChickenCoops;
