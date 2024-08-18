import React, { useState } from 'react'
import {FaStar} from "react-icons/fa"

export default function Stars1({no=10}) {
  
  const [rating,setRating]=useState(0);
  const [hover,setHover]=useState(0);

  
    return (
    <div>
      {
[...Array(no)].map((_,index)=>(

<div>
    <FaStar 
    onClick={()=>{
        setRating(index)
    }}
    onMouseEnter={()=>{
        setHover(index)
    }}    
    onMouseLeave={()=>{
        setHover(rating);
    }}
    className={index<=(hover||rating)? "text-orange-600" : "bg-white" } />
</div>

))

      }
    </div>
  )
}
