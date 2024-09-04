import react from 'react'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'
//import { increment,decrement } from './Features/Todo/TodoSlice'
import {useSelector ,useDispatch } from 'react-redux'




function App() {
  const todos = useSelector((state)=>state.todo.todos)
  const dispatch = useDispatch()
 

  return (
   <>
  <div className='bg-gray-500 flex  w-screen h-screen flex-col  '>
  <div className= 'text-gray-300 text-4xl mx-auto pt-28 space-y-14'><h1 className='text-center text-6xl'>Learn About redux</h1>
   <AddTodo/>
   {
    todos.map((val)=> <div key={val.id}><Todo todo={val}/></div>)
   }
   </div>
  </div>

    </>
  )
}

export default App
