import React, { useState, useRef, useEffect } from 'react';
import Todo_task from './Todo_task';

const Todo = () => {
  const [todo_task, setTodo_task] = useState(
    localStorage.getItem("todo_task") ? JSON.parse(localStorage.getItem("todo_task")) : []
  );
  // update local storage
  useEffect(() => {
  localStorage.setItem("todo_task", JSON.stringify(todo_task));
  }, [todo_task]);

  const inputref = useRef();

  const addTask = () => {
    const inputText = inputref.current.value.trim();
    if (inputText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodo_task((prev) => [...prev, newTask]);

    // Clear input after adding a task
    inputref.current.value = "";
  };
const toggle=(id)=>{
setTodo_task((prev) =>{
  return prev.map((todo)=>{
    if(todo.id===id){
      return {...todo,isComplete:!todo.isComplete};
    }
    return todo
  });
});
};
const deleteTodo=(id)=>{
  setTodo_task((prev)=>{
    return prev.filter((todo)=>todo.id!==id);
  });
};
  return (
    <>
      <div className="w-[30rem]">
        <h1 className="text-lg my-2 font-medium text-amber-500">TODO-LIST</h1>
        <div className="flex gap-3">
          <div className="flex-1">
            <input ref={inputref} className="w-full h-full py-2 px-2 focus:outline-none focus:outline-yellow-50" type="text" placeholder="ADD YOUR TASK" />
          </div>
          <button onClick={addTask} className="py-1 px-4 bg-blue-600 text-white hover:bg-red-900 font-medium rounded-sm border-none">
            ADD TASK
          </button>
        </div>
        <p className="my-3 text-white">Fill Task details</p>
      </div>
      <div className="w-[30rem] bg-white py-8 px-3">
        <fieldset className="border-2 border-emerald-900 p-3 rounded-md">
          <legend className="text-emerald-900 font-semibold">List of tasks</legend>
          {todo_task.length === 0 ? (
            <p>No Task Found</p>
          ) : (
            todo_task.map((todo) => (
              <Todo_task key={todo.id} text={todo.text} isComplete={todo.isComplete} id={todo.id} toggleTask={toggle} deletetodo={deleteTodo}/>
            ))
          )}
        </fieldset>
      </div>
    </>
  );
};

export default Todo;
