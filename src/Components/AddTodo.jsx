import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo  } from '../Features/Todo/TodoSlice'
const AddTodo = () => {
    const dispatch = useDispatch()
    const [input , setInput]=useState('')
    const addTodoHandler = (e)=>
        {
            e.preventDefault();
          dispatch(addTodo(input))
            setInput('')
        }
  return (
    <>
   <div >
   <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='Enter Todo ..'
        className='py-2 px-4 rounded text-md text-white outline-none border-gray-700 bg-gray-800 focus:ring-indigo-500' 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        <button type='submit' className='border-purple-800 bg-purple-500 px-1  py-2 rounded'>Add Todo</button>
    </form>
   </div>
    </>
  )
}

export default AddTodo