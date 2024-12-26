import { useState } from 'react';
import RecipeModal from './RecipeModal';

const RecipeCard = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img 
          className="w-full h-48 object-cover" 
          src={recipe.image} 
          alt={recipe.label} 
        />
        <div className="p-6">
          <h2 className="font-bold text-xl mb-4 text-gray-800 dark:text-gray-100">{recipe.label}</h2>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Ingredients:</h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-1">
              {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {ingredient.text}
                </li>
              ))}
              {recipe.ingredients.length > 3 && (
                <li className="text-blue-500 dark:text-blue-400">
                  +{recipe.ingredients.length - 3} more ingredients...
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {showModal && (
        <RecipeModal 
          recipe={recipe} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default RecipeCard;