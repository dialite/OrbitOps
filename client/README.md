🎯 OrbitOps — Modern Team Task & Project Management (Client App)
Live App: https://orbit-ops-phi.vercel.app/
Server API: https://orbit-ops-server-tau.vercel.app/

OrbitOps is a modern, fast, and intuitive team task management and collaboration platform that allows users to create projects, assign tasks, comment in real time, track progress, manage workspaces, and receive email-powered notifications.

Built with a polished frontend experience, OrbitOps is optimized for speed, clarity, accessibility, and real-world usability for teams and individuals.

📑 Table of Contents

Overview

Live Demo

Features

Tech Stack

App Architecture

Folder Structure

Getting Started

Environment Variables

Scripts

License

🔍 Overview

The OrbitOps client is a fully responsive React application providing:

Role-based project and task management

Workspace system (each workspace has its own projects & tasks)

Real-time comments system

Automated email notifications (via Resend + Inngest)

Clean UI powered by Tailwind CSS

Secure authentication using Clerk

Integration with OrbitOps Server API

Designed for creators, teams, startups, and individuals who need fast, structured task execution with a clean UI.

🌐 Live Demo
👉 Try OrbitOps Client

https://orbit-ops-phi.vercel.app/

👉 View API Server

https://orbit-ops-server-tau.vercel.app/

✨ Features (Client App)
📝 Projects & Tasks

Create and manage projects

Create tasks inside projects

Task properties:

Status

Priority

Type

Due date

Description

Assignee

Progress indicator for each project

💬 Real-Time Comment System

Task-based threaded comments

Auto-refresh comments every 10s

User avatars, timestamps, author labels

Smart layout (self vs others alignment)

🧩 Workspaces

Each user can create unlimited workspaces

Workspaces contain isolated projects & tasks

🔐 Authentication

Powered by Clerk:

Sign in / Sign up

Profile data

Route protection

📬 Email Notifications

Triggered when:

A task receives a comment

A task is assigned

A project is updated

(Handled by the server + Inngest + Resend)

🎨 UI & UX

Tailwind CSS + gradient accents

Dark mode ready

Mobile responsive

Smooth transitions

Clean card layout

🛠️ Tech Stack (Client)
Category Technology
Frontend Framework React.js + Vite
State Management Redux Toolkit
UI Styling Tailwind CSS
Auth Clerk
HTTP Client Axios
Date Utility date-fns
Icons Lucide-React
Deployment Vercel
🧩 App Architecture

The client interacts with the server using:

JWT from Clerk

REST API calls to /api/\*

Axios instance with automatic auth headers

Workspace-aware structure

Periodic comment polling

📁 Folder Structure
client/
│── src/
│ ├── components/
│ ├── pages/
│ ├── redux/
│ ├── hooks/
│ ├── configs/
│ ├── utils/
│ ├── styles/
│ └── App.jsx
│── public/
│── package.json
│── vite.config.js

🚀 Getting Started (Client)
1️⃣ Clone the Repository
git clone https://github.com/dialite/OrbitOps.git
cd OrbitOps/client

2️⃣ Install Dependencies
npm install

# or

yarn install

# or

pnpm install

3️⃣ Add Environment Variables

Create:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_API_BASE_URL=https://orbit-ops-server-tau.vercel.app

4️⃣ Run the Client Locally
npm run dev

📜 Scripts
Command Description
npm run dev Start development server
npm run build Build for production
npm run preview Preview production build
📄 License

This project is licensed under the MIT License.
