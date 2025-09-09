import React from 'react';

const MealandNotes = ({ mealType, onMealTypeChange, specificNotes, onSpecificNotesChange, onFindRecipes }) => {
  const mealTypes = [
    { label: 'Breakfast', icon: '🍳' },
    { label: 'Lunch', icon: '🥪' },
    { label: 'Dinner', icon: '🍽️' },
    { label: 'Snack', icon: '🍎' },
  ];

  const handleMealTypeClick = (type) => {
    onMealTypeChange(type);
  };

  const isMealTypeSelected = (type) => mealType === type;

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full bg-[#D2691E] bg-opacity-10 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D2691E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18M3 8h18M3 18h18" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">What kind of dish is it?</h2>
        <div className="grid grid-cols-2 gap-3 w-full">
          {mealTypes.map((type) => (
            <div
              key={type.label}
              onClick={() => handleMealTypeClick(type.label)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${
                isMealTypeSelected(type.label) ? 'border-[#D2691E] bg-[#D2691E] bg-opacity-20' : 'border-[#D2B48C] hover:bg-gray-50'
              }`}
            >
              <div className="text-3xl mb-1">{type.icon}</div>
              <p className="font-bold text-sm text-[#4A2C2A]">{type.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">Specific notes?</h2>
          <textarea
            id="specific-notes"
            className="w-full p-3 border-2 border-[#D2B48C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] transition-all duration-200 text-gray-800 text-sm sm:text-base placeholder:text-gray-400 bg-white bg-opacity-50"
            rows="4"
            placeholder="e.g., make it gluten-free, no onions, etc."
            value={specificNotes}
            onChange={(e) => onSpecificNotesChange(e.target.value)}
          />
        </div>

        <button
          onClick={onFindRecipes}
          className="mt-8 w-full p-4 bg-[#D2691E] hover:bg-[#B85C1A] text-white text-lg sm:text-xl font-bold rounded-lg transition-all duration-200 shadow-lg"
        >
          Find Recipes
        </button>
      </div>
    </div>
  );
};

export default MealandNotes;