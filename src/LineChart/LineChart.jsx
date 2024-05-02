import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// import { getDate } from "../functions/getdate";

// const date = getDate(" 1714521600000");

// console.log(date);

const LineChart = ({ chartData, priceType, multiAxis }) => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default LineChart;
