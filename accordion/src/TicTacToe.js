import React, { useState } from "react";

function Box({ val }) {
  return <div>{val} </div>;
}

export default function TicTacToe() {
  const [value, SetInnerValue] = useState("");

  function InnerValue() {
    value == "X" ? SetInnerValue("O") : SetInnerValue("X");
  }

  const [count, setCount] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [click, setClick] = useState(false);
  return (
    <div className="wrapper flex flex-col ">
      <div className="row flex flex-row ">
        <div
          className="border-black border-2 border-solid w-20 h-20 text-6xl flex justify-center items-center "
          onClick={() => {
            if (count[0] >= 1) {
              return;
            }
       
            InnerValue();
            setCount((prev) => {
              console.log(prev);
              prev[0] = 1;
              return [...prev];
            });
          }}
        >
          <Box val={value} />
        </div>

        <div
          className="border-black border-2 border-solid w-20 h-20 text-6xl flex justify-center items-center "
          onClick={() => {
            if (count[1] >= 1) {
              return;
            }
       
            InnerValue();
            setCount((prev) => {
              console.log(prev);
              prev[1] = 1;
              return [...prev];
            });
          }}
        >
          <Box val={value} />
        </div>
        <div
          className="border-black border-2 border-solid w-20 h-20 text-6xl flex justify-center items-center "
          onClick={() => {
            if (count[2] >= 1) {
              return;
            }
       
            InnerValue();
            setCount((prev) => {
              console.log(prev);
              prev[2] = 1;
              return [...prev];
            });
          }}
        >
          <Box val={value} />
        </div>
      </div>
      <div className="row flex flex-row ">
        <Box className="border-black border-2 border-solid w-20 h-20" />
        <Box className="border-black border-2 border-solid w-20 h-20" />
        <Box className="border-black border-2 border-solid w-20 h-20" />
      </div>
      <div className="row flex flex-row ">
        <Box className="border-black border-2 border-solid w-20 h-20" />
        <Box className="border-black border-2 border-solid w-20 h-20" />
        <Box className="border-black border-2 border-solid w-20 h-20" />
      </div>
    </div>
  );
}
