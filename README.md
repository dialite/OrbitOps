🚀 OrbitOps — Modern Project & Task Management Platform
Client: https://orbit-ops-phi.vercel.app/
Server API: https://orbit-ops-server-tau.vercel.app/

OrbitOps is a modern, full-stack project and task management system built for teams, professionals, and individuals.
It combines workspace management, projects, tasks, real-time collaboration, comments, and automated email notifications into a clean, efficient productivity platform.

Built with a powerful React + Node + Neon + Clerk + Resend + Inngest stack, OrbitOps is optimized for usability, scalability, and excellent developer experience.

📑 Table of Contents

Overview

Live Demo

Key Features

Architecture Overview

Tech Stack

Client (Frontend) Summary

Server (Backend) Summary

Folder Structure

Getting Started

Environment Variables

Development Scripts

Deployment

License

🔍 Overview

OrbitOps is a complete workflow system that enables:

✨ Team collaboration

📝 Multi-workspace organization

📂 Project planning

🧱 Task assignment and tracking

💬 Real-time task-based discussions

📬 Automated email notifications

🔐 Secure authentication

📊 Project progress tracking

Whether you're a startup team, freelancer, manager, or individual user — OrbitOps gives you a solid structure to execute and manage work.

🌐 Live Demo
🎨 Frontend App

🔗 https://orbit-ops-phi.vercel.app/

🖥️ API Server

🔗 https://orbit-ops-server-tau.vercel.app/

✨ Key Features
🧩 Workspaces

Create personal or team workspaces

Each workspace has isolated:

Projects

Tasks

Members

📁 Projects

Create and manage projects

Track progress visually

Status, start dates, priorities

📝 Tasks

Each task supports:

Title

Description

Type

Priority

Due date

Status

Assignee

Automatic progress syncing

💬 Real-Time Comments

Task-based threaded discussions

Auto-refresh every 10 seconds

User avatar & timestamp

Self vs others alignment layout

🔐 Authentication (Clerk)

Secure Sign-in / Sign-up

User profile & metadata

JWT-based backend protection

📬 Automated Email Notifications

Via Inngest + Resend SMTP, users receive notifications for:

New comments

Task changes

Assignments

🎨 Modern UI/UX

Fully responsive

Clean gradient components

Smooth transitions

Dark mode ready

🏗️ Architecture Overview

OrbitOps follows a decoupled, maintainable structure:

Frontend (React, Vite, Tailwind)
⬇️ API Calls (Axios + JWT)
Backend (Node, Express)
⬇️
Database (Neon PostgreSQL)
⬇️
Background Jobs (Inngest)
⬇️
Email Delivery (Resend)

The client and server run independently but integrate seamlessly via REST API endpoints.

🛠️ Tech Stack
Client

React.js (Vite)

Redux Toolkit

Tailwind CSS

Clerk Authentication

Axios

Lucide React Icons

Date-Fns

Server

Node.js + Express

Neon Serverless PostgreSQL

Clerk Authentication (JWT Verification)

Inngest (Background Jobs)

Resend SMTP (Email Service)

CORS + Security Middleware

🎨 Client Application (orbit-ops-phi.vercel.app)

Located in /client

🌟 Highlights

Beautiful UI with Tailwind CSS

Authentication via Clerk

Workspace → Projects → Tasks hierarchy

Real-time comments with auto-polling

Axios API integration

Redux for global state

Fully responsive design

Runs on Vercel with environment-based API URL switching.
🖥️ Server API (orbit-ops-server-tau.vercel.app)

Located in /server

🌟 Highlights

Modular Express API

JWT-protected routes (Clerk)

Neon PostgreSQL DB

Inngest workflows

Automatic email sending via Resend SMTP

Middleware-driven architecture

Strong separation of concerns:

Controllers

Routes

DB layer

Email workflows

Core API Modules

/api/workspaces

/api/projects

/api/tasks

/api/comments

/api/users

📁 Monorepo Folder Structure
OrbitOps/
│── client/ # Frontend (React + Vite)
│── server/ # Backend (Express API)
│── README.md # <— YOU ARE HERE
│── package.json
│── .gitignore
│── LICENSE

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/dialite/OrbitOps.git
cd OrbitOps

🧩 Client Setup (Frontend)
Install dependencies
cd client
npm install

Create .env
VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_API_BASE_URL=https://orbit-ops-server-tau.vercel.app

Run locally
npm run dev

🖥️ Server Setup (Backend)
Install dependencies
cd server
npm install

Create .env
DATABASE_URL=your_neon_postgres_url

CLERK_SECRET_KEY=your_clerk_secret_key

SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASS=your_resend_api_key
SENDER_EMAIL=onboarding@resend.dev

Run locally
npm run dev

🧪 Development Scripts
Client
Command Description
npm run dev Start Vite server
npm run build Build for production
npm run preview Preview production build
Server
Command Description
npm run dev Start Express dev server
npm run start Run production server
☁️ Deployment

Client: Vercel (recommended)

Server: Vercel Serverless Functions

Database: Neon PostgreSQL

Background Jobs: Inngest

Email Delivery: Resend

📄 License

MIT License © 2025 Raymond Olisa
