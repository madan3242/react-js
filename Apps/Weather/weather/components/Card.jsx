import React from 'react'
import { useWeather } from '../context/Weather'

export const Card = () => {
    const weather = useWeather();
  return (
    <div className="card">
        {JSON.stringify(weather)}
    </div>
  )
}