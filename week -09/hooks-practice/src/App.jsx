import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import { SearchBar } from './components/SearchBar';

function useTodos(t){

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {

   const timeout =  setInterval(() => {
      axios.get("http://localhost:3000/api/v1/todos")
      .then(res => {
        setLoading(false);
        setTodos(res.data.todos);
      })
    }, t*1000);

    return ()=>{
      clearInterval(timeout);
    }

  }, [t]);

  return {todos, loading};
}

function App() {
  const {todos, loading} = useTodos(5); // Poll every 5 seconds
  const [count, setCount]= useState(0);

  const onlineStatus = useIsOnline();
  const mousePosition = useMousePointer();
    useInterval(()=>{
      setCount((c)=> c+1);
    }, 1000);

  if(!onlineStatus){
    return <>
    <h1>You're Offline</h1>
    </>
  }

  return loading ? <div>Loading...</div> :  (
    <>
      {/* {todos.map(todo => <Track key={todo._id} todo={todo} />)}
      <h1>{'The mouse position is '+mousePosition.x +" "+mousePosition.y}</h1>
      <h1>Timer is at {count}</h1> */}

      <SearchBar/>
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}


// function App() {

//   const [render, setRender] = useState(true);

//   useEffect(()=>{

//     setTimeout(() => {
//       setRender(false);
//     }, 5000);
//   }, [])

//   return (
//     <>
//       {/* { render ? <MyComponent/>: <div></div>} */}
//       { render ? <MyClassComponent/>: <div></div>}
     
//     </>
//   )
// }

// function MyComponent (){

//   useEffect(()=>{

//     console.log('Component Mounted');

//     return ()=>{
//       console.log('Component Unmounted');
//     }
//   }, [])

//   return <>
//  <p>From My Functional Component</p>
//   </>
// }

// class MyClassComponent extends Component{

//   componentDidMount(){
//     console.log('Component mounted');
//   }

//   componentWillUnmount(){
//     console.log('Component Unmounted');
//   }

//   constructor(props){

//     super(props);
//     this.state = {
//       count: 0
//     }
//   }

//   incrementCount =()=>{
//     this.setState({count: this.state.count +1})
//   } 

//   render(){

//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increase</button>
//       </div>
//     )

//   }
// }



export default App
