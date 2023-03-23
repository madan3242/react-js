import React from 'react'
import { useWeather } from '../context/Weather'

export const Input = () => {
    const weather = useWeather();
  return (
      <input 
          className="form-control p-2"
          placeholder="Search here"
          value={weather.searchCity}
          onChange={(e) => weather.setSearchCity(e.target.value)}
          type="text" 
      />
  )
}