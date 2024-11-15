const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover" 
        src={recipe.image} 
        alt={recipe.label} 
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-4 text-gray-800">{recipe.label}</h2>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700 mb-2">Ingrédients:</h3>
          <ul className="text-gray-600 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                {ingredient.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;