import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const APP_ID = 'f6e293cd';
const APP_KEY = '1439b2a6235d3c55867d02dec4725ff6';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log('Recipe data:', data.hits[0]?.recipe); // Log first recipe to see structure
    setRecipes(data.hits.map(hit => hit.recipe));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto relative">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute right-4 top-0 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          Delicious Recipes
        </h1>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12">
          <div className="flex gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for recipe..."
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 shadow-sm focus:outline-none focus:border-blue-500 transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-sm transition-colors duration-200"
            >
              Search
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