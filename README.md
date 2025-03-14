Introduction
AI-Powered Code Reviewer is a web-based tool that allows developers to submit their code for review and receive instant feedback. It uses Google's Gemini AI to analyze the code and provide suggestions on various aspects, including:

Code quality
Performance improvements
Security vulnerabilities
Best coding practices
The feedback is presented in an easy-to-read Markdown format, ensuring that developers can quickly understand and apply the recommendations.

Key Features
✅ Built-In Code Editor – Write and modify code directly within the browser.
✅ AI-Powered Feedback – Receive real-time code analysis using Gemini AI.
✅ Markdown Support – Feedback is formatted in Markdown for easy readability.
✅ Responsive Interface – Works seamlessly on desktops, tablets, and mobile devices.
✅ Social Media Integration – Connect with the developer via GitHub, LinkedIn, and Twitter.

Technologies Used
Frontend
React – JavaScript library for building interactive user interfaces.
React Simple Code Editor – Provides a lightweight code editor.
PrismJS – Enables syntax highlighting.
Axios – Facilitates communication with the backend.
CSS – Custom styling for a modern and responsive design.
Backend
Express.js – Node.js framework for building the backend server.
Google Gemini AI – Used to generate code reviews and feedback.
CORS – Allows cross-origin requests.
Tools
VS Code – Recommended code editor.
Nodemon – Automatically restarts the backend server during development.
npm – Package manager for handling dependencies.
Setup Guide
✅ Frontend Configuration
Open your terminal and navigate to the frontend directory:
bash
Copy
Edit
cd frontend
Install dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm run dev
Open your browser and visit:
arduino
Copy
Edit
http://localhost:5173
✅ Backend Configuration
Open your terminal and navigate to the backend directory:
bash
Copy
Edit
cd backend
Install dependencies:
bash
Copy
Edit
npm install
Start the backend server using Nodemon:
bash
Copy
Edit
npx nodemon
The backend will be accessible at:
arduino
Copy
Edit
http://localhost:3000
Environment Variables
Create a .env file in the backend directory and add the following:

env
Copy
Edit
GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
Running the Application
To launch the project, follow these steps:

Start the backend server:
bash
Copy
Edit
cd backend
npx nodemon
Start the frontend development server:
bash
Copy
Edit
cd frontend
npm run dev
Open your browser and visit:
arduino
Copy
Edit
http://localhost:5173
API Endpoints
POST /ai/get-review
Description: Submits code to the AI for review and analysis.

Request Example:

json
Copy
Edit
{
  "code": "function sum() { return 1 + 1; }"
}
Response Example:

json
Copy
Edit
{
  "response": "Your code review feedback..."
}
Project Structure
css
Copy
Edit
AI-Powered-Code-Reviewer/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx
│   │   │   ├── Footer.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   ├── package.json
├── backend/
│   ├── controllers/
│   │   ├── ai.controller.js
│   ├── routes/
│   │   ├── ai.routes.js
│   ├── services/
│   │   ├── ai.service.js
│   ├── app.js
│   ├── package.json
├── .env
├── README.md#
