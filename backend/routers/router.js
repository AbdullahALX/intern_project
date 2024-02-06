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

router.get('/getPlayers', async (req, res) => {
  const playersHomeInfo = schemas.HomePlayers;
  const AwayPlayersInfo = schemas.AwayPlayers;

  const homeList = await playersHomeInfo.find({});
  const awayList = await AwayPlayersInfo.find({});
  if (homeList && awayList) {
    // console.log(homeList);
    res.json({
      playersHomeInfo: homeList,
      AwayPlayersInfo: awayList,
    });
  } else {
    res.status(400).send('no data');
  }
});

router.get('/getMatch', async (req, res) => {
  const matchInfo = schemas.MatchData;

  const matchList = await matchInfo.find({});
  if (matchList) {
    // console.log(matchList);
    res.json({
      matchInfo: matchList,
    });
  } else {
    res.status(400).send('no data for match');
  }
});

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

const saveRes = (homeDataArray, awayDataArray) => {
  if (homeDataArray.length <= 1) return;

  homeDataArray.forEach((data) => {
    const result = new schemas.HomeDataRes({
      team: data.team,
      runType: data.runType,
      playerPos: data.playerPos,
      playerName: data.playerName,
      runsData: {
        current_x: data.runsData.current_x,
        current_y: data.runsData.current_y,
        distance: data.runsData.distance,
        end_frame: data.runsData.end_frame,
        prev_x: data.runsData.prev_x,
        prev_y: data.runsData.prev_y,
      },
    });

    // Save the Mongoose model instance to the database
    result.save();
  });
  if (awayDataArray.length <= 1) return;
  awayDataArray.forEach((data) => {
    const awayResult = new schemas.AwayDataRes({
      team: data.team,
      runType: data.runType,
      playerPos: data.playerPos,
      playerName: data.playerName,
      runsData: {
        current_x: data.runsData.current_x,
        current_y: data.runsData.current_y,
        distance: data.runsData.distance,
        end_frame: data.runsData.end_frame,
        prev_x: data.runsData.prev_x,
        prev_y: data.runsData.prev_y,
      },
    });

    // Save the Mongoose model instance to the database
    awayResult.save();
  });
};

const cleanSchema = () => {
  schemas.AwayDataRes.deleteMany();
};

router.post('/addRes', async (req, res) => {
  // const jsonObject = JSON.parse(data);
  let receivedData = req.body;
  if (isNaN(receivedData.homeData[0].length)) receivedData.homeData.shift();
  if (isNaN(receivedData.awayData[0].length)) receivedData.awayData.shift();

  console.log(receivedData.awayData.length);

  //console.log(receivedData);

  saveRes(receivedData.homeData, receivedData.awayData);

  // const newHomeRes = new schemas.HomeDataRes(receivedData.homeData[1]);
  // const saveHomeRes = newHomeRes.save();
  res.status(200).send('done!');

  // addUser(data);
});

export default router;
