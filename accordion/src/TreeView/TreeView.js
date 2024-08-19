import React, { useState } from "react";

export default function TreeView({ Data = {} }) {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <div>
      <h1 className="inline mr-3">{Data.name}</h1>
      {Data.children && Data.children.length > 0 && (
        <div onClick={toggleState} className="cursor-pointer inline">
          {state ? "-" : "+"}
        </div>
      )}
      <br />
      {state && Data.children && (
        <div style={{ paddingLeft: "20px" }}>
          {Data.children.map((elem) => (
            <TreeView key={elem.name} Data={elem} />
          ))}
        </div>
      )}
    </div>
  );
}
