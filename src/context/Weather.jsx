import React, { createContext, useContext, useState } from "react";
import { getWeatherForCity, getWeatherForLocation } from '../Api/Index'
const weatherContext = createContext();

export const useWeather = () => {
    return useContext(weatherContext);
}

export const WeatherProvider = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [searchCity, setSearchCity] = useState(null)

    const fetchData = async () => {
        const response = await getWeatherForCity(searchCity);
        setWeatherData(response);
    }

    const fetchCurrentUserData = () => {
        navigator.geolocation.getCurrentPosition((position) =>
            getWeatherForLocation(position.coords.latitude, position.coords.longitude).then(data => setWeatherData(data))
        );
    }
    return (
        <weatherContext.Provider value={{ weatherData, searchCity, setSearchCity, fetchData, fetchCurrentUserData }} >
            {props.children}
        </weatherContext.Provider>
    )
}
