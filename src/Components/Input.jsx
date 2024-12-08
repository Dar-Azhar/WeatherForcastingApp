import React from 'react'
import '../App.css';
import {useWeather} from '../context/Weather'

export const Input = () => {
    const weather = useWeather();
  return (
    <div className='input-field'>
        <input type="text" 
        placeholder='Search Here'
        value = {weather.searchCity}
        onChange={(e)=> weather.setSearchCity(e.target.value)}
        />
    </div>
  )
}
