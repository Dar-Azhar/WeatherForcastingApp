import './App.css';
import { useEffect } from 'react';
import { Button } from './Components/Button'
import { Card } from './Components/Card'
import { Input } from './Components/Input'
import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather()
  useEffect(() => {
    weather.fetchCurrentUserData()

    return

  }, [])

  return (
    <div className="App">
      <h1>Weather Forcast </h1>
      <div className="input">
        <Input />
        <Button value="Search" onClick={weather.fetchData} />
      </div>
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
