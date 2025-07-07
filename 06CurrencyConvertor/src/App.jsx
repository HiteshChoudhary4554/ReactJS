import { useState } from "react";
import "./App.css";
import InputBox from "./component/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [form, setForm] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(form);
  if (!currencyInfo || Object.keys(currencyInfo).length === 0) {
    return <h1 className="text-center text-xl font-bold mt-10">Loading...</h1>;
  }
  currencyInfo[form] = 1;
  currencyInfo[to] = 85.2;
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(form);
    setForm(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-cover bg-center min-h-screen">
        <div className="p-10 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 mt-[-10vh] bg-white/0 ">
        <form 
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
          <div className="relative">

            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setForm(currency)}
              selectCurrency={form}
              onAmountChange={(amount) => setAmount(amount)}
            />
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py pb-1 rounded shadow absolute top-1/2 left-1/2 -translate-1/2 active:bg-blue-500" 
            onClick={swap}>
              swap
            </button>
          </div>
          <br />
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow w-full active:bg-green-500">
            Convert {form} to {to}
          </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
