import React, { useState } from 'react';
import './App.css';
import RecipeApi from './component/recipeApi'
import Recipes from './component/recipes'
import Form from './component/form'
import Weather from './component/weather'


function App() {
  const [recipes, setRecipes] = useState([])
  const [weather, setWeather] = useState([])

  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e1dc2085d5a9112b2579772c4e3637ba`)
    .then(res => res.json())
    .then(data => data)
    setWeather( {
      city: apiData.name, 
      temperatur: apiData.main.temp,
      description: apiData.weather[0].description,
      error: ''

    }
    )
  }
 
  return (
    <div className="App">
      <Recipes recipes={recipes}/>
      <RecipeApi warm={weather} setRecipes={setRecipes}/>
      <Form getWeather={fetchData} />
      <Weather 
      city={weather.city}
      temperatur={weather.temperatur}
      description={weather.description}
      error={weather.error}  />
      {console.log(weather)}
    </div>
  );
}

export default App;
