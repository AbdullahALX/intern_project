import React from 'react';
import logo from '../assets/logo.png';
import img1 from '../assets/LandingLeft.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="bg-[#ffffff] h-screen w-screen  overflow-hidden ">
      <div className="flex flex-col items-center">
        <div className=" w-full h-16 max-w-[1490px] items-center flex justify-between mx-auto px-10 pt-10 ">
          <img
            src={logo}
            alt="logo"
            className="logo w-[8rem] object-contain md:w-[14rem] cursor-pointer"
          />
        </div>
      </div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl md:mb-8 mb-3 text-2xl  tracking-tight leading-none md:text-4xl xl:text-6xl font-Montserrat font-bold ">
            Unlock the Power of Soccer Analytics
          </h1>
          <p class="max-w-2xl mb-6 text-gray-800 lg:mb-8 md:text-xl lg:text-2xl text-pretty lg:leading-10 font-[300] font-Roboto ">
            Visualize runs, create categories using{' '}
            <span className="text-[#61269e] font-bold md:text-2xl text-lg ">
              MatchMatrix
            </span>{' '}
            and elevate in soccer strategy effortlessly. Join us today and
            experience the future of soccer analytics
          </p>
          <Link
            to="/addUser"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-[#61269e]  hover:bg-[#8e5ebd] text-white border-b-4 border-[#8e5ebd] hover:border-[#61269e] rounded  cursor-pointer"
          >
            Get started
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
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
          <img src={img1} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
