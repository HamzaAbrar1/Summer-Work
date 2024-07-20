import React, { useEffect, useState } from 'react'

export default function Practice() {
  
    let [state,setState]=useState([])
const funct=async()=>{
    const resp=await fetch("https://fakestoreapi.com/products",
    // { 
      
    //     // Adding method type 
    //     method: "", 
          
    //     // Adding body or contents to send 
    //     body: JSON.stringify({ 
    //         title: "foo", 
    //         body: "bar", 
    //         userId: 1 
    //     }), 
          
    //     // Adding headers to the request 
    //     headers: { 
    //         "Content-type": "application/json; charset=UTF-8"
    //     } 
    // }
    )
    const finalres= await resp.json()
    setState(finalres)

    console.log(finalres)
}

    useEffect(()=>{
        funct()
    },[])
  
    return (
    <div>
      nothing just trying to check that how fetch using get works


    </div>
  )
}
