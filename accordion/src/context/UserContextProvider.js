import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserContextProvider({children}) {
  const [value1,setValue1]=useState(null);
  
    return (
    <UserContext.Provider value={{value1,setValue1}}>
      {children}
    </UserContext.Provider>
  )
}
