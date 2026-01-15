import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 mt-10 rounded bg-[#1c1c1c]'>
        <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5 cursor-pointer' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' type="text" placeholder='employee' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' type="text" placeholder='Design, Development,etc..' />
                </div>
            </div>
            
            <div className='flex flex-col items-start w-2/5'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border border-gray-400 mb-6' name="" id=""></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-4 rounded w-full font-medium cursor-pointer border-none'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask