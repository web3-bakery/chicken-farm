import React from 'react';
import Grid from '@mui/material/Grid';
import QuestCard from './QuestCard';

const QuestList = ({ quests, onSolve }: any) => {
  return (
    <Grid container spacing={4}>
      {quests && quests.length > 0 && quests.map((quest: any) => (
        <Grid item key={quest.id} xs={12} sm={6} md={4}>
          <QuestCard quest={quest} onSolve={onSolve}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuestList;
