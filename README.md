Your Personal Kitchen 🍲
This is a modern, single-page web application that helps users discover the perfect recipe by combining their available ingredients with their personal preferences. The application transforms the often-overwhelming task of deciding what to cook into a simple, enjoyable, and creative process.

The app's design is minimalist and immersive, guiding users through a seamless, step-by-step flow with a consistent visual language.

Core Features
Intelligent Recipe Generation: Powered by the Google Gemini API, the app generates unique recipes based on a rich set of user inputs.

Intuitive Multi-Step Flow: The user journey is broken down into a series of logical steps, including ingredient input, mood, time, and health preferences. Each step is presented on a separate page for a focused and clean UI.

Dynamic UI: The background transitions from a calming gradient to a vibrant, illustrated kitchen. The cards are semi-transparent, allowing the background to show through while maintaining perfect text readability.

Interactive Design: The interface uses visually appealing cards and fluid animations. Clicking an option on a card automatically advances the user to the next step, creating a highly responsive and intelligent flow.

Recipe Carousel: The final recipe options are displayed in a modern, elegant carousel. Users can easily scroll through suggestions and select a recipe for a detailed view.

Robust Error Handling: The application provides clear, custom error messages if the API is unable to generate a valid recipe from the given inputs.

Technology Stack
React: For a component-based architecture and efficient state management.

Tailwind CSS: For all styling, enabling a consistent and scalable design.

Google Gemini API: Utilized for its powerful generative capabilities to create unique and personalized recipe content.

How to Run the Application
To run this project locally, follow these steps.

Clone the repository:

Bash

git clone https://github.com/Preethamreddy29/recipe-ideas.git
Navigate to the project directory:

Bash

cd recipe-ideas
Install dependencies:

Bash

npm install
Create a .env file:
Create a new file named .env in the root of your project and add your Google Gemini API key:

REACT_APP_GEMINI_API_KEY=YOUR_API_KEY_HERE
Start the development server:

Bash

npm start
The application will open in your browser at http://localhost:3000.

Deployment
The application is deployed on GitHub Pages, showcasing a simple and effective continuous deployment pipeline. This choice of hosting provides a reliable and free solution for static applications, mirroring a professional development workflow.
