import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{
        backgroundImage: "url('/landing.jpg')",
         // Blur filter added here
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0"></div>
      <div className="relative z-10 text-center p-6 rounded-lg pt-52">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-6">
          Welcome to Your Personal Kitchen
        </h1>
        <button
          onClick={onStart}
          className="px-8 py-4 bg-[#D2691E] hover:bg-[#B85C1A] text-white text-xl sm:text-2xl font-bold rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Start Cooking!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;