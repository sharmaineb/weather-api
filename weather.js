async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Sorry, Failed to fetch data');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Sorry, Failed to fetch weather data');
  }
}

async function getWeatherZip(apiKey, zip, units = 'imperial') {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  return getWeather(apiKey, url);
}

async function getWeatherCity(apiKey, city, units = 'imperial') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  return getWeather(apiKey, url);
}

async function getWeatherGeo(apiKey, lat, lon, units = 'imperial') {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  return getWeather(apiKey, url);
}

async function getWeather(apiKey, url) {
  try {
    const data = await fetchWeatherData(url);

    return {
      name: data.name,
      description: data.weather[0].description,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      coordLat: data.coord.lat,
      coordLon: data.coord.lon,
    };
  } catch (error) {
    throw new Error('Sorry, Failed to get weather information');
  }
}

export { 
  getWeatherZip, 
  getWeatherCity, 
  getWeatherGeo 
};



