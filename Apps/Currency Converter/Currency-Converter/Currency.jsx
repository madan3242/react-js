import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyOptions from "./CurrencyOptions";

const Currency = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [currencyName, setCurrencyName] = useState({});

  useEffect(() => {
    axios.get(`https://api.frankfurter.app/currencies`).then((res) => {
      let data = res.data;
      setCurrencyOptions(Object.keys(data));
      setFromCurrency(Object.keys(data)[0]);
      setToCurrency(Object.keys(data)[0]);
      setCurrencyName(data);
    });
  }, []);

  useEffect(() => {
    if (parseInt(fromAmount) === 0) {
      setToAmount(0);
    } else if (fromAmount === "") {
      setToAmount("");
    } else if (fromCurrency === toCurrency) {
      setToAmount(fromAmount);
    } else {
      fetch(
        `https://api.frankfurter.app/latest?ammount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setToAmount(Object.values(data.rates)[0]));
    }
  }, [fromCurrency, toCurrency, fromAmount, toAmount]);
  return (
    <div className="container">
      <div className="grid-container">
        <div className="grid-item1 text-center">
          <h1>Currency Converter</h1>
        </div>
        <div className="grid-item2">
          <h2 className="fromto-title">From Currency:</h2>
          <CurrencyOptions 
                    currencyOptions={currencyOptions} 
                    prop='from currency' 
                    updateHandler={((e) => setFromCurrency(e.target.value))} 
                />
          <p className="currecyFullname my-3">
            Enter Amount In: {currencyName[`${fromCurrency}`]}
          </p>
          <div className="amountInput fromAmout">
            <input
              type="number"
              className="form-control border-0 runded-0"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="grid-item3">
          <h2 className="fromto-title">To Currency:</h2>
          <CurrencyOptions
            currencyOptions={currencyOptions}
            prop="to currency"
            updateHandler={(e) => setToCurrency(e.target.value)}
          />
          <p className="currencyFullname my-3">
            Enter Amount In: {currencyName[`${toCurrency}`]}
          </p>
          <div className="amountInput toAmount">
            <input
              type="number"
              className="form-control border-0 rounded-0"
              value={toAmount}
              readOnly
              autoComplete="off"
              onChange={(e) => setToAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="grid-item4">
          <h2 className="Final-result text-center mt-4">
            {fromAmount} {fromCurrency} = {fromAmount === toAmount ? toAmount : fromAmount * toAmount} {toCurrency}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Currency;
