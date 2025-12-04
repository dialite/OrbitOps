🔧 OrbitOps Server – REST API for Projects & Task Management

The OrbitOps Server is a secure and scalable REST API powering the OrbitOps project management system. Built with Node.js, Express, and MongoDB, it handles authentication, project logic, task operations, and user management.

📑 Table of Contents

Overview

Features

Tech Stack

Architecture

API Endpoints

Getting Started

Environment Variables

🔍 Overview

The server provides core logic for:

Authentication & authorization

Project CRUD

Task CRUD

User management

Activity tracking

Secure communication with the client

✨ Features

🔐 JWT authentication

📝 CRUD operations for tasks and projects

👥 User creation and management

📡 RESTful API endpoints

🔒 Middleware for security & validation

⚡ Fast serverless deployment on Vercel

🛠️ Tech Stack
Category Technology
Runtime Node.js
Framework Express.js
Database MongoDB / Mongoose
Auth JWT
Validation Middleware-based
Deployment Vercel Serverless
🧩 Architecture

Routes → Controllers → Services → Models

Tokens stored securely & validated per request

Modular folder structure for scalability

MongoDB models for tasks, projects, users

📡 API Endpoints (Quick Preview)
Endpoint Description
/api/auth/_ Login & register
/api/projects/_ Project CRUD
/api/tasks/_ Task CRUD
/api/users/_ User management
🚀 Getting Started
cd server
npm install
npm run dev

🔑 Environment Variables

Create a .env file:

MONGODB_URI=
JWT_SECRET=
PORT=4000
