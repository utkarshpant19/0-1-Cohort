import { useEffect } from "react";

export function useInterval(fn, timer){

    useEffect(()=>{
       const timeout = setInterval(() => {
            fn();
        }, timer);

        return ()=>{
            clearInterval(timeout);
        }
    })

    

}