import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [city, setCity] = useState('India');
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '2cfd777325cf41a29a9135327240303';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&lang=5&key=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div>
      <h3 className="my-4">Weather Forecast</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </div>
          <div className="col-2 text-end">
            <button type="submit" className="btn btn-primary btn-sm">Get Weather</button>
          </div>
        </div>
      </form><br/>
      {weatherData && (
        <div className="row">
            <div className="col-6">
              <h4>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h4>
              <h5>{weatherData.location.tz_id}</h5>
              <h5>{weatherData.location.localtime}</h5>
              <span> Latitude: {weatherData.location.lat} | Longitude: {weatherData.location.lon}</span><br></br>
              <span> Temp C: {weatherData.current.temp_c} °C | Temp F: {weatherData.current.temp_f} °C</span>
            </div>
            <div className="col-6">
              <img src={weatherData.current.condition.icon} /><br></br>
              <span> Wind speed:	{weatherData.current.wind_mph} meters / sec</span><br></br>
              <span> Humidity:	{weatherData.current.humidity} %</span>
            </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
