import React, { useState } from 'react'

const Form = ({ track, setTrack}) => {
    const [totalAmt, setTotalAmt] = useState(0);
    const [inputValue, setInputValue] = useState(0); //validation state
    const total = parseInt(totalAmt);
    const value = parseInt(inputValue);
    const date = new Date().toLocaleString();

    const updateHandler = (e) => {
        setInputValue(e.target.value);
    }

    const addHandler = () => {
        setTotalAmt(total + value);
        setInputValue(0);

        setTrack([...track,
        {
            tDate: date,
            tTotal: total,
            tAddedAmount: value,
            tRemovedAmount: 0,
            tBalanceAmount: total + value
        }
        ])
    }

    const removeHandler = () => {
        setTotalAmt(total - value);
        setInputValue(0);

        setTrack([...track,
        {
            tDate: date,
            tTotal: total,
            tAddedAmount: 0 ,
            tRemovedAmount: value,
            tBalanceAmount: total - value
        }
        ])
    }

    
  return (
    <div className="container my-3">
        <div className="row">
            <div className="col col-md-5 m-md-auto">
                <div className="gutter-gap">
                    <h1 className="text-center border p-2">Expense Tracker - Basic</h1>
                    <form className="border p-2 mt-5">
                        <h3 className="text-center">Balance: {totalAmt}</h3>
                        <div className="form-group mb-3">
                            <input 
                                type="number" 
                                placeholder="Enter Ammount"
                                className="form-control text-center" 
                                value={inputValue}
                                onChange={updateHandler}
                            />
                        </div>
                        <div className="mb-3 text-center">
                            <button type='button' className="btn btn-success border rounded-0 mr-2" onClick={addHandler}>ADD</button>
                            <button type='button' className="btn btn-danger border rounded-0 me-2" onClick={removeHandler}>REMOVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form