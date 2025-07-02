import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState("green");

  return (
   <>
      <div className="w-screen h-screen p-4 flex flex-col justify-end items-center" style={{backgroundColor:color}} >
          <div className="border-2 flex justify-center items-center gap-5 px-5 py-2 bg-white text-white rounded-full">
            <button style={{backgroundColor: "green"}} className="outline-none iteam px-4 py-[2px] rounded-full cursor-pointer pb-1" onClick={() => setColor("green")}>Green</button>
            <button style={{backgroundColor: "yellow"}} className="outline-none iteam px-4 py-[2px] rounded-full cursor-pointer pb-1 text-black" onClick={() => setColor("yellow")}>Yellow</button>
            <button style={{backgroundColor: "red"}} className="outline-none iteam px-4 py-[2px] rounded-full cursor-pointer pb-1" onClick={() => setColor("red")}>Red</button>
            <button style={{backgroundColor: "blue"}} className="outline-none iteam px-4 py-[2px] rounded-full cursor-pointer pb-1" onClick={() => setColor("blue")}>Blue</button>
            <button style={{backgroundColor: "orange"}} className="outline-none iteam px-4 py-[2px] rounded-full cursor-pointer pb-1" onClick={() => setColor("orange")}>Orange</button>
            <button style={{backgroundColor: "pink"}} className="outline-none iteam px-4 py-[2px] rounded-full cursor-pointer pb-1 text-black" onClick={() => setColor("pink")}>Pink</button>
          </div>
      </div>
   </>
  )
}

export default App
