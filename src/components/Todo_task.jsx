import React from 'react'

const Todo_task = ({text,isComplete,id,toggleTask,deletetodo}) => {
  return (
    <div>
      <div className='flex w-full justify-between bg-red-400 cursor-pointer my-2'>
            <div className="flex">
                <label onClick={()=>toggleTask(id)} htmlFor="" className={`cursor-pointer select-none ${isComplete ? "line-through text-slate-600" : ""}`}
                >{text}</label>
            </div>
            <div className='hover:bg-red-300 size-[25px] rounded-md' onClick={()=>deletetodo(id)}>
            <svg className="hover:fill-red-700" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
            </div>
    </div>
  )
}

export default Todo_task
