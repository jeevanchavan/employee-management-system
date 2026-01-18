import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'
import CompleteTask from './CompleteTask'

const TaskList = ({data}) => {
  return (
    <div id='task' className=' overflow-x-auto w-full h-[60%] flex items-center justify-start gap-5 mt-10 py-5'>
        
        {data.tasks.map((elem,idx)=>{
            
            if(elem.active){
                return <AcceptTask key={idx} data={elem} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem} />
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} />
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}  />
            }
        })}

        
    </div>
  )
}

export default TaskList