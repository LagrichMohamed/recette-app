import React, { useState } from 'react';
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
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Recettes Délicieuses
        </h1>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une recette..."
              className="flex-1 border-2 border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-sm transition-colors duration-200"
            >
              Rechercher
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;