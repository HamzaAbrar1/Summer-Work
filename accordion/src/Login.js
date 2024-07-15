import React,{useContext, useState} from 'react'
import UserContext from './context/UserContext'
export default function Login() {
const {value1}=useContext(UserContext);

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

      </>
  )
}
