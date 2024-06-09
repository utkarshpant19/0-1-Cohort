import { useContext, useState } from "react"
import CountContext from "./context";

function App() {

  const [count, setCount] = useState(0);

  // Wrap anyone that wants to use the teleported value, inside a Provider
  return (
   <div>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}></Count>
    </CountContext.Provider>
      
   </div>
  )
}

 function Count({setCount}){
  return <>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </>
 }

 function CountRenderer(){

  const count = useContext(CountContext);

  return <>
    <h2>{count}</h2>
  </>
 }

 function Buttons({setCount}){
  const count = useContext(CountContext)
  return (
    <>
    <button onClick={()=> setCount(count +1)}>Increase</button>
    <button onClick={()=> setCount(count -1)}>Decrease</button>
    </>
  )
 }


export default App
