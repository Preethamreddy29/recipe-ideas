# 🍲 Your Personal Kitchen

**Your Personal Kitchen** is a sophisticated, single-page web application designed to be your personalized culinary guide.  
It helps users discover the perfect recipe by intelligently combining their available ingredients with their personal preferences, all within a sleek and intuitive user interface.  

This application transforms the often-overwhelming task of deciding what to cook into a seamless, enjoyable, and creative process.

---

## 🎯 Project Vision & Design Philosophy

Our core philosophy was to create a user experience that feels both **magical** and **highly personal**.  

- Breaks down the traditional recipe search process into a guided, step-by-step flow.  
- Minimalist and immersive design with a warm and inviting aesthetic.  
- Smooth, fluid interactions that keep the user engaged without cognitive overload.  

### ✨ Design Highlights
- **Landing Page**: Gentle gradient that sets a tranquil mood.  
- **Consistent Palette**: Warm colors with illustrated kitchen backgrounds.  
- **Semi-Transparent Cards**: Unique layered effect with excellent readability.  
- **Fluid Interactions**: No redundant "Next" buttons, direct click progression.  
- **Immersive Flow**: Each step feels like part of a personal culinary adventure.  

---

## ⚙️ Core Functionality

### 🔮 Intelligent Recipe Generation
- Powered by the **Google Gemini API**.  
- Generates unique, context-aware recipes based on:  
  - Ingredients  
  - Mood & Time  
  - Cravings & Stomach Feel  
  - Effort & Health Preferences  
  - Meal Type & Dietary Notes  

### 🛠️ Guided Multi-Step Flow
1. **Ingredients Input** – Add/manage available ingredients.  
2. **Mood & Time** – Select your current mood and available cooking time.  
3. **Cravings & Stomach Feel** – Pick taste cravings & how the meal should feel.  
4. **Effort & Health Focus** – Choose effort level and dietary focus.  
5. **Meal & Notes** – Specify meal type and add notes.  

### 🍽️ Recipe Display
- "Cooking up magic..." loading screen.  
- Elegant **carousel of recipes** with key stats.  
- **Detailed View**: Ingredients, step-by-step instructions, and nutrition info.  
- Clear error messages if recipes cannot be generated.  

---

## 🎨 UI/UX Design Highlights

- **Seamless Transitions** with smooth animations.  
- **Responsive Layout** across desktop and mobile.  
- **Warm Color Palette** and cohesive typography.  
- **Interactive Components** with clear feedback.  

---

## 🖥️ Technology Stack

- **React** – Component-driven SPA architecture.  
- **Tailwind CSS** – Utility-first styling system.  
- **Google Gemini API** – Recipe generation engine.  
- **JavaScript (ES6+)** – Core logic and async operations.  

---

## 🚀 Getting Started

Follow these steps to run the app locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Preethamreddy29/recipe-ideas.git
```

### 2. Navigate to Project Directory
```bash
cd recipe-ideas
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Environment Variables
Create a .env file in the root directory and add your API key:
```bash
REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE
```

### 5. Start Development Server
```bash
npm start
```
The app will now be running at http://localhost:3000

## 🌍 Deployment
- Deployed on GitHub Pages.
- Demonstrates a simple yet effective CI/CD pipeline for static applications.
- Provides a free and reliable hosting solution that mirrors professional workflows.


## 🏆 Acknowledgments
- Google Gemini API for powering recipe generation.
- Open-source libraries and community resources.

