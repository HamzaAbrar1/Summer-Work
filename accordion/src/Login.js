import React,{useContext, useEffect, useState} from 'react'
import UserContext from './context/UserContext'
export default function Login() {
const {value1}=useContext(UserContext);

useEffect(()=>{
    
let val= document.getElementsByClassName("something")
val=Array.from(val)
val.forEach(
    (elem)=>{
        elem.addEventListener("click",(e)=>{
            e.target.remove()
        })

    }
)
},[])

  return (
   <>
 
    {value1 &&
<div>
userName: {value1.userName}
<br/>
email: {value1.email}
</div>
    }

{!value1 && <div>
    there is nothing to be loged in to so please try again your credentials
</div>

}

<div className="something">
    write to remove it 1
</div>

<div className="something">
    write to remove it 2
</div>
<div className="something">
    write to remove it 3
</div>
<div className="something">
    write to remove it 4
</div>

      </>
  )


}
