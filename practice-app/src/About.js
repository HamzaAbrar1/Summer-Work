import React,{useContext} from 'react'
import Apicontext from './Context/Apicontext'
export default function About() {
 const {apiresp}=useContext(Apicontext);
 
 console.log(apiresp)
    return (
    <div>
      About feature
    </div>
  )
}
