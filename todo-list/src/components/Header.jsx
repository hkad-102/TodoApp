import React, { useState } from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import { FcTodoList } from 'react-icons/fc'

const Header = ({ handleAddTask }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()

        handleAddTask(title);
        setTitle('');
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
  return (
    <header className='bg-black flex items-center justify-center h-[200px] relative'>
      
      <div className='font-bold text-5xl flex items-center justify-center'>
        <FcTodoList size={40} className='mr-2 text-[#50b6f0]' />
        <p className='text-[#50b6f0]'>to<span className='text-[#8284FA]'>do</span></p>
        <p className='text-[#50b6f0] ml-2'>li<span className='text-[#8284FA]'>st</span></p>
      </div>
      
      <form onSubmit={handleSubmit} className='absolute h-[54px] bottom-[-5%] w-full max-w-[736px] flex gap-2 py-4'>
        <input type="text" className='h-full w-full rounded-lg flex-1 text-black bg-gray-300 border-none py-6 px-3 text-lg' placeholder='Add a new tasks' onChange={onChangeTitle} value={title}/>
        <button className='h-full py-6 px-8 bg-[#1E6F9F] text-white flex items-center gap-[6px] font-bold text-sm rounded-lg'>Create <AiOutlinePlusCircle size={20}/></button>
      </form>
    </header>
  )
}

export default Header
