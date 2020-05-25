import React, { useState } from 'react';
import './App.css';
import RecipeApi from './component/recipeApi'
import Recipes from './component/recipes'


function App() {
  const [recipes, setRecipes] = useState([])
  const [weather, setWeather] = useState('warm')
 
  return (
    <div className="App">
      <Recipes recipes={recipes}/>
      <RecipeApi warm={weather} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
