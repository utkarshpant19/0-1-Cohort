import { memo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import React from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // Your code starts here
    // Use useCallback hook to cache function reference, and put required state variables in deps []
    const handleIncrement = useCallback(()=> {
            setCount(count +1);
    }, [count])

    const handleDecrement =useCallback(()=> {
        setCount(count -1);
}, [count]) 
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
            <button onClick={()=> setCounterTwo((count)=> count+1)}>Counter Two {counterTwo}</button>
        </div>
    );
}

const CounterButtons = memo(function CounterButtons({ onIncrement, onDecrement }) {

    console.log('Child Rendered');
return (
<div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
</div>
);
})

  

