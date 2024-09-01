import { useState } from "react"
import { useDebounce } from "../hooks/useDebounce";

export const SearchBar = ()=>{

    const [input,setInput] = useState('');
     const debouncedValue =  useDebounce(input, 500);
   

    return <>
    <h1>Search</h1>

    <input value={input} onChange={(e)=> setInput(e.target.value)} />
    <h2>{debouncedValue}</h2>
    </>
}