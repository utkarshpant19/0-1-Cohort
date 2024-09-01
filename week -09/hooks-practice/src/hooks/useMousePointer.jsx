import { useEffect, useState } from "react";

export function useMousePointer(){

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(()=>{
        window.addEventListener('mousemove', handleMouseMovement)

        function handleMouseMovement(e){
    
            setPosition({x: e.clientX, y: e.clientY})
        }

        return ()=>{
            window.removeEventListener('mousemove');
        }
    }, [])

    

    return position;
}