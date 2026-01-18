import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
    console.log(authData.employees);
    
  return (
    <div className='bg-[#1c1c1c] rounded mt-7 p-5 '>
        <div className='bg-blue-400 mb-2 px-4 py-2 rounded flex justify-between'>
                <h2 className='text-lg font-medium w-1/5'>Employee</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>
        <div className=''>
            {authData.employees.map((elem)=>{
            return <div className=' mb-2 px-4 py-2 rounded border-1 flex justify-between'>
                <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.newTask}</h3>
                <h5 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCount.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskCount.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskCount.failed}</h5>
            </div>
            })}
        </div>
        
    </div>
  )
}

export default AllTask