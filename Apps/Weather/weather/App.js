import React, { useEffect } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'
import { useWeather } from './context/Weather'

export const App = () => {
    const weather = useWeather();

    useEffect(() => {
        weather.fetchCurrentLocationData();
    }, [])
  return (
    <div className='App'>
        <h1>Weather Forcast</h1>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
        <Card />
    </div>
  )
}
