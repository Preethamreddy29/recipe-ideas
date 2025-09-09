import React, { useState } from 'react';
import IngredientInput from './Search/IngredientInput.js';
import CravingsSelection from './Preferences/CravingsSelection.js';
import StomachFeelSelection from './Preferences/StomachFeelSelection.js';
import MoodSelection from './MoodandTime/MoodSelection.js';
import TimeSelection from './MoodandTime/TimeSelection.js';
import EffortSelection from './Preferences/EffortSelection.js';
import HealthFocusSelection from './Preferences/HealthFocusSelection.js';
import MealandNotes from './Preferences/MealandNotes.js'; 
import RecipeCard from './Output/RecipeCard.js';
import RecipeDetail from './Output/RecipeDetail.js';
import LandingPage from './LandingPage.js';
import LoadingScreen from './LoadingScreen.js';

const ComposedComponents = () => {
  const [ingredients, setIngredients] = useState([]);
  const [mood, setMood] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [stomachFeel, setStomachFeel] = useState('');
  const [cravings, setCravings] = useState('');
  const [effort, setEffort] = useState('');
  const [healthMode, setHealthMode] = useState('');
  const [mealType, setMealType] = useState(''); 
  const [specificNotes, setSpecificNotes] = useState(''); 
  
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [currentStep, setCurrentStep] = useState(0);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const handleNextStep = () => setCurrentStep(prev => prev + 1);
  const handleStartOver = () => {
    setCurrentStep(0);
    setRecipes([]);
    setSelectedRecipe(null);
    setIngredients([]);
    setMood('');
    setCookingTime('');
    setStomachFeel('');
    setCravings('');
    setEffort('');
    setHealthMode('');
    setMealType('');
    setSpecificNotes('');
    setCurrentRecipeIndex(0);
  };

  const handleGoBackToRecipes = () => {
    setSelectedRecipe(null);
    setCurrentStep(9);
  };

  const handleAddIngredient = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== ingredientToRemove));
  };
  
  const handleFindRecipes = async () => {
    if (ingredients.length === 0) {
      setError("Please add at least one ingredient.");
      return;
    }
    
    setLoading(true);
    setError('');
    setRecipes([]);
    setSelectedRecipe(null);
    setCurrentStep(8); // Go to loading screen

    try {
      const basePrompt = `Given the ingredients: ${ingredients.join(', ')}.`;
      
      let preferencePrompt = '';
      if (stomachFeel) preferencePrompt += `\n- Stomach feel: ${stomachFeel}`;
      if (cravings) preferencePrompt += `\n- Craving: ${cravings}`;
      if (effort) preferencePrompt += `\n- Effort required: ${effort}`;
      if (mood) preferencePrompt += `\n- Mood: ${mood}`;
      if (cookingTime) preferencePrompt += `\n- Cooking time: ${cookingTime}`;
      if (healthMode) preferencePrompt += `\n- Health mode: ${healthMode}`;
      if (mealType) preferencePrompt += `\n- Meal type: ${mealType}`;
      if (specificNotes) preferencePrompt += `\n- Specific notes: ${specificNotes}`;

      const finalPrompt = `As a culinary expert and nutritional coach, generate minimum two till maximum five distinct recipe options based on the following user preferences:
      ${basePrompt}
      ${preferencePrompt}
      
      For each option, you MUST use the provided ingredients as the core components and can suggest 1-2 optional ingredients. 
      Structure the output as a JSON array of objects, where each object represents a recipe. Each recipe object must have the following keys:
      - "title": string (e.g., "Spicy Chicken Tacos")
      - "description": string (e.g., "Flavorful chicken tacos with a spicy kick and fresh toppings")
      - "time": string (e.g., "25 mins min")
      - "servings": string (e.g., "4 servings")
      - "ingredientsCount": string (e.g., "8 ingredients")
      - "effortLevel": string (e.g., "Easy", "Medium", "Hard")
      - "ingredients": array of strings (list of required ingredients with a "Have It" status, e.g., ["chicken breast", "tomato", "cucumber"])
      - "optionalIngredients": array of strings (e.g., ["fresh herbs", "lemon juice"])
      - "instructions": array of strings (step-by-step instructions)
      - "nutritionalInfo": object with keys: "calories", "protein", "carbs", "fat" (e.g., {"calories": "285", "protein": "32g", "carbs": "4g", "fat": "14g"})
      
      Ensure the entire response is valid JSON and only contains the JSON. DO NOT include any explanatory text before or after the JSON.`;

      const payload = {
        contents: [{ parts: [{ text: finalPrompt }] }],
        tools: [{ "google_search": {} }],
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const generatedText = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (generatedText) {
        try {
          const parsedRecipes = JSON.parse(generatedText.replace(/```json\n|\n```/g, ''));
          setRecipes(parsedRecipes);
          setCurrentStep(9); // Go to recipe card grid
        } catch (parseError) {
          setError("I couldn't generate a recipe from those ingredients. Please try different ones.");
        }
      } else {
        setError("I couldn't generate a recipe from those ingredients. Please try different ones.");
      }
    } catch (err) {
      console.error("Failed to fetch recipe:", err);
      setError("Something went wrong. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setCurrentStep(10); // Go to single recipe detail view
  };

  const handleNextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const handlePrevRecipe = () => {
    setCurrentRecipeIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return <LandingPage onStart={handleNextStep} />;
      case 1:
        return <IngredientInput
            ingredients={ingredients}
            onIngredientsChange={handleAddIngredient}
            onRemoveIngredient={handleRemoveIngredient}
            onNext={handleNextStep}
          />;
      case 2:
        return <MoodSelection
          mood={mood}
          onMoodChange={(selectedMood) => {
            setMood(selectedMood);
            handleNextStep();
          }}
        />;
      case 3:
        return <TimeSelection
          cookingTime={cookingTime}
          onTimeChange={(selectedTime) => {
            setCookingTime(selectedTime);
            handleNextStep();
          }}
        />;
      case 4:
        return <CravingsSelection
          cravings={cravings}
          onCravingsChange={(selectedCravings) => {
            setCravings(selectedCravings);
            handleNextStep();
          }}
        />;
      case 5:
        return <StomachFeelSelection
          stomachFeel={stomachFeel}
          onStomachFeelChange={(selectedFeel) => {
            setStomachFeel(selectedFeel);
            handleNextStep();
          }}
        />;
      case 6:
        return <EffortSelection
          effort={effort}
          onEffortChange={(selectedEffort) => {
            setEffort(selectedEffort);
            handleNextStep();
          }}
        />;
      case 7:
        return <HealthFocusSelection
          healthMode={healthMode}
          onHealthModeChange={(selectedMode) => {
            setHealthMode(selectedMode);
            handleNextStep();
          }}
        />;
      case 8:
        return <MealandNotes 
          mealType={mealType}
          onMealTypeChange={setMealType}
          specificNotes={specificNotes}
          onSpecificNotesChange={setSpecificNotes}
          onFindRecipes={handleFindRecipes}
        />;
      case 9:
        return (
          <div className="bg-white bg-opacity-70 p-8 rounded-2xl flex flex-col items-center w-full max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#8B4513] mb-2 text-center">Your Personal Kitchen</h1>
            <p className="text-sm text-gray-600 mb-8 text-center">Here are the perfect recipes for your cozy mood using your ingredients</p>
            {error ? (
              <div className="text-center text-red-500 font-bold mb-4">{error}</div>
            ) : (
              <div className="relative w-full">
                <div className="flex justify-center items-center w-full">
                  <div className="w-full">
                    <RecipeCard
                      recipe={recipes[currentRecipeIndex]}
                      onSelectRecipe={handleSelectRecipe}
                      currentNumber={currentRecipeIndex + 1}
                      totalNumber={recipes.length}
                    />
                  </div>
                </div>
                {recipes.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevRecipe}
                      className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full transform -translate-x-1/2 transition-opacity duration-200 hover:bg-opacity-75"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextRecipe}
                      className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full transform translate-x-1/2 transition-opacity duration-200 hover:bg-opacity-75"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            )}
            <button
              onClick={handleStartOver}
              className="mt-8 w-full p-4 bg-[#D2691E] hover:bg-[#B85C1A] text-white text-lg font-bold rounded-lg transition-all duration-200 shadow-lg"
            >
              Start Over
            </button>
          </div>
        );
      case 10:
        return <RecipeDetail recipe={selectedRecipe} onGoBack={handleGoBackToRecipes} />;
      default:
        return null;
    }
  };

  const showKitchenBackground = currentStep > 0 && currentStep <= 10;
  const isPreferenceStep = currentStep > 0 && currentStep < 9;
  const isRecipeView = currentStep === 9 || currentStep === 10;

  return (
    <div className="min-h-screen relative font-sans overflow-hidden">
      {showKitchenBackground && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ 
            backgroundImage: "url('/back.png')",
            filter: loading ? 'blur(8px)' : 'none',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
      )}

      {loading && <LoadingScreen />}

      <div className={`relative z-10 flex flex-col min-h-screen p-4 sm:p-8 ${isRecipeView ? 'items-center justify-center' : 'items-end justify-end'}`}>
        <div className={`w-full ${isPreferenceStep ? 'max-w-md' : 'max-w-4xl'}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ComposedComponents;