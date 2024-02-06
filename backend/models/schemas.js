import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const period_data = new Schema({
  number: { type: Number },
  startFrameClock: { type: Number },
  endFrameClock: { type: Number },
  startFrameIdx: { type: Number },
  endFrameIdx: { type: Number },
  homeAttPositive: { type: Boolean },
});

const matchData = new Schema({
  description: { type: String },
  startTime: { type: Number },
  pitchLength: { type: Number },
  pitchWidth: { type: Number },
  numOfPeriods: { type: Number },
  homeScore: { type: Number },
  awayScore: { type: Number },
  periods: [period_data],
});

const runs = new Schema({
  current_x: { type: Number },
  current_y: { type: Number },
  prev_x: { type: Number },
  prev_y: { type: Number },
  distance: { type: Number },
  start_frame: { type: Number },
  end_frame: { type: Number },
});

const player = new Schema({
  name: { type: String },
  number: { type: Number },
  position: { type: String },
  optaId: { type: Number },
  runs: [runs],
});

const homePlayers = new Schema({
  name: { type: String },
  number: { type: Number },
  position: { type: String },
  optaId: { type: Number },
  runs: [runs],
});

const awayPlayers = new Schema({
  name: { type: String },
  number: { type: Number },
  position: { type: String },
  optaId: { type: Number },
  runs: [runs],
});

const runsDataSchema = new mongoose.Schema({
  current_x: { type: Number },
  current_y: { type: Number },
  distance: { type: Number },
  end_frame: { type: Number },
  prev_x: { type: Number },
  prev_y: { type: Number },
});

const resultsSchema = new mongoose.Schema({
  team: { type: String },
  runType: { type: String },
  playerPos: { type: String },
  playerNumber: { type: String },
  playerName: { type: String },
  runsData: runsDataSchema,
});

const MatchData = mongoose.model('MatchData', matchData, 'matchData');
const HomePlayers = mongoose.model('HomePlayers', homePlayers, 'HomePlayers');
const AwayPlayers = mongoose.model('AwayPlayers', awayPlayers, 'AwayPlayers');

const AwayDataRes = mongoose.model('AwayDataRes', resultsSchema, 'AwayDataRes');
const HomeDataRes = mongoose.model('HomeDataRes', resultsSchema, 'HomeDataRes');

const mySchemas = {
  MatchData: MatchData,
  HomePlayers: HomePlayers,
  AwayPlayers: AwayPlayers,
  AwayDataRes: AwayDataRes,
  HomeDataRes: HomeDataRes,
};

export default mySchemas;
