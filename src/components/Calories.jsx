import React from "react";
import { LineChart, Line, Tooltip, YAxis } from "recharts";

const Calories = () => {
  const data = [
    { uv: 1848 },
    { uv: 1500 },
    { uv: 1600 },
    { uv: 2000 },
    { uv: 2200 },
    { uv: 1700 },
    { uv: 2000 },
  ];

  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white text-xs px-2 py-1 rounded-md">
          {payload[0].value} cal
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[100%] w-[50%] bg-[#ffffff] flex p-5 relative rounded-2xl cursor-pointer flex-col overflow-hidden">
      <div>
        <h1 className="text-xl">Calories Burnt</h1>
      </div>
      <div className="h-full w-full flex flex-col sm:flex-row  items-center gap-2">
        <LineChart width={80} height={50} data={data}>
          <YAxis domain={[1500, 2200]} hide />{" "}
          {/* Adjust Y-Axis to control up-down range */}
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="uv" stroke="#000" dot={true} />
        </LineChart>
        <h1 className="bg-white p-2 h-10 w-full sm:w-12 rounded-2xl text-md text-center leading-3 flex flex-row sm:flex-col items-center justify-center">
          1899{" "}
          <span className="text-xs ml-0.5 mt-0.5 sm:ml-2 sm:mt-0">cal</span>
        </h1>
      </div>
    </div>
  );
};

export default Calories;
