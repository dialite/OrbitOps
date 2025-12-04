# 🎨 OrbitOps Client – Real-time Project Management Platform

[![Live Site](https://img.shields.io/badge/Live%20Demo-orbit-ops-phi.vercel.app-blue?style=for-the-badge&logo=vercel)](https://orbit-ops-phi.vercel.app/)
[![Source Code](https://img.shields.io/badge/GitHub-Source%20Code-black?style=for-the-badge&logo=github)](https://github.com/dialite/OrbitOps/tree/main/client)

**OrbitOps Client** is the front-end of a collaborative project management platform. It provides a responsive UI for creating tasks, managing projects, commenting, and real-time updates across teams.

---

## 📑 Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture & Core Tools](#architecture--core-tools)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Scripts](#scripts)
- [License](#license)

---

## 🔍 Overview

The **OrbitOps Client** delivers:

- Task and project dashboards
- Real-time updates and notifications
- Inline comments and discussions
- Clean and responsive UI for team collaboration
- Integration with backend APIs for tasks, projects, and comments

> Designed for teams to track, manage, and collaborate on projects efficiently.

---

## 🌐 Live Demo

🔗 [**Try It Now**](https://orbit-ops-phi.vercel.app/)  
🔗 [**Source Code on GitHub**](https://github.com/dialite/OrbitOps/tree/main/client)

---

## ✨ Features

- 📋 Create, edit, and delete tasks and projects
- 💬 Real-time comments and task discussions
- 📅 Task due dates, priorities, and status tracking
- 👥 Team collaboration with user assignment
- ⚡ Responsive and mobile-first UI design
- 🌘 Dark mode support
- 🧩 Modular and reusable React component architecture

---

## 🛠️ Tech Stack

| Category          | Technology                           |
| ----------------- | ------------------------------------ |
| Framework         | [React.js](https://reactjs.org/)     |
| Language          | JavaScript / TypeScript              |
| Styling           | Tailwind CSS                          |
| State Management  | Redux Toolkit                          |
| Routing           | React Router                          |
| Icons             | Lucide React                          |
| HTTP Client       | Axios                                 |
| Auth              | Clerk                                 |
| Package Manager   | npm / pnpm                            |

---

## 🧩 Architecture & Core Tools

### 🧑‍🤝‍🧑 Real-Time Collaboration

- API calls to the backend for:
  - Task CRUD operations
  - Project management
  - Comments and discussions

### 🧰 UI Components

- Modular React components
- Responsive layouts using Tailwind CSS
- Reusable forms, tables, modals, and buttons

### ⚙️ State & Data Handling

- Redux Toolkit stores `currentWorkspace`, `projects`, `tasks`, and `comments`
- Selectors and slices manage state efficiently
- Async thunks for API calls with token authentication

---

## 🚀 Getting Started

### 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/dialite/OrbitOps.git
cd OrbitOps/client
pnpm install
# or
npm install
