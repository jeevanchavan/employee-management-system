import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
        <div className='w-[45%] bg-blue-400 rounded-xl py-8 px-10'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='font-medium text-2xl'>New Task</h3>
        </div>
        <div className='w-[45%] bg-green-400 rounded-xl py-8 px-10'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='font-medium text-2xl'>Completed</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 rounded-xl py-8 px-10'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='font-medium text-2xl'>Accepted</h3>
        </div>
        <div className='w-[45%] bg-red-400 rounded-xl py-8 px-10'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='font-medium text-2xl'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers