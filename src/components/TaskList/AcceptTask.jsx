import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data.title);
    
  return (
        <div className='flex flex-col shrink-0 items-start rounded-xl h-full w-[360px] bg-blue-400 p-5'>
            <div className='flex justify-between w-full '>
                <h3 className='bg-red-600 text-sm rounded py-1 px-2'>{data.category}</h3>
                <h4 className='text-sm '>{data.date}</h4>
            </div>
            <h2 className='font-bold text-2xl mt-10'>{data.title}</h2>
            <p className='text-sm mt-3'>{data.description}</p>
            <div className='flex justify-between mt-8'>
                <button className='bg-green-500 cursor-pointer border-none outline-none mr-5 text-sm rounded px-2 py-1'>Mark Completed</button>
                <button className='bg-red-500 cursor-pointer border-none outline-none text-sm rounded px-2 py-1'>Mark Failed</button>
            </div>
        </div>  
  )
}

export default AcceptTask