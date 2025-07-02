import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15);
  
  const addValue = () =>{
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter+1)
      // setCounter((prevCounter) => prevCounter+1)
      // setCounter((prevCounter) => prevCounter+1)
      // setCounter((prevCounter) => prevCounter+1)
    }else{
      setCounter(15)
    }
  }

  const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter-1);
    }else{
      setCounter(15);
    }
  }

  return (
    <>
        <h3>counter : {counter}</h3>
        <button onClick={addValue}>addButton</button>
        <br />
        <button onClick={removeValue}>removeButton</button>

        <p>{counter}</p>

    </>
  )
}

export default App
