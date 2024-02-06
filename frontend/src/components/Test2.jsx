import React, { useEffect, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';

const Test2 = ({ data }) => {
  const playerNames = data?.map((item) => item.playerName);
  const distances = data?.map((item) => item.runsData.distance);
  Chart.register(...registerables);

  const barData = {
    labels: playerNames,
    datasets: [
      {
        label: 'Distance Covered',
        data: distances,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Distance (meters)',
        },
      },
    },
  };

  const runTypes = Array.from(new Set(data?.map((item) => item.runType)));
  const runTypeCounts = runTypes.map(
    (runType) => data.filter((item) => item.runType === runType).length
  );

  const donutData = {
    labels: runTypes,
    datasets: [
      {
        data: runTypeCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };
  return (
    <div className="chart-container w-[90%] h-full flex flex-row justify-between gap-10 mx-auto items-center ">
      <Bar data={barData} options={chartOptions} height={300} width={500} />
      <Doughnut data={donutData} height={300} width={500} />
    </div>
  );
};
export default Test2;
