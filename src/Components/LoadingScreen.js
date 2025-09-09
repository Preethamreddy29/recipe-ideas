import React from 'react';

const LoadingScreen = () => {
  return (
    // Removed the background from here, it will be handled by ComposedComponents
    <div className="fixed inset-0 flex flex-col items-center justify-center text-white z-50"> 
      <div className="text-center bg-black bg-opacity-70 p-8 rounded-xl shadow-lg"> {/* Added a semi-transparent dark background for the loading box */}
        <div className="animate-spin mb-4">
          <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12H18C18 8.68629 15.3137 6 12 6V4Z" fill="currentColor" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold">Cooking up magic..</h1>
        <p className="mt-2 text-lg">Mixing your ingredients...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;