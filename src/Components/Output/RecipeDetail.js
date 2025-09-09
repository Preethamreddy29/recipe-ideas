import React from 'react';

const RecipeDetail = ({ recipe, onGoBack }) => {
  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] max-w-4xl w-full mx-auto border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 rounded-full bg-[#D2691E] bg-opacity-10 mb-4">
          <span className="text-4xl text-[#D2691E]">👨‍🍳</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4A2C2A] mb-4">{recipe.title}</h2>
      </div>

      <div className="mb-8 p-4 rounded-lg bg-[#E6F3E6] border-2 border-[#D2B48C] text-sm text-center font-medium text-gray-700">
        <p>This {recipe.title} is perfect for a cozy moment! 🎉</p>
      </div>

      <div className="flex items-center justify-center space-x-6 text-gray-600 mb-8">
        <span className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{recipe.time}</span>
        </span>
        <span className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h-4a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v11a2 2 0 01-2 2z" /></svg>
          <span>{recipe.servings}</span>
        </span>
        <span className="flex items-center space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2-2m0 0l2-2m-2 2l-2 2m2-2l2-2m-2-2l-2 2m2 2l2-2m-2-2l-2 2m2 2l2-2" /></svg>
          <span>{recipe.ingredientsCount}</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white bg-opacity-80 rounded-xl border-2 border-[#D2B48C] shadow-sm">
          <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">Ingredients You Have</h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-sm">{ingredient}</span>
                <span className="text-green-500">✓ Have It</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white bg-opacity-80 rounded-xl border-2 border-[#D2B48C] shadow-sm">
          <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">Optional Ingredients</h3>
          <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700">
            {recipe.optionalIngredients?.map((ingredient, index) => (
              <li key={index} className="text-sm">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6 bg-white bg-opacity-80 rounded-xl border-2 border-[#D2B48C] shadow-sm mb-8">
        <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">Cooking Instructions</h3>
        <ul className="space-y-4 text-gray-700">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="flex items-center justify-center h-6 w-6 bg-[#D2691E] text-white rounded-full font-bold text-xs">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed">{instruction}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 bg-white bg-opacity-80 rounded-xl border-2 border-[#D2B48C] shadow-sm mb-8">
        <h3 className="text-xl font-bold text-[#4A2C2A] mb-4">Nutritional Info</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#D2691E]">{recipe.nutritionalInfo.calories}</p>
            <p className="text-sm text-gray-600">Calories</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#D2691E]">{recipe.nutritionalInfo.protein}</p>
            <p className="text-sm text-gray-600">Protein</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#D2691E]">{recipe.nutritionalInfo.carbs}</p>
            <p className="text-sm text-gray-600">Carbs</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#D2691E]">{recipe.nutritionalInfo.fat}</p>
            <p className="text-sm text-gray-600">Fat</p>
          </div>
        </div>
      </div>

      <button
        onClick={onGoBack}
        className="mt-8 w-full p-4 bg-[#D2691E] hover:bg-[#B85C1A] text-white text-lg font-bold rounded-lg transition-all duration-200 shadow-lg"
      >
        Go Back
      </button>
    </div>
  );
};

export default RecipeDetail;