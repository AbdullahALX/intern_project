import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import test from '../assets/test.svg';
import { motion as m } from 'framer-motion';
import { frame } from 'framer-motion';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

import { scalePointsToPixels } from '../controllers/scalePointsToPixels';
import {
  handlePositions,
  cleanPlayerList,
  playerList,
} from '../controllers/handleData';

import Test2 from '../components/Test2';

const Test = () => {
  const [awayPlayerList, setAwayPlayerList] = useState({});
  const [homePlayerList, setHomePlayerList] = useState({});
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [currentPos, setCurrentPos] = useState({});

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
  const [runsType, setRunsType] = useState([
    {
      run: 'Overlapping Run',
    },
    {
      run: 'Through Ball Run',
    },
    {
      run: 'Diagonal Run',
    },
    {
      run: 'Tracking Back Run',
    },
  ]);
  const [inputValue, setInputValue] = useState();

  const actualWidth = 68.68302154541016; // meters
  const actualLength = 109.908447265625; // meters
  const currentWidthPx = 800; // pixels
  const currentLengthPx = 600; // pixels

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
      awayPlayerList?.[`${currentPos}`]?.[0]?.runs[count]?.prev_x,
      awayPlayerList?.[`${currentPos}`]?.[0]?.runs[count]?.prev_y,
      awayPlayerList?.[`${currentPos}`]?.[0]?.runs[count]?.current_x,
      awayPlayerList?.[`${currentPos}`]?.[0]?.runs[count]?.current_y
    );
  };

  const handlePos = (prevX, prevY, curX, CurY) => {
    console.log(currentPos);
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

  const handleAddbutton = ({ awayPlayer }) => {
    if (inputValue) setRunsType([...runsType, { run: `${inputValue}` }]);

    setInputValue('');
    console.log(awayPlayer);
  };

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const Dropdown = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative flex flex-col items-center  rounded-lg">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center font-mono justify-center px-8 py-1 text-base font-medium text-centerbg-gray-200 active:bg-[#6a4094] border-[1px] border-[#6a4094] active:text-gray-100 rounded-full  text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200  cursor-pointer"
        >
          Player{' '}
          {!isOpen ? (
            <AiFillCaretDown className="ml-2 mt-1 h-8" />
          ) : (
            <AiFillCaretUp className=" ml-2 mt-1 h-8" />
          )}
        </button>

        {isOpen && (
          <div className="bg-[#8e5ebd] px-7 py-3 h-[11rem]  overflow-y-auto absolute top-[55px] flex flex-col items-start rounded rounder-t-full ">
            {playerList.map((item, i) => (
              <button
                className="flex w-full px-7 py-2   my-1  justify-between hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded "
                key={i}
                onClick={() => setCurrentPos(item.pos)}
              >
                <h3 className=" text-white font-mono">
                  {item.pos.toLocaleUpperCase()}
                </h3>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className=" w-screen h-screen flex  flex-col items-center  justify-start  bg-slate-100    ">
      <div className=" mx-10 my-3 py-2 px-10 z-10   ">
        <Dropdown />

        <ul className="w-full text-xs   sm:text-sm justify-center lg:justify-center items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
          {runsType?.map((type, i) => {
            return (
              <li>
                <button className="px-4 py-2 bg-gray-200 focus:bg-[#6a4094] focus:text-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200">
                  {type.run}
                </button>
              </li>
            );
          })}
          <input
            className="px-4 py-2 bg-gray-200 focus:bg-[#3a3a3a] focus:text-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#454545] hover:text-gray-200 outline-none"
            placeholder="Create new category "
            value={inputValue}
            onChange={onChangeHandler}
          />
          <button
            className="px-4 py-2 bg-gray-200  rounded-full text-sm text-gray-700 hover:bg-[#66c361] hover:text-gray-200"
            onClick={handleAddbutton}
          >
            +
          </button>
        </ul>
      </div>
      <m.div
        className={`w-[1000px]  h-[800px] relative mb-[60px]  rounded-md `}
        style={{
          background: `url(${test})`,
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {!isNaN(prevScaledCoordinates.x) && !isNaN(curScaledCoordinates.y) ? (
          <m.div
            className="bg-black  rounded-full border-2 flex p-4 w-4 h-3  "
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

        <div className="flex-row flex absolute bottom-2  right-10   ">
          <button
            className="px-5 py-3 bg-gray-200 active:bg-[#6a4094] font-semibold active:text-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200"
            onClick={handleTest}
          >
            move
          </button>

          <button
            className=" mx-5 px-5 py-3 bg-gray-200 font-semibold  active:bg-[#6a4094] active:text-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200"
            onClick={() => setClicked(!clicked)}
          >
            repeat
          </button>
        </div>
      </m.div>
    </div>
  );
};

export default Test;
