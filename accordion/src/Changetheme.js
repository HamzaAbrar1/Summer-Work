import React, { useEffect, useState } from "react";

export default function Changetheme() {
  const [theme, setTheme] = useState("black");

  useEffect(() => {
    let value=localStorage.getItem("theme");
    // console.log(value)
if(value){
    setTheme(value)
    document.body.style.backgroundColor = value;
}

  }, []);
  const handle = () => {
    if (theme == "black") {
      setTheme("white");
    } else {
      setTheme("black");
    }
    document.body.style.backgroundColor = theme;
    console.log(theme);
    localStorage.setItem("theme",theme)
  };

  return (
    <div>
      <button onClick={handle}>Change theme</button>
    </div>
  );
}
