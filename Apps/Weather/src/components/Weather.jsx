import Axios from 'axios'
import React, {useState} from 'react'
import './css/Weather.css'
import WeatherCard from './WeatherCard'

const Weather = () => {
    const [location, setLocation]=useState("")
    const [weather, setWeather]=useState({})
    
    const getWeather = () => {
        let API_KEY = ''
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`

        Axios.post(URL)
             .then(res => {
                setWeather(res.data)
                // console.log(res.data);
             })
             .catch(() => {
                console.log('Incorrect');
             })
    }

    const search = (e) => {
        if(e.key === 'Enter'){
            getWeather();
        }
    }

  return (
    <div className="bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="form-group">
                        <input className="form-control p-4" type="text" placeholder="Enter your city name" onChange={e => setLocation(e.target.value)} onKeyDown={search}/>
                    </div>
                </div>
            </div>
        </div>
        {
        Object.keys(weather).length > 0 ? <>
            <WeatherCard weather={weather} />
        </> : <></>
        }
    </div>
  )
}

export default Weather