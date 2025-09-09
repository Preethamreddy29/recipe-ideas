import React from 'react';

const StomachFeelSelection = ({ onStomachFeelChange, stomachFeel }) => {
  const stomachOptions = [
    { label: 'Light', icon: '🌿' },
    { label: 'Heavy', icon: '🍲' },
    { label: 'No Issues', icon: '😊' }
  ];

  const isStomachSelected = (option) => stomachFeel === option;

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4">How your stomach feels?</h2>
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {stomachOptions.map((option) => (
            <div
              key={option.label}
              onClick={() => onStomachFeelChange(option.label)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${
                isStomachSelected(option.label)
                  ? 'border-[#D2691E] bg-[#D2691E] bg-opacity-20'
                  : 'border-[#D2B48C] hover:bg-gray-50'
              }`}
            >
              <div className="text-3xl mb-1">{option.icon}</div>
              <p className="font-bold text-sm text-[#4A2C2A]">{option.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StomachFeelSelection;