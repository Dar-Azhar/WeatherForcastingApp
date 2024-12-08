import React from 'react'

import { useWeather } from '../context/Weather'

export const Card = () => {
    const weather = useWeather()
  return (
    <div className='card'>
        <img src={weather.weatherData?.current?.condition?.icon} alt="weather"/>
        <h2>{weather.weatherData?.current?.temp_c}. C</h2>
        <h5>{weather.weatherData?.location?.name}, {weather.weatherData?.location?.region}, {weather.weatherData?.location?.country}</h5>
    </div>
  )
}
