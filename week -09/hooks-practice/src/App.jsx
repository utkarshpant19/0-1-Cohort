import { useEffect, useState } from 'react'
import { Component } from 'react';
import './App.css'

function App() {

  const [render, setRender] = useState(true);

  useEffect(()=>{

    setTimeout(() => {
      setRender(false);
    }, 5000);
  }, [])

  return (
    <>
      {/* { render ? <MyComponent/>: <div></div>} */}
      { render ? <MyClassComponent/>: <div></div>}
     
    </>
  )
}

function MyComponent (){

  useEffect(()=>{

    console.log('Component Mounted');

    return ()=>{
      console.log('Component Unmounted');
    }
  }, [])

  return <>
 <p>From My Functional Component</p>
  </>
}

class MyClassComponent extends Component{

  componentDidMount(){
    console.log('Component mounted');
  }

  componentWillUnmount(){
    console.log('Component Unmounted');
  }

  constructor(props){

    super(props);
    this.state = {
      count: 0
    }
  }

  incrementCount =()=>{
    this.setState({count: this.state.count +1})
  } 

  render(){

    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increase</button>
      </div>
    )

  }
}



export default App
