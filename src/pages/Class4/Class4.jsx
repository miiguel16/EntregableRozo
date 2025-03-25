import React, { useState } from "react";
import { ItemTitle } from "../../components/ItemTitles/ItemTitle";

export const Class4 = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      const interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      localStorage.setItem("intervalId", interval);
    } else {
      clearInterval(localStorage.getItem("intervalId"));
      localStorage.removeItem("intervalId");
      setCounter(0);
      setIsRunning(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 bg-gray-500">
      <ItemTitle styles="text-2xl font-bold text-white m-xl" content={`Contador: ${counter}`} />
      <button className="p-4 bg-black text-white rounded-lg" onClick={handleClick}>
        {isRunning ? "Parar conteo" : "Comenzar conteo"}
      </button>
    </div>
  );
};
