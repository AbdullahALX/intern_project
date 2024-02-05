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
