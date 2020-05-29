import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import Weather from './weather';

export default (props) => {
  const [weather, setWeather] = useState(null)
  console.log('query', props.query);
  const API_KEY = "e1dc2085d5a9112b2579772c4e3637ba";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.query}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      await Axios.get(url)
        .then(result => {
          props.setTemperature(
            result.data.main.temp,
          );
          setWeather({
            city: result.data.name,
            temperatur: result.data.main.temp,
            description: result.data.weather[0].description,
          })
        })
        .catch(error => {
          console.log('Felmeddelande');
        })
    };

    if (props.query.length > 0) {
      getData();
    }
  }, [props.query]);



  return (<>
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
