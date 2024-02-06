import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.png';
import img1 from '../assets/stat.svg';
import { Link } from 'react-router-dom';

import {
  handlePositions,
  cleanPlayerList,
  playerList,
} from '../controllers/handleData';
import {
  AiFillCaretUp,
  AiFillCaretDown,
  AiFillCaretRight,
} from 'react-icons/ai';

const Show = () => {
  const Dropdown = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTeamOpen, setIsTeamOpen] = useState(false);
    return (
      <div className="relative flex flex-row items-center justify-center gap-[10rem]   rounded-lg">
        <button
          onClick={() => setIsTeamOpen((prev) => !prev)}
          className="inline-flex items-center font-mono justify-center px-8 py-1 text-base font-medium text-centerbg-gray-200 active:bg-[#6a4094] border-[1px] border-[#6a4094] active:text-gray-100 rounded-full  text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200  cursor-pointer"
        >
          Team{' '}
          {!isTeamOpen ? (
            <AiFillCaretDown className="ml-2 mt-1 h-8" />
          ) : (
            <AiFillCaretUp className=" ml-2 mt-1 h-8" />
          )}
        </button>

        {isTeamOpen && (
          <div className="bg-[#8e5ebd] px-7 py-3 h-[7rem] w-[10rem]  overflow-y-auto absolute left-[0rem] right-0  top-[55px] flex flex-col items-start rounded rounder-t-full ">
            <button className="flex  px-7 py-2   my-1  justify-between w-full  hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded ">
              <h3 className=" text-white font-mono ">Away</h3>
            </button>

            <button className="flex w-full px-7 py-2   my-1  justify-between hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded ">
              <h3 className=" text-white font-mono">Home</h3>
            </button>
          </div>
        )}
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
          <div className="bg-[#8e5ebd] px-7 py-3 h-[11rem] w-[10rem] overflow-y-auto absolute -right-3   top-[55px] flex flex-col items-start rounded rounder-t-full ">
            {playerList.map((item, i) => (
              <button
                className="flex w-full px-7 py-2   my-1  justify-between  hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded "
                key={i}
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
    <section className="bg-[#ffffff] h-screen  flex flex-col m-10 items-center overflow-hidden  ">
      <Dropdown />
      <div className=" w-full  h-full flex flex-col text-center items-center  m-10">
        <h1 className="max-w-4xl  mb-3 text-2xl font] tracking-wide leading-none md:text-4xl xl:text-5xl  font-semibold ">
          Retrieve the player statistics
        </h1>
      </div>
      {/* <div className=" lg:mt-0 lg:col-span-5 flex flex-col justify-center items-center gap-[10rem] "></div> */}
    </section>
  );
};

export default Show;
