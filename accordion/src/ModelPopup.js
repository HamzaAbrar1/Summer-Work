import React, { useState } from "react";

export default function ModelPopup() {
  const [bg_color, set_bgColor] = useState("yellow");
  const [fromTop, setFromTop] = useState("-top-full");

  const method = () => {
    setFromTop((prev) => (prev == "-top-full" ? "top-10" : "-top-full"));
    set_bgColor((prev) => (prev == "yellow" ? "black" : "yellow"));
  };

  return (
    <div
      className={`relative transition-all h-screen w-screen bg-${bg_color}-700`}
      style={{ transitionDuration: "2s" }} // 2-second transition duration
    >
      <button
        className="bg-red-700 rounded-lg text-white py-4 px-4 mx-4 my-4"
        onClick={() => {
          method();
        }}
      >
        Display Popup
      </button>

      <div
        className={`content relative ${fromTop}`}
        style={{
          transitionDuration: "2s", // Ensure the transition duration is applied here as well
        }}
      >
        <div className="headerContent flex justify-center items-center text-white bg-pink-700 h-32 w-1/2">
          Header Content
        </div>
        <div className="headerContent flex justify-center items-center text-white bg-blue-700 h-52 w-1/2">
          Body Content
        </div>
        <div className="headerContent flex justify-center items-center text-white bg-purple-700 h-32 w-1/2">
          Footer Content
        </div>
      </div>
    </div>
  );
}
