import React from 'react'

const TaskList = () => {
  return (
    <div id='task' className=' overflow-x-auto w-full h-[60%] flex items-center justify-start gap-5 mt-10 py-5'>
        <div className='flex flex-col shrink-0 items-start rounded-xl h-full w-[360px] bg-blue-400 p-5'>
            <div className='flex justify-between w-full '>
                <h3 className='bg-red-600 text-sm rounded py-1 px-2'>High</h3>
                <h4 className='text-sm '>15 11 2025</h4>
            </div>
            <h2 className='font-bold text-2xl mt-10'>Complete the Project</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, veritatis beatae quibusdam maxime autem necessitatibus consequatur corrupti culpa laborum!</p>
        </div>
        <div className='flex flex-col shrink-0 items-start rounded-xl h-full w-[360px] bg-green-400 p-5'>
            <div className='flex justify-between w-full '>
                <h3 className='bg-red-600 text-sm rounded py-1 px-2'>High</h3>
                <h4 className='text-sm '>15 11 2025</h4>
            </div>
            <h2 className='font-bold text-2xl mt-10'>Complete the Project</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, veritatis beatae quibusdam maxime autem necessitatibus consequatur corrupti culpa laborum!</p>
        </div>
        <div className='flex flex-col shrink-0 items-start rounded-xl h-full w-[360px] bg-yellow-400 p-5'>
            <div className='flex justify-between w-full '>
                <h3 className='bg-red-600 text-sm rounded py-1 px-2'>High</h3>
                <h4 className='text-sm '>15 11 2025</h4>
            </div>
            <h2 className='font-bold text-2xl mt-10'>Complete the Project</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, veritatis beatae quibusdam maxime autem necessitatibus consequatur corrupti culpa laborum!</p>
        </div>
        <div className='flex flex-col shrink-0 items-start rounded-xl h-full w-[360px] bg-red-400 p-5'>
            <div className='flex justify-between w-full '>
                <h3 className='bg-red-600 text-sm rounded py-1 px-2'>High</h3>
                <h4 className='text-sm '>15 11 2025</h4>
            </div>
            <h2 className='font-bold text-2xl mt-10'>Complete the Project</h2>
            <p className='text-sm mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, veritatis beatae quibusdam maxime autem necessitatibus consequatur corrupti culpa laborum!</p>
        </div>
        
    </div>
  )
}

export default TaskList