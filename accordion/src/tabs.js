import React, { useState } from "react";

export default function tabs() {
  let ad = [
    { no: "tab1", content: "hello i can write content from tab 1" },
    { no: "tab2", content: "hello i can write content from tab 2" },

    { no: "tab3", content: "some random content" },
  ];

  const [currentIndex,setCurrentIndex]=useState(0);

const getIndex=(currIndex)=>{
    setCurrentIndex(currIndex);
}

  return <div>
{
    ad.map((cont,index)=(
<div key={index}>
<button onClick={()=>{
    getIndex(index)
}}> get the content of {cont.no}</button>

{
    currentIndex==index? <div>
        {cont.content}
    </div> :null
}


</div>
    ))
}




  </div>;
}
