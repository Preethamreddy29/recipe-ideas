import React from 'react';

const RecipeCard = ({ recipe, onSelectRecipe, currentNumber, totalNumber }) => {
  const getEffortColor = (effort) => {
    switch (effort.toLowerCase()) {
      case 'easy':
        return 'bg-green-400';
      case 'medium':
        return 'bg-yellow-400';
      case 'high':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-sm text-gray-700 font-bold mb-2">
        {currentNumber} of {totalNumber}
      </div>
      <div 
        className="p-4 bg-white bg-opacity-80 rounded-2xl shadow-lg cursor-pointer transition-all duration-200 transform hover:scale-105 w-full max-w-sm"
        onClick={() => onSelectRecipe(recipe)}
      >
        <div className="relative mb-4">
          <div className="w-full h-48 bg-[#D2B48C] rounded-xl flex items-center justify-center">
            <span className="text-6xl text-white">🥣</span>
          </div>
          <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white font-bold text-xs ${getEffortColor(recipe.effortLevel)}`}>
            {recipe.effortLevel}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#4A2C2A] mb-2 text-center">{recipe.title}</h3>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3 text-center">{recipe.description}</p>
        <div className="flex items-center justify-center space-x-4 text-gray-600 text-xs">
          <span className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{recipe.time}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-4a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v11a2 2 0 01-2 2z" /></svg>
            <span>{recipe.servings}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2-2m-2-2l-2 2m2 2l2-2m-2-2l-2 2m2 2l2-2" /></svg>
            <span>{recipe.ingredientsCount}</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {recipe.usingIngredients?.map((ingredient, index) => (
            <span key={index} className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
              {ingredient}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;