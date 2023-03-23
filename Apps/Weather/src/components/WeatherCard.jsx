import React from 'react'

const WeatherCard = (props) => {
    let weather = props.weather;
    const icon = weather.weather[0].icon;
    const url = `http://openweathermap.org/img/w/${icon}.png`
    return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card">
                            <pre>{JSON.stringify(weather)}</pre>
                            <img className="mx-auto" src={url} alt="" width="80px" />
                            <h2 className="mx-auto">{weather.name} {weather.sys.country}</h2>
                            {/* <h2 className="mx-auto">Weather: {weather.weather[0].description}</h2> */}
                            <h2 className="mx-auto">Temprature: {weather.main.temp}°C</h2>
                            <h2 className="mx-auto">Humidity: {weather.main.humidity}% </h2>
                            <h2 className="mx-auto">Wind speed: {weather.wind.speed}Km/h</h2>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WeatherCard