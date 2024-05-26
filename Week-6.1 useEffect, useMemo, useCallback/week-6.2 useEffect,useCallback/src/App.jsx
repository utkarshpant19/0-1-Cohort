import { useState, memo, useCallback } from "react";

function App() {
  const [count, setCount] = useState(1);

  // Memoize the function using UseCallback, returns a function
  const logSomething = useCallback(function logSomething() {
    console.log("Hi Therer");
  }, []);

  return (
    <div>
      <Child logSomething={logSomething}></Child>
      <button onClick={() => {
        setCount((c)=> c + 1)
        setCount((c)=> c + 1)
      }}>Count {count}</button>
    </div>
  );
}

const Child = memo(function Child({ logSomething }) {
  console.log("Child Rendered");

  return (
    <div>
      <button>Some Button</button>
    </div>
  );
});
export default App;
