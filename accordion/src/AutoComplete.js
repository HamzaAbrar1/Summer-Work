import React, { useEffect, useState } from 'react'

export default function AutoComplete() {
  

const [fetched,setFetched]=useState([]);
const [showData,setShowData]=useState(null);
  const fetch1=async()=>{
    const response=await fetch('https://dummyjson.com/products')
    const data=await response.json()
    console.log(data.products)

let ars
ars= data.products.map((eleme)=>(
    eleme.title
));
if(ars){
    setFetched(ars)
}
// console.log(ars);

}

useEffect(()=>{
    fetch1()
}
,[])

    return (
    <div>
<input type="text" onChange={(e)=>{
    const search=e.target.value
    let filtered=fetched.filter((eleme)=>eleme.toLowerCase().includes(search.toLowerCase()))
    // console.log(filtered)
    if(e.target.value==""){
        filtered=[]
    }
    setShowData(filtered)
}} placeholder='Enter to search' />

{showData && showData.length>0 ?
showData.map(elem=>(
    <div>{elem}</div>
))
:null

}



    </div>
  )
}
