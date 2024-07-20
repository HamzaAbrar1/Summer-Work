import React, { useState } from "react";

export default function () {
  const [userName, setUserName] = useState("");
  const [password,setPassword]=useState("");
  return (
    <div>
      <label htmlFor="Username"> UserName : </label>
      <br />
      <input
        type="text"
        name="Username"
        id=""
        value={userName}

        onChange={(e)=>{
setUserName(e.target.value)
console.log(userName)

        }}
        placeholder="Enter the username"
      />
      <br />
      <label htmlFor="Password"> Password : </label>
      <br />
      <input
        type="text"
        name="Password"
        value={password}
        onChange={(e)=>{
setPassword(e.target.value);
console.log(password)
        }}
        id=""
        placeholder="Enter the password"
      />
    </div>
  );
}
