import { memo, useEffect, useMemo, useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bankAccount, setBankAccount] = useState({});
  const [exchangeOne, setExchangeOne] = useState({});
  const [exchangeTwo, setExchangeTwo] = useState({});
  console.log(" Hi From App component");

  useEffect(() => {  
    let timeout = setTimeout(() => {
      setBankAccount({income: 100})
    }, 5000);


    return ()=> clearTimeout(timeout);
  }, []);
 
  useEffect(()=>{
      setExchangeOne({returns: 200})
  }, []);


  useEffect(()=>{
      setExchangeTwo({returns: 200})
  }, [])


// ****************            useMemo()     ********************************

  // const stockReturns = exchangeOne.returns + exchangeTwo.returns; // Expensive Operation
  // Use useMemo to cache the value, that returns the result of this expensive operation
  // const stockReturns = useMemo(()=>{
  //   console.log('Hi there');
  //   return exchangeOne.returns + exchangeTwo.returns; 
  // }, [exchangeOne, exchangeTwo])


// ********************     useCallback()   *******************************
// useCallback is not about minimizing the amount of code that is run
//  useCallback is about Not rendering a Child Component, If a function hasn't change across Rerenders

  const stockReturns =  useCallback(()=>{
    return exchangeOne.returns + exchangeTwo.returns;
  }, [exchangeOne, exchangeTwo])

  const totalIncome = bankAccount.income + stockReturns();
  const [tax, setTax] = useState(20000);
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(() => {
      // document.getElementById('taxContainer').innerHTML = 10; //Bad way of updating DOM 
      console.log(divRef.current);
     divRef.current.innerHTML = '1000';
    }, 3000);
   

  }, [])




  // *******************  useRef *********************



  return (
    <>
      <StockReturns stockReturns={stockReturns}></StockReturns>
      {/* <h1>Total Income tax = {totalIncome * 0.3}</h1>     */}
      <h1>Total income tax for year 2024 is <div ref={divRef}>{tax}</div></h1>
    </>
  )
}

// IF the props are unchanged , Child will not rerender
const StockReturns = memo(({stockReturns})=>{
  console.log('Child Rerendered');
  return <h1>{stockReturns()}</h1>

})

export default App
