import { createContext } from "react";

const CountContext = createContext({
    count: 0,
    setCount: ()=> {}
});
export default CountContext;