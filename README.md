# 🔐 MERN Full-Stack Authentication Website

A modern **Full-Stack Authentication Web Application** built with the **MERN Stack**.

This project demonstrates a complete user authentication system where users can **create an account, log in, stay authenticated, and log out securely**.

The main purpose of this project is to practice and demonstrate **Frontend + Backend + Database integration** using modern web development technologies.

---

## 🚀 Project Overview

This is a full-stack web application developed using:

* ⚛️ React.js — Frontend
* 🟢 Node.js — Backend Runtime
* 🚂 Express.js — Backend Framework
* 🍃 MongoDB — Database
* 🔗 Mongoose — MongoDB ODM
* 🔐 Authentication & Validation
* 🎨 Bootstrap / CSS — User Interface

The frontend communicates with the backend through APIs, while MongoDB is used to store and manage user data.

---

## ✨ Features

### 👤 User Authentication

* 📝 User Registration
* 🔑 User Login
* 🚪 User Logout
* 📧 Login using Email
* 📱 Login using Phone Number
* 🔒 Password Validation
* ✅ Form Validation
* ⚠️ Error Handling
* 🔄 Frontend & Backend API Integration

### 🎨 User Interface

* Responsive design
* Clean and simple UI
* Bootstrap-based styling
* User-friendly forms
* Interactive buttons and navigation

### ⚙️ Backend

* REST API
* Express.js routes
* MongoDB database integration
* Mongoose models
* User data validation
* Authentication logic
* Error handling

---

## 🛠️ Technologies Used

| Technology   | Purpose             |
| ------------ | ------------------- |
| HTML5        | Page Structure      |
| CSS3         | Styling             |
| JavaScript   | Programming Logic   |
| React.js     | Frontend            |
| Bootstrap    | Responsive UI       |
| Node.js      | Backend Runtime     |
| Express.js   | Backend API         |
| MongoDB      | Database            |
| Mongoose     | Database Management |
| Git & GitHub | Version Control     |

---

## 📂 Project Structure

```text
MERN-Authentication/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── db.js
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md
```

> Folder names may be different depending on your project structure.

---

## 🔄 How It Works

```text
User
 │
 ▼
React Frontend
 │
 │  API Request
 ▼
Express.js + Node.js
 │
 ▼
Authentication Logic
 │
 ▼
MongoDB Database
 │
 ▼
Response
 │
 ▼
React Frontend
```

The user interacts with the React frontend.
The frontend sends requests to the Express/Node.js backend.

The backend processes the request and communicates with MongoDB to store or retrieve user information.

---

## 🔐 Authentication Flow

### 1️⃣ Registration

A new user provides their information through the registration form.

The frontend sends the data to the backend API.

The backend validates the information and stores the user in MongoDB.

### 2️⃣ Login

The user enters their email/phone and password.

The backend verifies the credentials.

If the credentials are correct, the user is successfully authenticated.

### 3️⃣ Logout

The user can securely log out of the application.

---

## 📡 API Integration

The application uses REST APIs for communication between the frontend and backend.

Example API endpoints:

```text
POST /api/auth/createuser
POST /api/auth/login
```

These APIs handle user registration and login functionality.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd YOUR_PROJECT_NAME
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

Navigate to the backend folder:

```bash
cd backend
```

Then run:

```bash
npm install
```

### 5. Configure Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

> Never upload your `.env` file or database credentials to GitHub.

### 6. Start the Backend

```bash
npm start
```

Or, if using nodemon:

```bash
npm run dev
```

### 7. Start the Frontend

Open another terminal:

```bash
npm start
```

---

## 🔒 Security Note

Sensitive information such as:

* MongoDB connection strings
* Passwords
* API keys
* Secret keys
* Environment variables

should **never be uploaded to GitHub**.

Make sure `.env` is included in your `.gitignore` file:

```text
.env
node_modules/
```

---

## 📸 Project Screenshots

You can add screenshots of your application here:

```markdown
![Login Page](screenshots/login.png)

![Register Page](screenshots/register.png)

![Home Page](screenshots/home.png)
```

---

## 🎯 What I Learned

While building this project, I practiced and improved my knowledge of:

* React.js
* React Components
* React Hooks
* Forms & Form Handling
* API Requests
* REST APIs
* Node.js
* Express.js
* MongoDB
* Mongoose
* User Authentication
* Backend Validation
* Frontend & Backend Integration
* Git & GitHub
* Full-Stack Development

---

## 🚀 Future Improvements

Some features that can be added in future versions:

* 🔐 JWT Authentication
* 🔑 Forgot Password
* 📧 Email Verification
* 👤 User Profile
* 🔄 Password Reset
* 🛡️ Protected Routes
* 👨‍💼 Admin Dashboard
* 📱 More responsive UI
* 🌐 Deployment

---

## 👨‍💻 About the Developer

I am a **Computer Science student and aspiring Full-Stack Developer** passionate about building modern web applications and improving my development skills through real-world projects.

This project is part of my journey to become a professional **MERN Stack Developer**.

---

## ⭐ Support

If you found this project useful or interesting, consider giving it a ⭐ on GitHub.

Your support and feedback are always appreciated!

---

## 📄 License

This project is created for **learning and educational purposes**.
