import React, { useState } from 'react';
import './App.css';
import RecipeApi from './components/recipeApi'
import Recipes from './components/recipes'
import Form from './components/form'
import Weather from './components/weather'
import Header from './components/header'


function App() {
  const [recipes, setRecipes] = useState([])
  const [weather, setWeather] = useState({})

  async function fetchData(e) {
    e.preventDefault()
    const city = e.target.elements.city.value
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e1dc2085d5a9112b2579772c4e3637ba`)
    .then(res => res.json())
    .then(data => setWeather( {
      city: data.name, 
      temperatur: data.main.temp,
      description: data.weather[0].description,
      error: false
    }))
    .catch(error => {
      console.warn(error)
      setWeather( {
        city: null, 
        temperatur: null,
        description: null,
        error: 'Ops this city doesnt seems to exist'
    })
    
  })
}
 
  return (
    <div className="App">
      <Header/>
      <RecipeApi temperatur={weather.temperatur} setRecipes={setRecipes}/>
      <Form getWeather={fetchData} />
      <Weather 
      city={weather.city}
      temperatur={weather.temperatur}
      description={weather.description}
      error={weather.error}  />
      {!weather.error && <Recipes recipes={recipes}/>}
    </div>
  );
}

export default App;
