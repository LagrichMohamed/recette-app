const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{recipe.label}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <img 
            className="w-full h-64 object-cover rounded-lg mb-6" 
            src={recipe.image} 
            alt={recipe.label}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Ingredients</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    {ingredient.text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Details</h3>
              <div className="space-y-4">
                {recipe.cuisineType && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Cuisine Type</h4>
                    <p className="text-gray-600 dark:text-gray-400 capitalize">{recipe.cuisineType.join(', ')}</p>
                  </div>
                )}
                
                {recipe.mealType && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Meal Type</h4>
                    <p className="text-gray-600 dark:text-gray-400 capitalize">{recipe.mealType.join(', ')}</p>
                  </div>
                )}
                
                {recipe.dishType && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Dish Type</h4>
                    <p className="text-gray-600 dark:text-gray-400 capitalize">{recipe.dishType.join(', ')}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Preparation Time</h4>
                  <p className="text-gray-600 dark:text-gray-400">{recipe.totalTime ? `${recipe.totalTime} minutes` : 'Not specified'}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">Calories</h4>
                  <p className="text-gray-600 dark:text-gray-400">{Math.round(recipe.calories)} kcal</p>
                </div>

                {recipe.dietLabels.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Diet</h4>
                    <div className="flex flex-wrap gap-2">
                      {recipe.dietLabels.map((label, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded text-sm">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {recipe.healthLabels.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300">Health Labels</h4>
                    <div className="flex flex-wrap gap-2">
                      {recipe.healthLabels.map((label, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded text-sm">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {recipe.url && (
            <div className="mt-6">
              <a
                href={recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                View Full Recipe Instructions
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
