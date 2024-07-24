import React, { useState } from "react";

export default function () {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password);

    let obj = {
      userName: userName,
      password: password,
    };
  };

  return (
    <div>
      <label htmlFor="Username"> UserName : </label>
      <br />
      <input
        type="text"
        name="Username"
        id=""
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
          // console.log(userName)
        }}
        placeholder="Enter the username"
      />
      <br />
      <label htmlFor="Password"> Password : </label>
      <br />
      <input
        type="password"
        name="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          // console.log(password)
        }}
        id=""
        placeholder="Enter the password"
      />

      <button onClick={handleSubmit}> Submit</button>

      <div className="classname hover:cursor-pointer px-6 py-6 my-6  mx-[400px] md:w-[10px] hover:text-2xl hover:transition-all text-emerald-600 ">
        something
      </div>

      <div class="grid grid-cols-12 gap-4 mt-5 bg-orange-200">
        <div class="col-span-4 bg-black text-white p-4">first column</div>
        <div class="col-span-4 md:col-span-4 bg-red-950 text-white p-4">
          second column
        </div>
        <div class="col-span-4 md:col-span-4 bg-blue-800 text-white p-4">
          third column
        </div>
        <div class="col-span-12 md:col-span-4 bg-green-700 text-white p-4">
          fourth column
        </div>
      </div>
    </div>
  );
}
