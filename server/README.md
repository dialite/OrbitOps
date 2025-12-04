🖥️ OrbitOps — Backend API Server (Node + Express + Neon + Clerk + Inngest + Resend)
API Root: https://orbit-ops-server-tau.vercel.app/

OrbitOps Server powers the full application with a clean, scalable, modular backend architecture featuring authentication, automated email workflows, database management, and REST endpoints for workspaces, projects, tasks, comments, and notifications.

📑 Table of Contents

Overview

Live API

Features

Tech Stack

Architecture

API Modules

Folder Structure

Getting Started

Env Variables

Scripts

License

🔍 Overview

The OrbitOps server handles:

User authentication (via Clerk JWTs)

Workspace creation & membership

Project management

Task creation + assignment

Comment system

Automated email workflows using Inngest + Resend SMTP

Neon serverless PostgreSQL

Secure API routes

CORS + middleware layers

🌐 Live API Server
👉 API Endpoint Root:

https://orbit-ops-server-tau.vercel.app/

✨ Features (Server API)
🔐 Authentication / Authorization

Auth via Clerk JWTs

Workspace member validation

User-to-task permission checks

📁 Workspaces

Create workspace

List user workspaces

Add/remove members

📂 Projects

Create project

Update project

Track project progress

📝 Tasks

Create tasks

Assign users

Set status/priority/type

Update task details

Get tasks by project

💬 Comments

Add comment to task

Get comments for tasks

Return user metadata

📬 Automated Email Notifications

Via Inngest + Resend SMTP

Triggered on:

New comment

Task updates

Assignments

🗄️ Database

Neon Serverless PostgreSQL

Workspaces

Projects

Tasks

Comments

Users

🛠️ Tech Stack (Server)
Category Technology
Runtime Node.js
Framework Express.js
Database Neon Serverless PostgreSQL
Auth Clerk
Email Resend SMTP
Background Jobs Inngest
ORM / Query Layer SQL queries
Deployment Vercel
🧩 Backend Architecture

routes/ → REST endpoints

controllers/ → business logic

middlewares/ → auth, validation, error handling

db/ → connection + queries

inngest/ → background workflows

utils/ → reusable helpers

📁 Folder Structure
server/
│── src/
│ ├── routes/
│ ├── controllers/
│ ├── db/
│ ├── inngest/
│ ├── middleware/
│ ├── utils/
│ └── server.js
│── package.json
│── vercel.json
│── .env.example

🚀 Getting Started (Server)
1️⃣ Clone repo & enter server folder
git clone https://github.com/dialite/OrbitOps.git
cd OrbitOps/server

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables

Example .env:

DATABASE_URL=your_neon_postgres_url
CLERK_SECRET_KEY=your_clerk_secret_key

SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASS=your_resend_api_key
SENDER_EMAIL=onboarding@resend.dev

4️⃣ Run Local Development
npm run dev

📜 Scripts
Command Description
npm run dev Start development server
npm run start Run production build
📄 License

This project is licensed under the MIT License.
