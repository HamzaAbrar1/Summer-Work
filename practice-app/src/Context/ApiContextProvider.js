
import React,{useState} from 'react'
import Apicontext from "./Apicontext"
function ApiContextProvider({children}) {

    const [apiresp,setApiresp]=useState(null)
    return (
    <Apicontext.Provider value={{apiresp,setApiresp}}>
{children}
    </Apicontext.Provider>
      
    
  )
}

export default ApiContextProvider
