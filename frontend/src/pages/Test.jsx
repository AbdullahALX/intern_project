import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import test from '../assets/test.svg';
import { motion as m } from 'framer-motion';
import { frame } from 'framer-motion';

import { scalePointsToPixels } from '../components/scalePointsToPixels';
import { handlePositions, cleanPlayerList } from '../components/handleData';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Test = () => {
  const [awayPlayerList, setAwayPlayerList] = useState({});
  const [homePlayerList, setHomePlayerList] = useState({});
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);

  const { height, width } = useWindowDimensions();

  const [prevScaledCoordinates, setPrevScaledCoordinates] = useState([
    {
      x: 0,
      y: 0,
    },
  ]);
  const [curScaledCoordinates, setCurScaledCoordinates] = useState([
    {
      x: 0,
      y: 0,
    },
  ]);
  const actualWidth = 68.68302154541016; // meters
  const actualLength = 109.908447265625; // meters
  const currentWidthPx = 900; // pixels
  const currentLengthPx = 700; // pixels

  const url = 'http://localhost:3001';

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = () => {
    axios.get(`${url}/getPlayers`).then((response) => {
      let dataLastAway = handlePositions(
        cleanPlayerList(response.data.AwayPlayersInfo)
      );
      setAwayPlayerList(dataLastAway);

      let dataLastHome = handlePositions(
        cleanPlayerList(response.data.playersHomeInfo)
      );
      setHomePlayerList(dataLastHome);
    });
  };

  const handleTest = () => {
    handlePos(
      awayPlayerList?.['st']?.[0]?.runs[count]?.prev_x,
      awayPlayerList?.['st']?.[0]?.runs[count]?.prev_y,
      awayPlayerList?.['st']?.[0]?.runs[count]?.current_x,
      awayPlayerList?.['st']?.[0]?.runs[count]?.current_y
    );
  };

  const handlePos = (prevX, prevY, curX, CurY) => {
    const eprevScaledCoordinates = scalePointsToPixels(
      prevX,
      prevY,
      actualWidth,
      actualLength,
      currentWidthPx,
      currentLengthPx
    );

    const ecurScaledCoordinates = scalePointsToPixels(
      curX,
      CurY,
      actualWidth,
      actualLength,
      currentWidthPx,
      currentLengthPx
    );

    setPrevScaledCoordinates(eprevScaledCoordinates);
    setCurScaledCoordinates(ecurScaledCoordinates);

    console.log(
      `Scaled prev (x, y) coordinates in pixels: (${prevScaledCoordinates.x}, ${prevScaledCoordinates.y}, ${count})`
    );

    console.log(
      `Scaled curren (x, y) coordinates in pixels: (${curScaledCoordinates.x}, ${curScaledCoordinates.y},${count})`
    );

    if (prevScaledCoordinates.x) setCount(count + 1);
  };

  return (
    <div className=" w-screen h-screen  relative  flex  flex-col items-center justify-between    ">
      <m.div
        className={`  w-[1000px]    h-[800px] rounded-md `}
        style={{
          background: `url(${test})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {!isNaN(prevScaledCoordinates.x) && !isNaN(curScaledCoordinates.y) ? (
          <m.div
            className="bg-black  rounded-full border-2 flex p-4 w-4 h-3 z-10 "
            variants={{
              initial: {
                position: 'fixed',
                opacity: 1,
                x: `${prevScaledCoordinates?.x}px`,
                y: `${prevScaledCoordinates?.y}px`,
              },
              animate: {
                position: 'fixed',
                x: `${curScaledCoordinates?.x}px`,
                y: `${curScaledCoordinates?.y}px`,
                scale: 1,
                rotate: 0,
                transition: { type: 'spring', delay: 0.1 },
              },
            }}
            animate={clicked ? 'animate' : 'initial'}
          />
        ) : null}
      </m.div>

      <div className="flex-row flex  ">
        <button
          className="m-10 py-2 px-10 bg-black text-white"
          onClick={handleTest}
        >
          next move
        </button>

        <button
          className="m-10 py-2 px-10 bg-black text-white"
          onClick={() => setClicked(!clicked)}
        >
          repeat
        </button>
      </div>
    </div>
  );
};

export default Test;
