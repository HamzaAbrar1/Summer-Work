import React, { useEffect, useState } from 'react'

export default function LoadContent() {
const [count,setCount]=useState(0);
    const [data,setData]=useState([]);
const [skip,setSkip]=useState(0);
    const loadData=async()=>{
        const resp=await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`);
        const res=await resp.json()
        // console.log(res)
let valu=res.products
let newval=data
        setData([...newval,...valu]);
    }
  useEffect(()=>{

    loadData()

  },[skip])
  const loadMore=()=>{
    setSkip(skip+10);

  }
    return (
    <div>
      some content being loaded
      {
        data.map((item)=>(
            <div>
            <img src={item.images[0]} alt="" style={{height:"150px"}}  />
            </div>
        )
    )}


    <button onClick={()=>{
        loadMore();
    }  
    } disabled={
        data.length>=50?true:false
    } 
    >Load more content</button>
    </div>
  )
}
