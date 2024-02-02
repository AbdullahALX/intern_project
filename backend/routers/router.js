import express from 'express';
import schemas from '../models/schemas.js';

import data from '../metadata.json' assert { type: 'json' };
import homePlayerDate from '../data/all_home1_players_output.json' assert { type: 'json' };
import awayPlayerDate from '../data/all_away1_players_output.json' assert { type: 'json' };
import fs from 'fs';

const router = express.Router();

const addMatchInfo = () => {
  const newMatch = new schemas.MatchData({
    description: data.description,
    startTime: data.startTime,
    pitchLength: data.pitchLength,
    pitchWidth: data.pitchWidth,
    homeScore: data.homeScore,
    awayScore: data.awayScore,
    numOfPeriods: data.periods.length,
    periods: data.periods,
  });

  const saveMatch = newMatch.save();
};

const addAwayPlayer = () => {
  for (let i = 0; i < data.awayPlayers.length; i++) {
    const newPlayer = new schemas.AwayPlayers({
      name: data.awayPlayers[i].name,
      number: data.awayPlayers[i].number,
      position: data.awayPlayers[i].position,
      optaId: data.awayPlayers[i].optaId,
      runs: awayPlayerDate[`${data.awayPlayers[i].optaId}`].Runs,
    });

    const saveMatch = newPlayer.save();
  }
};

const addHomePlayer = () => {
  for (let i = 0; i < data.homePlayers.length; i++) {
    const newPlayer = new schemas.HomePlayers({
      name: data.homePlayers[i].name,
      number: data.homePlayers[i].number,
      position: data.homePlayers[i].position,
      optaId: data.homePlayers[i].optaId,
      runs: homePlayerDate[`${data.homePlayers[i].optaId}`].Runs,
    });

    const saveMatch = newPlayer.save();
  }
};

const addPlayer = () => {
  addHomePlayer();
  addAwayPlayer();
};

router.get('/addPlayer', async (req, res) => {
  const playersHome = schemas.HomePlayers;

  const playersHomeExist = await playersHome.exists();
  if (playersHomeExist) {
    res.status(400).send('players data were already added');
  } else {
    addPlayer();
    res.status(200).send('all player Added!');
  }
});

// router.get('/test', async (req, res) => {
//   console.log(homePlayerDate[`${data.homePlayers[1].optaId}`]);
//   // console.log(String(`${data.awayPlayers[1].optaId}`));

//   // console.log(awayPlayerDate['427869']);
//   // res.status(200).send(awayPlayerDate['45215'].Runs);
// });

router.get('/addMatch', async (req, res) => {
  const match = schemas.MatchData;
  const matchExist = await match.exists({ description: data.description });
  if (matchExist) {
    res.status(400).send('Match was already added');
  } else {
    addMatchInfo();
    res.status(200).send('Match Added!');
  }
});

export default router;
