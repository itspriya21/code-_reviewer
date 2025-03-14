AI-Powered Code Reviewer
AI-Powered Code Reviewer is a web-based tool that analyzes code using Google's Gemini AI and provides instant feedback on:

Code Quality
Performance Improvements
Security Vulnerabilities
Best Coding Practices
🌟 Features
✅ Built-In Code Editor – Write and modify code in the browser.
✅ AI Feedback – Real-time code analysis using Gemini AI.
✅ Markdown Support – Feedback in easy-to-read format.
✅ Responsive Design – Works on desktop and mobile.
✅ Social Integration – Connect via GitHub, LinkedIn, and Twitter.

🛠️ Technologies Used
Frontend: React, React Simple Code Editor, PrismJS, Axios, CSS
Backend: Express.js, Google Gemini AI, CORS
Tools: VS Code, Nodemon, npm

🏗️ Setup
✅ Frontend
bash
Copy
Edit
cd frontend  
npm install  
npm run dev  
Visit: http://localhost:5173

✅ Backend
bash
Copy
Edit
cd backend  
npm install  
npx nodemon  
API: http://localhost:3000

✅ Env Variables
Create .env in backend:

env
Copy
Edit
GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
🌐 API Endpoint
POST /ai/get-review
Request:

json
Copy
Edit
{ "code": "function sum() { return 1 + 1; }" }
Response:

json
Copy
Edit
{ "response": "Your code review feedback..." }
📂 Project Structure
bash
Copy
Edit
AI-Powered-Code-Reviewer/  
├── frontend/  
├── backend/  
├── .env  
├── README.md  


![Screenshot 2025-03-11 190138](https://github.com/user-attachments/assets/37085046-7a5a-44fc-a5ce-39611c9902f5)
![Screenshot 2025-03-11 190138](https://github.com/user-attachments/assets/c38ac885-d69d-4aad-81d0-e548deb09cde)

