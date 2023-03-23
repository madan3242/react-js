import React, { useEffect } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { useWeather } from './context/Weather'

const App = () => {
    const weather = useWeather();

    useEffect(() => {
        weather.fetchCurrentLocationData();
    }, [])
  return (
    <div className='bg'>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <h1 className="heading">Weather Forcast</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto pb-2 d-flex">
              <Input />
              <Button onClick={weather.fetchData} value="Search" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App