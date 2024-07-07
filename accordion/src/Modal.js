import React,{useState} from 'react'

export default function Modal() {

const showData=()=>{
    // console.log("show data clicked");
setState(!state);

}
const [state,setState]=useState(false);

    return (
    <div>
      
<button onClick={()=>{
    showData()
}}> 
    Show data
</button>
{state && <div>
    anything in show data 
    
    </div>
    }
    </div>
  )
}
