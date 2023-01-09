import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'
const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className='w-full bg-[#262626] border-[#333333] p-4 rounded-lg flex justify-between items-center gap-[12px]'>
      <button className='w-5 h-5 bg-none border-none' onClick={() => onComplete(task.id)}>{task.isCompleted ? <BsFillCheckCircleFill size={20} className='w-full h-full text-[#5E60CE]'/> : <div className='w-full h-full rounded-full border border-gray-400]'/>}</button>
      <p className={`text-sm text-white mr-auto ${task.isCompleted ? 'text-[#808080] line-through': ''}`}>{task.title}</p>
      <button className='' onClick={() => onDelete(task.id)}><TbTrash size={20} className='bg-none border-none text-[#808080]'/></button>
    </div>
  )
}

export default Task
