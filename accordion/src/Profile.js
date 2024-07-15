import React, { useContext, useState } from "react";
import UserContext from "./context/UserContext";

export default function Profile() {
  const { setValue1 } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit=(e)=>{
e.preventDefault()
setValue1({userName,email})
setEmail("")
setUserName("");

  }
  return (
    <>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name=""
        id=""
        placeholder="enter the email"
      />
      <br/>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="enter the userName"
        name=""
        id=""
      />
    
      <button onClick={handleSubmit}>submit the result</button>
      <br />
      profile form
    </>
  );
}
