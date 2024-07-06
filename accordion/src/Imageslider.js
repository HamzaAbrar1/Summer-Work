import React, { useEffect, useState } from 'react'

export default function Imageslider() {

    const [result,setResult]=useState([]);
    
    const [src,setSrc]=useState(null)
    const [count,setCount]=useState(0)
    const fetchData=async()=>{
        const res=await fetch('https://dummyjson.com/products');
        const data=await res.json();
        console.log(data.products);
        setResult(data.products)
        setSrc(data.products[count].images[0]);
    }
    useEffect(
        ()=>{
        fetchData();
        }
        ,[]
    )
const leftSlider=()=>{
    console.log(count);
    setSrc(result[count].images[0]);
    if(count===0){
    setCount(result.length -1);
    }
    else{
        setCount(count-1);
    }

    
}

const rightSlider=()=>{
console.log(count);
setSrc(result[count].images[0]);
    if(count===(result.length-1)){
        setCount(0);
    }
    else{
        setCount(count+1);
    }
    // console.log(count);
  
}
  return (

<div>

just an image slider

      <br />


      {
      <div>
        {/* {
        result.map((item)=>(
            <div>
                <img src={item.images[0]} alt={item.title} style={{height:'150px'}} />
             </div>   
        ))
        } */}


        <img src={src} alt="" style={{height:"150px"}} />
      <button onClick={()=>{
        leftSlider()
      }}> 
        leftSlider
      </button>
      <button onClick={
        ()=>{
            rightSlider();
        }
      }>
        rightSlider
      </button>
      </div> 
      }
    </div>
  )
}
