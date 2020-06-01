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
  const [country, setCountry] = useState('');
  
  let startVariable = '';
  
  if (localStorage.getItem('city') === null){
    startVariable = '';
  } else {
    startVariable = localStorage.getItem('city');
  }
  
  const [city, setCity] = useState(startVariable);
 
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
