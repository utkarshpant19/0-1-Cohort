/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'

function App() {

const [todos, setTodos]= useState([
  {title: "Do DSA", description: "Solve Binary Tree questions 6-8 AM"},
  {title: "Go to Gym", description: "Gym 8-9 AM"},
])

function addToDo(){

  let newTodos = [];

  for(let i=0; i<todos.length; i++){
    newTodos.push(todos[i]);
  }

  newTodos.push({
    title: "New to do",
    description: "New todo Description"
  })

  setTodos(newTodos);
}

return (

  <>

  <button onClick={addToDo}>Add to ToDo</button>

  {todos.map((todo, idx)=>{
    return <Todo key={idx} title={todo.title} description={todo.description}></Todo>
  })}
  <DarkToDo todos={todos}></DarkToDo>
  </>
  

)
}

function Todo(props){

  const {title, description} = props;

  return (
    <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  )
}

function DarkToDo(props){

  console.log('Dark theme props', props);

  const {todos}=props

  return <>
        {todos.map((todo, idx)=> {
          return <div key={idx} style={{background: 'black', color: 'white'}}>
            <Todo  title={todo.title} description={todo.description}></Todo>
          </div>
        })}
      </>
}



export default App
