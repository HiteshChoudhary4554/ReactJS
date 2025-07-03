import { useState, useCallback,useEffect } from "react";
import "./App.css";

function App() {
 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed  ] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str+="0123456789";
      if (charAllowed) str+="!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

      for (let i = 1; i <= length; i++) {
        let index = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(index);
      }

      setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center text-white">
        <div className="bg-gray-700 rounded px-7 py-4 mt-10">
          <h2 className="text-white text-center mb-3 text-lg">
            Password generator
          </h2>
          <div
            style={{ backgroundColor: "white" }}
            className="w-[400px] h-8 rounded-md flex items-center"
          >
            <input
              type="text"
              value={password}
              placeholder="password"
              className="text-red outline-none text-orange-500 text-[20px] pl-3 w-full rounded-l-md"
              readOnly
            />
            <button className="bg-blue-500 w-[60px] h-full rounded-r-md pb-1">
              copy
            </button>
          </div>
          <div className="flex justify-between items-center mt-3 h-[40px] text-amber-600">
            <input
              type="range"
              className="cursor-pointer accent-blue-500"
              min={6}
              max={100}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label className="ml-[-13px]">Length:({length})</label>
            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="accent-blue-500"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />{" "}
              <label className="ml-0.3">Number</label>{" "}
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                className="accent-blue-500"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />{" "}
              <label className="ml-0.4">Character</label>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
