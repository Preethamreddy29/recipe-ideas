import React from 'react';

const EffortSelection = ({ onEffortChange, effort }) => {
  const effortLevels = [
    { label: 'Minimal', sub: 'Simple preparation' },
    { label: 'Moderate', sub: 'Some cooking involved' },
    { label: 'High', sub: 'Full cooking experience' },
  ];

  const isEffortSelected = (level) => effort === level;

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full bg-[#D2691E] bg-opacity-10 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D2691E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">How much effort today?</h2>
        <div className="flex flex-col space-y-3 w-full">
          {effortLevels.map((level) => (
            <div
              key={level.label}
              onClick={() => onEffortChange(level.label)}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isEffortSelected(level.label) ? 'border-[#D2691E] bg-[#D2691E] bg-opacity-20' : 'border-[#D2B48C] hover:bg-gray-50'
              }`}
            >
              <h3 className="text-sm font-bold text-[#4A2C2A]">{level.label}</h3>
              <p className="text-xs text-gray-700 mt-0.5">{level.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EffortSelection;