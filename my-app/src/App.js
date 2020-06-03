import React, { useState } from 'react';
import './App.css';
import RecipeApi from './components/recipeApi'
import Recipes from './components/recipes'
import Form from './components/form'
import Header from './components/header'
import WeatherApi from './components/weatherApi'

function App() {
  const [recipes, setRecipes] = useState([])
  const [temperature, setTemperature] = useState('')
  
  let startCityVariable = '';
  let startCountryVariable = '';
  
  if (localStorage.getItem('city') === null){
    startCityVariable = '';
    startCountryVariable = '';
  } else {
    startCityVariable = localStorage.getItem('city');
    startCountryVariable = localStorage.getItem('country');
  }
  
  const [country, setCountry] = useState(startCountryVariable);
  const [city, setCity] = useState(startCityVariable);

  return (
    <div className="App">
      <Header />
      <RecipeApi temperature={temperature} setRecipes={setRecipes} />
      <Form setCity={setCity} setCountry={setCountry}/>
      <WeatherApi city={city} country={country} setTemperature={setTemperature}/>
      {temperature && <Recipes recipes={recipes} />}
    </div>
  );
}

export default App;
