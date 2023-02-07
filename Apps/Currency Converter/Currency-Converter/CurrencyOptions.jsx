import React from 'react'

const CurrencyOptions = ({ currencyOptions, prop, updateHandler}) => {
    // const Options = currencyOptions.map((data, index) => {
    //     return <option key={index} value={data}>{data}</option>
    // })
  return (<>
    <div className="selectOptions mt-3">
    {currencyOptions.length > 0 ? 
        <select 
            className="form-select border-0 runded-0" 
            onChange={updateHandler}
        >
            {
                currencyOptions.map((data, index) => {
                    return <option key={index} value={data}>{data}</option>
                })
            }
        </select> : <p>Loading...</p>}
    {/* {Options.length === 0 ? <p>Loading...</p> : <select className="form-select border-0 runded-0" onChange={updateHandler}>{Options}</select> } */}
    </div>
  </>)
}

export default CurrencyOptions