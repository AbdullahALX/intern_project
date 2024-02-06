import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import {
  AiFillCaretUp,
  AiFillCaretDown,
  AiFillCaretRight,
} from 'react-icons/ai';
import Charts from '../components/Charts';

const Show = () => {
  const url = 'http://localhost:3001';

  const [homeRes, setHomeRes] = useState();
  const [awayRes, setAwayRes] = useState();

  const [currentTeam, setCurrentTeam] = useState();
  const [currentType, setCurrentType] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = () => {
    axios
      .get(`${url}/getRes`)
      .then((response) => {
        setHomeRes(response.data.homeData);
        setAwayRes(response.data.awayData);

        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleHome = () => {
    navigate('/');
  };

  const SingleCard = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const { playerName, playerPos, playerNumber, runType, runsData } = data;

    const ShowModal = ({}) => {
      return (
        <>
          {showModal ? (
            <>
              <div className="flex bg-gray-700/50 justify-center font-mono items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-md shadow-lg w-[500px] h-[500px] relative flex flex-col bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                      <h3 className="text-3xl font-bold uppercase">Run Data</h3>
                      <button
                        className="text-gray-400 absolute cursor-pointer top-5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={() => setShowModal(false)}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="relative p-6 flex-auto h-full">
                      <ul className="max-w-md space-y-4 text-gray-500 list-inside dark:text-gray-400">
                        <li className="flex items-center">
                          <span className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </span>
                          <span>{`current_x: ${runsData.current_x}`}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </span>
                          <span>{`current_y: ${runsData.current_y}`}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </span>
                          <span>{`prev_x: ${runsData.prev_x}`}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </span>
                          <span>{`prev_y: ${runsData.prev_y}`}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </span>
                          <span>{`distance: ${runsData.distance}`}</span>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                          </span>
                          <span>{`end_frame: ${runsData.end_frame}`}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>
      );
    };

    return (
      <div className="h-auto max-w-full rounded-lg ">
        <div
          className="flex flex-col h-[270px] w-[350px] cursor-pointer px-6 py-10 overflow-hidden bg-transparent border-[1px] border-[#7b73f2]  hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <div className="flex  flex-row justify-between items-center">
            <div className="inline-flex text-sm  text-gray-600 group-hover:text-gray-200 sm:text-base font-mono">
              {playerNumber} {playerPos}
            </div>
          </div>
          <h1 className="text-3xl  line-clamp-1  sm:text-4xl xl:text-4xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
            {runType}
          </h1>
          <div className="flex flex-row  justify-between group-hover:text-gray-200">
            <p> {playerName}</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-600 group-hover:text-gray-200 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <ShowModal />
      </div>
    );
  };

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
            <button
              className="flex  px-7 py-2   my-1  justify-between w-full  hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded "
              onClick={() => setCurrentTeam('away')}
            >
              <h3 className=" text-white font-mono ">Away</h3>
            </button>

            <button
              className="flex w-full px-7 py-2   my-1  justify-between hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded "
              onClick={() => setCurrentTeam('home')}
            >
              <h3 className=" text-white font-mono">Home</h3>
            </button>
          </div>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center font-mono justify-center px-8 py-1 text-base font-medium text-centerbg-gray-200 active:bg-[#6a4094] border-[1px] border-[#6a4094] active:text-gray-100 rounded-full  text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200  cursor-pointer"
        >
          Type{' '}
          {!isOpen ? (
            <AiFillCaretDown className="ml-2 mt-1 h-8" />
          ) : (
            <AiFillCaretUp className=" ml-2 mt-1 h-8" />
          )}
        </button>

        {isOpen && (
          <div className="bg-[#8e5ebd] px-7 py-3 h-[7rem] w-[10rem]  overflow-y-auto absolute   top-[55px] flex flex-col items-start rounded rounder-t-full ">
            <button
              className="flex  px-7 py-2   my-1  justify-between w-full  hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded "
              onClick={() => setCurrentType('cards')}
            >
              <h3 className=" text-white font-mono ">Cards</h3>
            </button>

            <button
              className="flex w-full px-7 py-2   my-1  justify-between hover:bg-[#c4abdc]  active:bg-[#d2bee4]  cursor-pointer  rounded "
              onClick={() => setCurrentType('chart')}
            >
              <h3 className=" text-white font-mono">Chart</h3>
            </button>
          </div>
        )}
        <button
          onClick={handleHome}
          className="inline-flex items-center font-mono justify-center px-8 py-1 text-base font-medium text-centerbg-gray-200 active:bg-[#6a4094] border-[1px] border-[#6a4094] active:text-gray-100 rounded-full  text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200  cursor-pointer"
        >
          Home <AiFillCaretRight className="ml-2 mt-1 h-8" />
        </button>
      </div>
    );
  };

  const Row = ({ data }) => {
    return (
      <>
        {data?.map((type, i) => (
          <SingleCard key={i} data={type} />
        ))}
      </>
    );
  };

  return (
    <section className="bg-[#ffffff]   flex flex-col m-10 items-center justify-start overflow-hidden   ">
      <Dropdown />
      <div className=" w-full  flex flex-col h-full  text-center items-center overflow-hidden  m-10">
        <h1 className="max-w-4xl  mb-3 text-2xl h-full font-mono h tracking-wide leading-none md:text-4xl xl:text-5xl  font-semibold ">
          Retrieve the player statistics
        </h1>
      </div>
      <div
        className={`grid grid-cols-2 ${
          currentType === 'cards'
            ? 'md:grid-cols-3 overflow-auto'
            : 'md:grid-cols-2 overflow-hidden'
        }  gap-4  mt-5`}
      >
        {currentType === 'cards' ? (
          <Row data={currentTeam === 'home' ? homeRes : awayRes} />
        ) : (
          <Charts data={currentTeam === 'home' ? homeRes : awayRes} />
        )}
      </div>
    </section>
  );
};

export default Show;
