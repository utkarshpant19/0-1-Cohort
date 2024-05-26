import { useState } from "react"
import { Header } from "./Header";


export function HeaderWithButton(){

    console.log('Header with button rendered');

    const [title, setTitle] = useState('Utkarsh')

    function changeTitle(){
        setTitle(Math.random());
    }

    return <div>
        <button onClick={changeTitle}>Change the title</button>
        <Header title={title}></Header>
    </div>
}