import React, { useState } from 'react';

import SoccerLineUp from 'react-soccer-lineup';
import { Link } from 'react-router-dom';

import orl from '../assets/orlLogo.png';
import chi from '../assets/chiLogo.png';

const Visualize = () => {
  const [showModal, setShowModal] = useState(false);

  const ShowModal = () => {
    let homeTeam = {
      style: {
        color: '#61269e',
        numberColor: '#ffffff',
        nameColor: '#ffffff',
      },

      squad: {
        cam: [
          { name: 'Hicham' },
          { player: { number: 8 } },
          { player: { number: 6 } },
          { player: { number: 10 } },
        ],
        df: [{ number: 2 }, { number: 4 }, { number: 5 }, { number: 3 }],
        fw: [{ number: 9 }, { number: 11 }],
        gk: { number: 1 },
      },
    };

    let awayTeam = {
      //chi
      style: {
        color: '#ffffff',
        numberColor: '#0f1921',
        nameColor: '#0f1921',
      },

      squad: {
        cam: [{ number: 7 }, { number: 8 }, { number: 6 }, { number: 10 }],
        df: [
          { number: 2, name: 'Hicham' },
          { number: 4 },
          { number: 5 },
          { number: 3 },
        ],
        fw: [{ number: 9 }, { number: 11 }],
        gk: { number: 1 },
      },
    };
    return (
      <>
        {showModal ? (
          <>
            <div className="flex bg-gray-700/50 justify-center  font-mono items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative  my-6 mx-auto ">
                <div className="border-0 rounded-md shadow-lg w-[1000px] h-[600px]  relative flex flex-col  bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 rounded-t ">
                    <button
                      class="text-gray-400 absolute cursor-pointer top-5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="relative   ">
                    <div className=" w-[90%] absolute  left-0 right-0 ml-auto mr-auto  ">
                      <SoccerLineUp
                        color={'#00a800'}
                        pattern={'lines'}
                        size={'responsive'}
                        awayTeam={awayTeam}
                        homeTeam={homeTeam}
                      />
                    </div>
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
    <div className="w-screen h-screen flex items-center  flex-col bg-[#f3f4f7] p-10 ">
      <div className=" w-[80%] h-[8rem] bg-[#8e5ebd] mt-10 rounded-sm p-10 items-center  flex shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h1 className="text-2xl tracking-wide text-white font-Montserrat ">
          {' '}
          Lastest Matches
        </h1>
      </div>

      <div className="block rounded-lg w-[80%] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <div className="p-6">
          <div className=" flex flex-row  w-full items-center justify-center ">
            <img
              src={orl}
              className="logo w-[3rem] object-contain md:w-[6rem] ml-10 "
              alt=""
            />
            <p className="mx-6 "> ORL</p>
            <h1 className=" h-full text-xl font-semibold"> vs</h1>

            <p className="mx-6"> CHI</p>
            <img
              src={chi}
              className="logo w-[3rem] object-contain md:w-[6rem] mr-10 "
              alt=""
            />
            <div className="flex flex-row items-center mx-10 gap-3 ">
              <p className="text-[#b2b2b2] font-light">1</p>
              <p className="text-[#b2b2b2] font-light">:</p>
              <p className="text-[#b2b2b2] font-light">0</p>
            </div>

            <div className="w-full flex flex-row items-center gap-3 mx-5">
              <svg
                class="w-8 h-8 "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 8V12L15 15"
                    stroke="#b2b2b2"
                    stroke-width="0.72"
                    stroke-linecap="round"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#b2b2b2"
                    stroke-width="0.72"
                  ></circle>
                </g>
              </svg>
              <p className="text-[#b2b2b2] font-light">5:00 PM</p>
            </div>
            <div className="w-full flex flex-row items-center gap-3 mx-5">
              <svg
                class="w-7 h-7 "
                viewBox="-5.4 0 98.4 98.4"
                xmlns="http://www.w3.org/2000/svg"
                fill="#b2b2b2"
                stroke="#b2b2b2"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g
                    id="Group_4"
                    data-name="Group 4"
                    transform="translate(-822.7 -241.5)"
                  >
                    {' '}
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M899.4,254.3H833.6a8.92,8.92,0,0,0-8.9,8.9V329a8.92,8.92,0,0,0,8.9,8.9h65.8a8.92,8.92,0,0,0,8.9-8.9V263.2A8.92,8.92,0,0,0,899.4,254.3Z"
                      fill="none"
                      stroke="$#b2b2b2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="3.0504000000000002"
                    ></path>{' '}
                    <line
                      id="Line_25"
                      data-name="Line 25"
                      x2="21.2"
                      transform="translate(842.6 283.7)"
                      fill="none"
                      stroke="$#b2b2b2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="3.0504000000000002"
                    ></line>{' '}
                    <line
                      id="Line_26"
                      data-name="Line 26"
                      x2="45.9"
                      transform="translate(842.6 302)"
                      fill="none"
                      stroke="$#b2b2b2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="3.0504000000000002"
                    ></line>{' '}
                    <line
                      id="Line_27"
                      data-name="Line 27"
                      y2="19.6"
                      transform="translate(853.6 243.5)"
                      fill="none"
                      stroke="$#b2b2b2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="3.0504000000000002"
                    ></line>{' '}
                    <line
                      id="Line_28"
                      data-name="Line 28"
                      y2="19.6"
                      transform="translate(879.4 243.5)"
                      fill="none"
                      stroke="$#b2b2b2"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="3.0504000000000002"
                    ></line>{' '}
                  </g>{' '}
                </g>
              </svg>
              <p className="text-[#b2b2b2] font-light"> 4-10-2022 </p>
            </div>
            <button
              onClick={() => setShowModal(!showModal)}
              className=" w-full flex  items-center justify-center cursor-pointer text-[#b2b2b2] hover:text-[#2e8a05] "
            >
              View line up
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ShowModal />
    </div>
  );
};

export default Visualize;
