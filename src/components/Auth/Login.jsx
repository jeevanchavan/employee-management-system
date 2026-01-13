import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("email is",email);
    console.log("pass is",password);
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border rounded-xl border-emerald-600 p-30 '>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }} className='flex flex-col items-ceneter justify-center'>

                <input className=' font-medium rounded-full outline-none border-2 border-emerald-600 placeholder:text-gray-300 px-4 py-3'
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                 type="email" 
                 placeholder='Enter you email' 
                />

                <input className=' font-medium rounded-full outline-none border-2 border-emerald-600 mt-3 placeholder:text-gray-300 px-4 py-3'
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }} 
                type="password" 
                placeholder='Enter password' 
                />

                <button className=' font-medium rounded-full outline-none bg-emerald-600 mt-7 px-4 py-3 cursor-pointer active:scale-95'
                >Log in
                </button>

            </form>
        </div>
    </div>
  )
}

export default Login