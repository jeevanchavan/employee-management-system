import React from 'react'

const FailedTask = ({data}) => {
  return (
        <div className='flex flex-col shrink-0 items-start rounded-xl h-full w-[360px] bg-red-400 p-5'>
            <div className='flex justify-between w-full '>
                <h3 className='bg-red-600 text-sm rounded py-1 px-2'>{data.title}</h3>
                <h4 className='text-sm '>{data.date}</h4>
            </div>
            <h2 className='font-bold text-2xl mt-10'>{data.title}</h2>
            <p className='text-sm mt-3'>{data.description}</p>
            <div className='mt-8 flex w-full'>
                <button  className='bg-red-800 cursor-pointer border-none outline-none mr-5 text-sm rounded px-2 py-1 w-full'>Failed</button>
            </div>
        </div> 
  )
}

export default FailedTask