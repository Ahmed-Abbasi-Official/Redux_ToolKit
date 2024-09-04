import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../Features/Todo/TodoSlice";

const Todo = ({todo}) => {
  const [edit , setEdit]=useState(true)
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [todoMsg , setTodoMsg]=useState(todo.text)



  const handleTodo = (id) => {
    setEdit(!edit)
    console.log(edit);
   // dispatch(updateTodo(id,todoMsg))
  };

  return (
    <>
      
        
         
            
              <div className=" w-full bg-gray-900 m-2 rounded p-2 px-4 text-lg flex justify-between ">
                <input type="text"
                value={todoMsg}
                readOnly={edit}
                className="text-black"
                onChange={(e)=> setTodoMsg(e.target.value)}
                />
                <button
                 onClick={() => handleTodo()}
                  className="bg-red-900 px-4 rounded"
                >
                  ☺
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-900 px-4 rounded"
                >
                  X
                </button>
              
            </div>
         
        
      
    </>
  );
};

export default Todo;
