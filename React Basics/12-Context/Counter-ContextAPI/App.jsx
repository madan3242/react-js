import React, { useContext } from 'react'
import { Counter } from './components/Counter'
import { CounterContext } from './context/Counter'

export const App = () => {
    const counterState = useContext(CounterContext);
    console.log(counterState);
  return (
    <div>
        <div className="text-center">
            <h1>Count is {counterState.count}</h1>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    </div>
  )
}