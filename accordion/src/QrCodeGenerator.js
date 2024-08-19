import React, { useState } from "react";
import QrCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [val, setVal] = useState("");
  const [generate1, setGenerate1] = useState("");
  const method = () => {
    setGenerate1(val);
  };
  return (
    <div>
      <h2>Enter the value</h2>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
        name=""
        id=""
        placeholder="Enter the value you want to generate"
      />

      <button
        disabled={val ? false : true}
        className="bg-blue-700 rounded-lg"
        onClick={method}
      >
        Generate
      </button>

      <QrCode id="qr-code" value={generate1} />

      {/* </QrCode> */}
    </div>
  );
}
