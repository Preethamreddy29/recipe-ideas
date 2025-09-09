import React from 'react';

const TimeSelection = ({ onTimeChange, cookingTime }) => {
  const times = [
    { label: '15 minutes', sub: 'Quick & easy' },
    { label: '30 minutes', sub: 'Balanced cooking' },
    { label: '45 minutes', sub: 'Take your time' },
    { label: '1+ hours', sub: 'Cooking adventure' },
  ];

  const isTimeSelected = (selectedTime) => cookingTime && cookingTime.toLowerCase().includes(selectedTime.toLowerCase());

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center">
        <div className="p-2 rounded-full bg-[#D2691E] bg-opacity-10 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#D2691E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">How much time do you have?</h2>
        <div className="flex flex-col space-y-3 w-full">
          {times.map((time, index) => (
            <div
              key={index}
              onClick={() => onTimeChange(time.label)}
              className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isTimeSelected(time.label) ? 'border-[#D2691E] bg-[#D2691E] bg-opacity-20' : 'border-[#D2B48C] hover:bg-gray-50'
              }`}
            >
              <h3 className="text-sm font-bold text-[#4A2C2A]">{time.label}</h3>
              <p className="text-xs text-gray-700 mt-0.5">{time.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSelection;