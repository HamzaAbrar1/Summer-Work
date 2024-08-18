import React, { useEffect, useState } from 'react'

export default function LoadContent1() {
 
    const [data1,setData1]=useState([]);
    const [skip,setSkip]=useState(0);
   
    const method=()=>{
        setSkip(skip+10);

    }

    const fetch1= async ()=>{
        const resp=await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
        let finalresult=await resp.json()

    let value= finalresult.products
    console.log("the length is as following",value.length);
    let newar=[...data1,...value]
    setData1(newar)

    console.log(value)
     

        // console.log(data[0].images[0])
    }

    
    useEffect(  ()=>{
     fetch1()
     
    },[skip])

    return (
    <>
    {data1 ?
   data1.map((elem,index)=>(
    <div>
        <img src={elem?.images[0]} className='h-28' alt="" />
    </div>
   )) :
        <div> can not fetch data </div>
        }

<div>
    <button className='bg-blue-700 rounded-md' onClick={()=>{
        method()
    }}  
    disabled={
data1.length>=50?true:false
    }
    >Show more data</button>
</div>

      
    </>
  )
}
