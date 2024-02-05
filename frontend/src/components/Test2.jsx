import React, { useEffect, useState } from 'react';

const Test2 = ({}) => {
  const [runsType, setRunsType] = useState([
    {
      run: 'Dribbling',
    },
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

  const handleAddbutton = ({ awayPlayer }) => {
    if (inputValue) setRunsType([...runsType, { run: `${inputValue}` }]);

    setInputValue('');
    console.log(awayPlayer);
  };

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
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
  );
};
export default Test2;
