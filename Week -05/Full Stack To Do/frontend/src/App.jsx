
import { useState } from 'react'
import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { ToDos } from './components/ToDos'

function App() {

  const [todos, setTodos] = useState([]);

  // Get todos from the db
  fetch("http://localhost:3010/todos").then(async (res)=>{

    const json = await res.json();
    setTodos(json.todos);
  })


  return (
   <div>
   <CreateToDo/>
   <ToDos todos={todos}></ToDos>
   </div>
  )
}

export default App
