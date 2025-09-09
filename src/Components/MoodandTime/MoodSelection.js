import React from 'react';

const getMoodColor = (mood, type) => {
  switch (mood) {
    case 'Energetic':
      return type === 'bg' ? 'rgba(255, 255, 204, 0.7)' : '#FFD700';
    case 'Relaxed':
      return type === 'bg' ? 'rgba(204, 255, 204, 0.7)' : '#32CD32';
    case 'Adventurous':
      return type === 'bg' ? 'rgba(230, 230, 250, 0.7)' : '#8A2BE2';
    case 'Comfort':
      return type === 'bg' ? 'rgba(255, 228, 196, 0.7)' : '#FF8C00';
    default:
      return 'transparent';
  }
};

const MoodSelection = ({ onMoodChange, mood }) => {
  const moods = [
    { label: 'Energetic', icon: '⚡' },
    { label: 'Relaxed', icon: '🧘' },
    { label: 'Adventurous', icon: '🚀' },
    { label: 'Comfort', icon: '🏠' },
  ];

  const isMoodSelected = (selectedMood) => mood && mood.toLowerCase() === selectedMood.toLowerCase();

  return (
    <div className="bg-white bg-opacity-70 p-4 rounded-[2rem] border-2 border-[#D2B48C]">
      <div className="flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4A2C2A] mb-4 text-center">How are you feeling?</h2>
        <div className="grid grid-cols-2 gap-3 w-full">
          {moods.map((m, index) => (
            <div
              key={index}
              onClick={() => onMoodChange(m.label)}
              className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center ${
                isMoodSelected(m.label)
                  ? 'border-2 ring-2 ring-offset-2 ring-opacity-50'
                  : 'border-[#D2B48C] hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: isMoodSelected(m.label)
                  ? getMoodColor(m.label, 'bg')
                  : 'rgba(255, 255, 255, 0.5)',
                boxShadow: isMoodSelected(m.label)
                  ? `0 0 0 2px ${getMoodColor(m.label, 'border')}`
                  : '',
              }}
            >
              <div className="text-3xl mb-1">{m.icon}</div>
              <p className="font-bold text-sm text-[#4A2C2A]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodSelection;