import React, { useState } from 'react'

const CreateTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [assignTo, setAssignTo] = useState('')

    const [newTask, setNewTask] = useState({})

    // two-binding
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log('form done')

        setNewTask({title,description,date,category,active:false,newTask:true,completed:false,failed:false})

        const data = JSON.parse(localStorage.getItem('employees'))

        data.forEach((elem)=>{
            if(assignTo === elem.firstName){
                elem.tasks.push(newTask)
            }
        })

        setTitle('')
        setAssignTo('')
        setCategory('')
        setDescription('')
        setDate('')
        
    }

  return (
    <div className='p-5 mt-10 rounded bg-[#1c1c1c]'>
        <form onSubmit={(e)=>{
            submitHandler(e);
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input
                        value={title} 
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' 
                        type="text" 
                        placeholder='Make a UI design' 
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input 
                        value={date}
                        onChange={(e)=>{
                            setDate(e.target.value)
                        }}
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5 cursor-pointer' 
                        type="date" 
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input 
                        value={assignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' 
                        type="text" 
                        placeholder='employee' 
                    />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                        value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-5' 
                        type="text" 
                        placeholder='Design, Development,etc..' 
                    />
                </div>
            </div>
            
            <div className='flex flex-col items-start w-2/5'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                        className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border border-gray-400 mb-6' 
                        name="" id="">
                    </textarea>

                    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-4 rounded w-full font-medium cursor-pointer border-none'>Create Task</button>
            </div>
        </form>
    </div>
  )
}

export default CreateTask