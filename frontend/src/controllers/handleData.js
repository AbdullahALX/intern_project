export const playerList = [
  { pos: 'cam' },
  { pos: 'lcb' },
  { pos: 'rcb' },
  { pos: 'cam' },
  { pos: 'lcb' },
  { pos: 'rb' },
  { pos: 'st' },
  { pos: 'rw' },
  { pos: 'lw' },
  { pos: 'rdm' },
  { pos: 'ldm' },
  { pos: 'gk' },
];

export const importantSoccerRuns = [
  {
    run: 'Dribbling',
    des: 'A player uses their footwork and ball control skills to maneuver the ball past opponents, advancing down the field.',
  },
  {
    run: 'Overlapping Run',
    des: 'A full-back or wing-back moves forward along the sideline to support the attack, often passing a teammate before receiving the ball back.',
  },
  {
    run: 'Through Ball Run',
    des: "A player makes a forward run behind the opposition's defense to receive a well-timed through ball, attempting to get behind the defensive line.",
  },
  {
    run: 'Diagonal Run',
    des: "A player makes an angled run across the field, either to create space or receive a pass that bypasses the opponent's defensive line.",
  },
  {
    run: 'Tracking Back Run',
    des: 'A player runs back towards their own goal to defend against an opposing player or support the defense.',
  },
];

export const handlePositions = (players) => {
  const positionArrays = {
    cam: [],
    rcb: [],
    gk: [],
    lcb: [],
    rb: [],
    lb: [],
    st: [],
    rw: [],
    lw: [],
    rdm: [],
    ldm: [],
  };

  for (let i = 0; i < players.length; i++) {
    const position = players[i].position.toLowerCase();

    if (positionArrays[position]) {
      positionArrays[position].push(players[i]);
    } else {
      console.log('noneee');
    }
  }

  return positionArrays;
};

export const cleanPlayerList = (players) => {
  let data = [];

  for (let i = 0; i < players.length; i++) {
    if (players[i].position == 'SUB' && players[i].runs < 1) {
      //it is SUB player and never participate in the match , then we ignore him
      continue;
    } else {
      data.push(players[i]);
    }
  }

  return data;
};
