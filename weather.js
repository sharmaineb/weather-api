async function getWeather(url) {
  const res = await fetch(url) 
  const json = await res.json() 
  console.log(json)
  const WeatherJson = {
      'name': json.name,
      'desc': json.weather[0].description,
      'temp': json.main.temp,
      'coordLat': json.coord.lat,
      'coordLon': json.coord.lon,
      'humidity': json.main.humidity,
      'pressure': json.main.pressure,
      'tempMax': json.main.temp_max,
      'tempMin': json.main.temp_min
  }
  return WeatherJson
}

async function getWeatherZip(apiKey, zip, units='imperial') {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&${units}`
  return getWeather(url)
}

async function getWeatherCity(apiKey, city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  return getWeather(url)
}

async function getWeatherGeo(apiKey, lat, lon, units='imperial') {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`
  return getWeather(url)
}


export {
  getWeatherZip,
  getWeatherCity,
  getWeatherGeo
}



