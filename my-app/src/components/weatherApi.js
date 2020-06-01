import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Weather from './weather';

export default (props) => {
  const [weather, setWeather] = useState(null)
  const API_KEY = "e1dc2085d5a9112b2579772c4e3637ba";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      console.log('city', props.city, 'coutrny',props.country);
      await Axios.get(url)
        .then(result => {
          props.setTemperature(
            result.data.main.temp,
          );
          setWeather({
            city: result.data.name,
            temperatur: result.data.main.temp,
            description: result.data.weather[0].description,
          });
        })
        .catch(error => {
          setWeather({
            city: null, 
            temperatur: null,
            description: null,
            error: 'Ops this city doesnt seems to exist'
          });
    });
  };

    if (props.city.length > 0) {
      getData();
    }

  }, [props.city]);

  return (
  <>
    {weather &&
      <Weather
        city={weather.city}
        temperatur={weather.temperatur}
        description={weather.description}
        error={weather.error}
      />
    }
  </>)

}
