import React, { useState } from 'react';

import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

const importantSoccerRuns = [
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

const Test2 = ({}) => {
  return (
    <div>
      <ul className="w-full text-xs   sm:text-sm justify-center lg:justify-center items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
        {importantSoccerRuns?.map((type, i) => {
          return (
            <li>
              <button className="px-4 py-2 bg-gray-200 focus:bg-[#6a4094] focus:text-gray-100 rounded-full text-sm text-gray-700 hover:bg-[#8e5ebd] hover:text-gray-200">
                {type.run}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Test2;
