import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setRollno,setname,setNameAndRollNo } from "./something/slice";

export default function Compo() {
  const value = useSelector((state) => ({
    name: state.name,
    Rollno: state.roll_no,
  }));

  console.log(value);

  const dispatch = useDispatch();
  // dispatch(setRollno(85, "hommod"));

const change=()=>{
if(value.Rollno==84){

dispatch(
  setNameAndRollNo(
    {
      name1:"Hammad Yousaf",
      roll_no1:85
    }
  )
)



}
else{

  dispatch(
    setNameAndRollNo(
      {
        name1:"Hamza Abrar",
        roll_no1:84
      }
    )
  )

}


}
  
  const value2 = useSelector((state) => state.roll_no);
  console.log(value2);

  return (
    <div>
      {value.name}
      <br />
      {value.Rollno}

      <button onClick={()=>{
        change()
      }}>Change values</button>
    </div>
  );
}
