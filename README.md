# 🚀 InterviewAI – AI Powered Interview Preparation Platform

🔗 **Deployment Link**  
- Live Application: [Click here](https://interview-ai-nine-eta.vercel.app/login)

InterviewAI is a full-stack web application that helps job seekers prepare for interviews in a **personalized, efficient, and AI-driven way**. It analyzes a candidate’s resume and target job description to generate:

- 🎯 Tailored interview questions  
- 📊 Skill gap analysis  
- 🗺️ Personalized preparation roadmap  

Built using the **MERN stack** with **Gemini AI integration**, InterviewAI brings intelligent interview preparation to your fingertips.

---

## 🌟 Features

### 🔐 Authentication
- User Registration & Login  
- JWT-based authentication  
- Protected routes  

### 📄 Resume Input
- Upload resume (PDF/DOCX)  
- OR enter a self-description  

### 📝 Job Description Input
- Paste job description (up to 5000 characters)  

### 🤖 AI-Powered Insights
- Personalized interview questions  
- Skill gap analysis  
- Preparation roadmap  

### 💾 Data Persistence
- Interview reports stored in MongoDB  
- Retrieve past reports anytime  

### 🎨 Frontend UI
- Responsive design  
- Modular React components  
- SCSS styling  

---

## 🏗️ Tech Stack

| Layer         | Technology                     |
|--------------|-------------------------------|
| Frontend     | React.js, Vite, SCSS          |
| Backend      | Node.js, Express.js           |
| Database     | MongoDB Atlas                 |
| Auth         | JWT                           |
| AI           | Gemini API                    |
| Deployment   | Vercel (Frontend), Render (Backend) |
| Tools        | Git, Postman, Nodemon         |

---

## 🔄 Application Flow

1. User registers/logs in → JWT issued  
2. Uploads resume or enters description  
3. Pastes job description  
4. Frontend sends data to backend  
5. Backend calls Gemini AI  
6. AI generates:
   - Interview questions  
   - Skill gap analysis  
7. Data stored in MongoDB  
8. Results displayed on dashboard  
