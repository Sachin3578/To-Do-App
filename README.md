# To-Do-App
A full-stack To-Do List application built using the **MERN** stack (MongoDB, Express.js, React.js, and Node.js). This app allows users to sign up, log in, and manage their personal tasks efficiently through a clean and responsive UI.

---

## 🚀 Features

- 🔐 User Authentication (Signup & Login)
- 📋 Create, Read, Update, Delete (CRUD) operations on To-Do tasks
- ✅ Mark tasks as complete/incomplete
- 🧾 View tasks in a beautiful card layout
- 📁 Persistent storage using MongoDB
- 📦 Backend RESTful API built with Express and Node.js
- 🌐 Frontend built with React
- 💡 Clean component-based architecture

---

## 🛠️ Tech Stack

### Frontend:
- React
- React Router
- Axios
- CSS Modules

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- bcrypt for password hashing
- dotenv for environment variables

---

## 📁 Folder Structure

ToDo/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── .env
│ └── server.js
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── App.js
│ ├── index.js
│ └── ...
├── README.md
└── package.json

yaml
Copy
Edit

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sachin3578/To-Do-App.git
cd To-Do-App
2. Install Dependencies
Backend:
bash
Copy
Edit
cd backend
npm install
Frontend:
bash
Copy
Edit
cd ../frontend
npm install
3. Set Up Environment Variables
Create a .env file in the backend/ directory with the following:

ini
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
4. Run the App
Backend (in one terminal):
bash
Copy
Edit
cd backend
npm run dev
Frontend (in another terminal):
bash
Copy
Edit
cd frontend
npm start




📬 Contact
gornarsachin2004@gmail.com
