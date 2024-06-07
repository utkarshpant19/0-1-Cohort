

import './App.css'
import { BrowserRouter, Routes , Route, useNavigate} from 'react-router-dom'
import { Suspense, lazy}  from 'react';
const Dashboard = lazy(()=> import('./components/Dashboard'));
const Landing = lazy(()=> import('./components/Landing'));

function App() {

  return (
    <>
    
      <BrowserRouter>
      {/* Whatever component uses useNavigate hook , needs to be inside BrowserRouter */}
        <Navbar/>

       
        <Routes>
        
          <Route path='/' element={ <Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}></Route>
          <Route path='/dashboard' element={<Suspense fallback={<div>Loading....</div>}><Dashboard/></Suspense>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}


function Navbar(){

  const navigate = useNavigate();
  return <>
        <div style={{background: 'black', color: '#fff'}}>
          <button onClick={()=>{
           navigate('/')
          }}>Landing</button>
          <button onClick={()=>{
            navigate('/dashboard')
          }}>Dashboard</button>
    
        </div>
    </>
}

export default App
