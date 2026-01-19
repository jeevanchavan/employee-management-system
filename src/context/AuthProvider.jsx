import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear()

    const [userData, setUserData] = useState(null)
    
    useEffect(()=>{
        setLocalStorage()
        const {employees} = getLocalStorage()
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUserData(employees)
    },[])
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider