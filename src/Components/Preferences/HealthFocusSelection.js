import React from 'react';

const HealthFocusSelection = ({ onHealthModeChange, healthMode }) => {
  const healthModes = [
    { label: 'Balanced', sub: 'Well-rounded nutrition' },
    { label: 'High Protein', sub: 'Protein-focused meal' },
    { label: 'Low Carb', sub: 'Minimal carbohydrates' },
    { label: 'Plant-Based', sub: 'Vegetarian/vegan options' },
  ];

  const isHealthModeSelected = (mode) => healthMode === mode;

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full bg-[#32CD32] bg-opacity-10 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c-3.196 0-6.233 1.258-8.495 3.52C1.258 8.167 0 11.204 0 14.4c0 3.284 1.157 6.438 3.52 8.495s5.211 3.52 8.495 3.52c3.196 0 6.233-1.258 8.495-3.52s3.52-5.211 3.52-8.495c0-3.284-1.157-6.438-3.52-8.495z" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">Health focus?</h2>
        <div className="flex flex-col space-y-3 w-full">
          {healthModes.map((mode) => (
            <div
              key={mode.label}
              onClick={() => onHealthModeChange(mode.label)}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isHealthModeSelected(mode.label) ? 'border-[#32CD32] bg-[#32CD32] bg-opacity-20' : 'border-[#D2B48C] hover:bg-gray-50'
              }`}
            >
              <h3 className="text-sm font-bold text-[#32CD32]">{mode.label}</h3>
              <p className="text-xs text-gray-700 mt-0.5">{mode.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthFocusSelection;