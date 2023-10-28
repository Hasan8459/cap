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

  // const Do = (task)=>
  // {settodos(task)}

  const ChangeStatus = (checkId)=>
  {
    const newUpdatedTodo = todos.map((todo)=>
    {
      if(todo.id === checkId)
      {
        return{...todo , status: !todo.status}
      }
      else{
        return todo
      }
    })
    settodos(newUpdatedTodo)
  }

  const Delete = (deleteId) =>
  {
    const UpdatedTod = todos.filter((todo,index)=>
    {
      if(todo.id === deleteId)
      {
        todos[index].remove()
      }
      else{
        return todo;
      }
    })
    settodos(UpdatedTod)
  }

  return (
    <>
      <h2>Todos</h2>
      <input type='text' placeholder='Enter new Todo' onChange={handleChange} value={text}/>
      <button onClick={handleClick} >Add Todo</button>

      { todos?.map((todo)=>(
          <div className='todos'>
            <p>{todo.Title}  - {todo.status ? "Completed" : "Not-Completed"} </p>
            <button onClick={ ()=> ChangeStatus(todo.id)} >Toggle Todo</button><button onClick={()=> Delete(todo.id)}>Delete Todo</button>
          </div>
      )) }

    </>
  )
}

export default App
