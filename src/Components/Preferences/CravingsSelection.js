import React from 'react';

const CravingsSelection = ({ onCravingsChange, cravings }) => {
  const cravingOptions = [
    { label: 'Spicy', icon: '🌶️' },
    { label: 'Sweet', icon: '🍯' },
    { label: 'Savory', icon: '🧄' },
    { label: 'Fresh', icon: '🥗' },
    { label: 'Rich', icon: '🧀' },
    { label: 'Light', icon: '🍃' }
  ];

  const isCravingsSelected = (option) => cravings === option;

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center text-center">
        <div className="p-2">
          <span className="text-4xl text-[#D2691E]">❤️</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4">What are you craving?</h2>
        <div className="grid grid-cols-2 gap-3 w-full">
          {cravingOptions.map((option) => (
            <div
              key={option.label}
              onClick={() => onCravingsChange(option.label)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${
                isCravingsSelected(option.label)
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

export default CravingsSelection;