import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "Suppliers A",
      price: 4000,
      sells: 2400,
      amount: 2400,
    },
    {
      name: "Suppliers B",
      price: 3000,
      sells: 1398,
      amount: 2210,
    },
    {
      name: "Suppliers C",
      price: 2000,
      sells: 9800,
      amount: 2290,
    },
    {
      name: "Suppliers D",
      price: 2780,
      sells: 3908,
      amount: 2000,
    },
    {
      name: "Suppliers E",
      price: 1890,
      sells: 4800,
      amount: 2181,
    },
    {
      name: "Suppliers F",
      price: 2390,
      sells: 3800,
      amount: 2500,
    },
    {
      name: "Suppliers G",
      price: 3490,
      sells: 4300,
      amount: 2100,
    },
  ];
  return (
    <LineChart height={400} width={800} data={data}>
      <Line dataKey={"price"}></Line>
      <Line dataKey={"sells"}  ></Line>
      <XAxis dataKey={"name"}></XAxis>
      <YAxis  ></YAxis>
      <Tooltip />
    </LineChart>
  );
};

export default MyLineChart;
