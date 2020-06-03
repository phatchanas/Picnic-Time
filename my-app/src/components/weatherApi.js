import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Weather from './weather';

export default (props) => {
  const [weather, setWeather] = useState(null)
  const API_KEY = "e1dc2085d5a9112b2579772c4e3637ba";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      await Axios.get(url)
        .then(result => {
          console.log(result);
          props.setTemperature(
            result.data.main.temp,
          );
          setWeather({
            city: result.data.name,
            country: result.data.sys.country,
            temperatur: result.data.main.temp,
            description: result.data.weather[0].description,
          });
        })
        .catch(error => {
          setWeather({
            city: null, 
            country: null,
            temperatur: null,
            description: null,
            error: 'Ops this city doesnt seems to exist'
          });
    });
  };

    if (props.city.length > 0) {
      getData();
    }

  }, [props.city, props.country]);

  return (
  <>
    {weather &&
      <Weather
        city={weather.city}
        country={weather.country}
        temperatur={weather.temperatur}
        description={weather.description}
        error={weather.error}
      />
    }
  </>)

}
