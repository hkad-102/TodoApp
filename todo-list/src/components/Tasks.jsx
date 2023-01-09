import React from 'react'
import Task from './Task';

const Tasks = ({ tasks, onDelete, onComplete }) => {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(item => item.isCompleted).length
  return (
    <section className='w-full max-w-[736px] mx-auto mt-[90px] py-4'>
      <header className='flex items-center justify-between mb-6'>
        <div className='flex items-center gap-2'>
            <p className='text-[#4EA8DE] text-sm font-bold'>Created Tasks</p>
            <span className='bg-[#333333] text-[#D9D9D9] px-3 py-2 rounded-full text-sm font-bold'>{tasksQuantity}</span>
        </div>

        <div className='flex items-center gap-2'>
            <p className='text-[#8284FA] text-sm font-bold'>Completed Tasks</p>
            <span className='font-bold bg-[#333333] text-[#d9d9d9] px-3 py-2 rounded-full text-sm'>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>

      <div className='flex flex-col gap-[12px]'>
        {tasks.map((item) => {
            return (
                <Task key={item.id} task={item} onDelete={onDelete} onComplete={onComplete}/>
            )
        })}
      </div>
    </section>
  )
}

export default Tasks
