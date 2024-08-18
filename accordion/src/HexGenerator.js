import React, { useState } from "react";
function HexGenerator() {
  const [bgColor, setBgColor] = useState("black");
  const hexGenerator = () => {
    let value = "ABCDEF";
    let hexCode = "#";

    let numbers = "0123456789";

    value = value.concat(numbers);
    for (let i = 0; i < 6; i++) {
      hexCode = hexCode.concat(value[Math.floor(Math.random() * value.length)]);
    }

    setBgColor(hexCode);
  };

//   const rgbGenerator=()=>{
// let r=Math.floor(Math.random()*256);
// let g=Math.floor(Math.random()*256);
// let b=Math.floor(Math.random()*256);
// setBgColor(`rgb(${r},${g},${b})`)
//   }
const rgbGenerator=()=>{

    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let color=`rgb(${r},${g},${b})`
 setBgColor(color)
    // console.log(color)
}
  return (
    <div style={{
        backgroundColor: bgColor,
    }} className="h-screen w-screen">
      <button
        onClick={() => {
          hexGenerator();
        }}
      className="bg-white"
     >
        Generate Hex Code
      </button>
      <br />
      <br />
      <button onClick={
        
        rgbGenerator
      }  className="bg-white rounded-md" >Generate RGB code</button>
    </div>
  );
}

export default HexGenerator;
