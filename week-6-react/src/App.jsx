import {useEffect, useState} from 'react';
import './App.css';

function App () {
  const [todos, setTodos] = useState ([]);
  const [title, setTitle] = useState('Utkarsh')

  useEffect (() => {
    const timeout = setTimeout (getTodos, 1000);

    return ()=>{
      clearInterval(timeout);
    }
  }, [todos]);

  async function getTodos () {
    const response = await fetch ('https://sum-server.100xdevs.com/todos');
    const json = await response.json ();
    console.log (json);
    setTodos (json.todos);
  }

  return (
    <>
    <CardWrapper>
      <div>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </CardWrapper>

    <CardWrapper children={"Utkarsh Pant is a coding genius"}></CardWrapper>
    </>
  );
}

const CardWrapper = ({children}) => {
  console.log (children);

  return (
    <div style={{border: '1px solid black', color: '#fff', background: '#000', margin: 10, padding: 10}}>
      {children}
    </div>
  );
};

function Todo({title, description}) {
  console.log ('title', title);
  console.log ('description ', description);
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

// function App () {
//   return (
//     <div style={{display: 'flex'}}>
//       <CardWrapper>
//         <Header />
//       </CardWrapper>

//       <CardWrapper>
//         <div>
//           <h1>Hi Mom</h1>
//         </div>
//       </CardWrapper>

//     </div>
//   );
// }

// function Header () {
//   return <h1>Hello World</h1>;
// }

// function CardWrapper({children}) {
//   console.log ('Chidlren ',children);

//   return (
//     <div
//       style={{
//         border: '1px solid black',
//         background: 'gray',
//         color: '#fff',
//         padding: 5,
//         margin: 5,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

export default App;
