import React,{useContext,useEffect} from 'react'
import {useLoaderData} from "react-router-dom"
import Apicontext from './Context/Apicontext';
export default function Contact() {

    const {apiresp,setApiresp}=useContext(Apicontext);
    



  const data=useLoaderData();
  console.log(data);
  useEffect(
    ()=>{
        setApiresp(data)
    },[]
)
    return (
    <div>
      Contact us feature
    </div>
  )



}

export const loadfunc= async()=>{
 try{ let val= await fetch("https://fakestoreapi.com/products")
let final_result= await val.json();

return final_result
 }
 catch(e){
    return e
 }
}
