import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='task' className=' overflow-x-auto w-full h-[60%] flex items-center justify-start gap-5 mt-10 py-5'>
        
        <AcceptTask />
        <NewTask/>

        <CompleteTask />
        <FailedTask/>
        
        
    </div>
  )
}

export default TaskList