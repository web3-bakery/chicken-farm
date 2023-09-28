import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Leaderboard = ({ leaderboard }: any) => {
  return (
    <>
      <Typography variant="h6" component="div">
        Leaderboard
      </Typography>
      <List>
        {leaderboard && leaderboard.length > 0 && leaderboard.map((player: any, index: number) => (
          <ListItem key={index}>
            <ListItemText
              primary={`#${index + 1}. ${player?.user}`}
              secondary={`Points: ${player?.points}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Leaderboard;
