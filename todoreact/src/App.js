import { useState } from 'react'
import './App.css'

function App() {
  const [text, settext] = useState("")
  const [todos,settodos] = useState([])

  const handleChange = (event)=>
  {
    settext(event.target.value)
  }

  const handleClick = () => 
  {
    const newTodo = {
      Title:text,
      status:false,
      id: Date.now() + Math.random(10) + text,
    }
    settext("")

    const AllTodo = [...todos,newTodo]
    settodos(AllTodo)
  }

  return (
    <>
      <h2>Todos</h2>
      <input type='text' placeholder='Enter new Todo' onChange={handleChange} value={text}/>
      <button onClick={handleClick} >Add Todo</button>

      { todos?.map((todo)=>(
          <div className='todos'>
            <p>{todo.Title}  - {todo.status ? "Completed" : "Not-Completed"} </p>
          </div>
      )) }

    </>
  )
}

export default App
