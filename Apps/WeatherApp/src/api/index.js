const API_KEY = ``
//Insert your api key of openweathermap

const baseURL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

export const getWeatherDataForCity = async (location) => {
    const response = await fetch(`${baseURL}&q=${location}`
    )
    return await response.json();
}

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&lat=${lat}&lon=${lon}`
    )
    return await response.json();
}
