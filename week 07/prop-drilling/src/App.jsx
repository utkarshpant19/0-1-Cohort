import { useContext, useState } from "react"
import CountContext from "./context";

function App() {

  const [count, setCount] = useState(0);
console.log('App Rendered');
  // Wrap anyone that wants to use the teleported value, inside a Provider
  return (
   <div>
    <CountContext.Provider value={{
      count,
      setCount
    }}>
      <Count></Count>
    </CountContext.Provider>
      
   </div>
  )
}

 function Count(){

  console.log('Count Rendered');
  return <>
    <CountRenderer/>
    <Buttons/>
  </>
 }

 function CountRenderer(){

  const {count} = useContext(CountContext);

  return <>
    <h2>{count}</h2>
  </>
 }

 function Buttons(){
  const {count, setCount} = useContext(CountContext)

  return (
    <>
    <button onClick={()=> setCount(count +1)}>Increase</button>
    <button onClick={()=> setCount(count -1)}>Decrease</button>
    </>
  )
 }


export default App
