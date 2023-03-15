import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Linechart() {
  const UserData = [
    {
      id: 1,
      month: "Jan",
      currentYear: 80,
      lastYear: 60,
    },
    {
      id: 2,
      month: "Feb",
      currentYear: 72,
      lastYear: 68,
    },
    {
      id: 3,
      month: "Mar",
      currentYear: 78,
      lastYear: 72,
    },
    {
      id: 4,
      month: "April",
      currentYear: 65,
      lastYear: 66,
    },
    {
      id: 5,
      month: "May",
      currentYear: 88,
      lastYear: 76,
    },
    {
      id: 6,
      month: "Jun",
      currentYear: 90,
      lastYear: 80,
    },
    {
      id: 7,
      month: "July",
      currentYear: 75,
      lastYear: 69,
    },
    {
      id: 8,
      month: "Aug",
      currentYear: 79,
      lastYear: 73,
    },
    {
      id: 9,
      month: "Sep",
      currentYear: 91,
      lastYear: 81,
    },
    {
      id: 10,
      month: "Oct",
      currentYear: 60,
      lastYear: 70,
    },
    {
      id: 11,
      month: "Nov",
      currentYear: 80,
      lastYear: 74,
    },
    {
      id: 12,
      month: "Dec",
      currentYear: 85,
      lastYear: 76,
    },
  ];

  const [studentsData, setStudentsData] = useState({
    labels: UserData.map((i) => i.month),
    datasets: [
      {
        label: "This Year",
        data: UserData.map((i) => i.currentYear),
      },
      {
        label: "Last year",
        data: UserData.map((i) => i.lastYear),
      },
    ],
  });
  return (
    <div>
      <Line data={studentsData} />
    </div>
  );
}
