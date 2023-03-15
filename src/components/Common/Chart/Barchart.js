import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Barchart() {
  const UserData = [
    {
      id: 1,
      weekday: "Mon",
      currentWeek: 1823,
      lastWeek: 1877,
    },
    {
      id: 2,
      weekday: "Tue",
      currentWeek: 1345,
      lastWeek: 1253,
    },
    {
      id: 3,
      weekday: "Wed",
      currentWeek: 2555,
      lastWeek: 2222,
    },
    {
      id: 4,
      weekday: "Thu",
      currentWeek: 2555,
      lastWeek: 2421,
    },
    {
      id: 5,
      weekday: "Fri",
      currentWeek: 3234,
      lastWeek: 1900,
    },
    {
      id: 6,
      weekday: "Sat",
      currentWeek: 3823,
      lastWeek: 2999,
    },
    {
      id: 7,
      weekday: "Sun",
      currentWeek: 3345,
      lastWeek: 3400,
    },
  ];

  const [studentsData, setStudentsData] = useState({
    labels: UserData.map((i) => i.weekday),
    datasets: [
      {
        label: "Current Week",
        data: UserData.map((i) => i.currentWeek),
        backgroundColor: ['#FB7D5B'],
      },
      {
        label: "Last Week",
        data: UserData.map((i) => i.lastWeek),
        backgroundColor: ['#FCC43E'],
      },
    ],
  });
  return (
    <div style={{width:'70vh'}}>
      <Bar data={studentsData} />
    </div>
  );
}
