import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
const APP_ID = 'f6e293cd';
const APP_KEY = '1439b2a6235d3c55867d02dec4725ff6';
const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const fetchRecipes = async () => {
  const response = await fetch(
  `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits.map(hit => hit.recipe));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
    };
    return (
      <div className="App">
      <form onSubmit={handleSearch} className="m-4 ">
      <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Rechercher une recette..."
      className="border-2 border-gray-300 rounded p-2 mr-2"
      />
      <button
      type="submit"
      className="bg-blue-500 text-white p-2 rounded"
      >
      Rechercher
      </button>
      </form>
      <div className="grid grid-cols-3 gap-4">
      {recipes.map((recipe, index) => (
      <RecipeCard key={index} recipe={recipe} />
      ))}
      </div>
      </div>
    );
};
export default App;