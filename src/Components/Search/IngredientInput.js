import React, { useState } from 'react';

const IngredientInput = ({ ingredients, onIngredientsChange, onRemoveIngredient, onNext }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddIngredient = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !ingredients.includes(trimmedValue)) {
      onIngredientsChange([...ingredients, trimmedValue]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddIngredient();
    }
  };

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">What's in your kitchen?</h2>
      <div className="flex items-center space-x-4 mb-4">
        <input
          type="text"
          className="flex-1 p-3 sm:p-4 rounded-xl border-2 border-[#D2B48C] focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-200 text-gray-800 text-base sm:text-lg placeholder:text-gray-600 bg-white bg-opacity-50"
          placeholder="Add an ingredient..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleAddIngredient}
          className="p-3 sm:p-4 bg-[#D2691E] hover:bg-[#B85C1A] text-white rounded-xl transition-all duration-200 shadow-md transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium"
          disabled={!inputValue.trim()}
        >
          Add
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-[#4A2C2A] font-medium text-lg sm:text-xl mb-3">Your ingredients:</h3>
        <div className="flex flex-wrap gap-2 min-h-[40px]">
          {ingredients.map((ingredient, index) => (
            <span
              key={index}
              className="flex items-center space-x-2 bg-[#D2B48C] text-[#4A2C2A] text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-medium"
            >
              <span>{ingredient}</span>
              <button
                onClick={() => onRemoveIngredient(ingredient)}
                className="text-[#D2691E] hover:text-[#B85C1A] focus:outline-none"
              >
                <span className="text-xl font-bold">&times;</span>
              </button>
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full p-4 bg-[#D2691E] hover:bg-[#B85C1A] text-white text-lg sm:text-xl font-bold rounded-lg transition-all duration-200 shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

export default IngredientInput;