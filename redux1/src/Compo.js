import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setRollno } from "./something/slice";
export default function Compo() {
  const value = useSelector((state) => ({
    name: state.name,
    Rollno: state.roll_no,
  }));

  console.log(value);

  const dispatch = useDispatch();
dispatch(setRollno(85));

const value2=useSelector((state)=>(
    state.roll_no
))
console.log(value2);

  return (
    <div>
      {value.name}
      <br />
      {value.Rollno}
    </div>
  );
}
