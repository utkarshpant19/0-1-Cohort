import { useEffect, useState } from "react";

export function CreateToDo() {


    //Create state variables for input
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    useEffect(function(){

    }, [])

  return (
    <>
      <label htmlFor="title">
        Title:{" "}
        <input
          style={{ padding: 10, margin: 5 }}
          type="text"
          id="title"
          placeholder="Title"
        onChange={function($event){
            const titleValue = $event.target.value;
            setTitle(titleValue)
        }}
        />
      </label>
      <br></br>
      <label htmlFor="description">
        Description:
        <input
          style={{ padding: 10, margin: 5 }}
          type="text"
          id="description"
          placeholder="description"
          onChange={function($event){
            const descValue = $event.target.value;
            setDescription(descValue)
        }}
        />
      </label>
      <br />
      <button onClick={function(){

        fetch("localhost:3010/todo", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description
            })
        }).then(async (res)=>{
            const json = await res.json();
            alert(json.message)
        })


      }}>Add To Do</button>
    </>
  );
}
