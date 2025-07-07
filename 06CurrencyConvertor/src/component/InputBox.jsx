import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {

  const amountInputId = useId()
  return (
    <>
      <div className="border flex bg-white p-2 py-3 w-120 rounded mb-2">
        <div className="w-1/2">
          <label htmlFor={amountInputId} className="block text-gray-400 text-lg font-medium mb-1 ml-2 mb-3.5">
            {label}
          </label>
          <input
            id={amountInputId}
            type="number"
            placeholder="Amount"
            value={amount}
            disabled={amountDisable}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            className="outline-none ml-2 w-full text-black"
          />
        </div>
        <div className=" flex flex-col w-1/2 text-end items-end">
          <span className="block text-gray-400 text-lg font-medium mb-1 mb-3">
            Currency Type
          </span>
          <select
            className="ml-2 text-black bg-gray-100 rounded px-2 py-1 outline-none w-20 font-mediaum"
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
