import React,{useState} from 'react'
import {FaStar} from "react-icons/fa"
import "./star.css"
export default function Stars({no}) {
    // console.log(no)

    const [active,setActive]=useState(0)
    const [hover,setHover]=useState(0)
    const func=(index)=>{
       
        setActive(index)
        // console.log(active)
        // console.log(index)
    }
    const func1=(index)=>{ 
    setHover(index);    
        // console.log(index)
    }
    const func2=(index)=>{  
    setHover(index);
        //   console.log(index)
    }
  return (
    <div>
    {[...Array(no)].map((_,index)=>(
        <FaStar
        key={index+1}
        className= {index+1<= (active||hover)? "active" : "inactive"}

        onClick={ ()=> func(index+1) }
        onMouseEnter={()=> func1(index+1)}
        onMouseLeave={()=> func2(index+1)}
        
        // color="orange" size={20} 
        />
    ))
    }
      {/* <FaStar/> */}
      {/* </Fastar> */}
    </div>
  )
}
