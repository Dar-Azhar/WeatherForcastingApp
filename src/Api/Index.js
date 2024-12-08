const baseURL = 'https://api.weatherapi.com/v1/current.json?key=e41a1977999742f6ad3164154241211'
export const getWeatherForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWeatherForLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat}, ${lon}&aqi=yes`)
    return await response.json();
}
