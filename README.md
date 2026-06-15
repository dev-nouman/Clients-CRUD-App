<div align="center">

# 🗂️ Client Manager — CRUD App

A full-stack client management application with a React frontend and a Node.js/Express REST API backed by PostgreSQL.

<br />

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
</p>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Database Setup](#-database-setup)
- [Author](#-author)

---

## 🔍 Overview

**Client Manager** is a full-stack CRUD application for managing client records. Users can add, view, edit, delete, and search clients — each with a name, email, job title, hourly rate, and active status. The frontend communicates with a RESTful Express API which persists data in a PostgreSQL database.

---

## ✨ Features

- **Create** — Add new clients via a modal form
- **Read** — Fetch and display all clients in a responsive table
- **Update** — Edit existing client details in-place
- **Delete** — Remove clients with instant UI sync
- **Live Search** — Filter clients by name, email, or job in real time
- **Status Toggle** — Mark clients as Active or Inactive
- **Clean Modal UI** — Shared form component for add/edit modes

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI library |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| DaisyUI | 5 | Component library |
| Axios | 1.x | HTTP client |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js | — | Runtime |
| Express | 5 | REST API framework |
| pg | 8.x | PostgreSQL client |
| dotenv | 17.x | Environment config |
| cors | 2.x | Cross-origin requests |
| nodemon | 3.x | Dev auto-reload |

### Database
| Technology | Purpose |
|---|---|
| PostgreSQL | Relational data storage |

---

## 📁 Project Structure

```
CRUDAPP/
├── CLIENT/                         # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Top bar with search & add button
│   │   │   ├── Tablelist.jsx       # Clients table with edit/delete
│   │   │   └── ModalForm.jsx       # Shared add/edit modal form
│   │   ├── App.jsx                 # Root component & state management
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── SERVER/                         # Express backend
    ├── src/
    │   ├── controllers/
    │   │   └── clientController.js # Request handlers
    │   ├── routes/
    │   │   └── clientRoute.js      # Route definitions
    │   ├── services/
    │   │   └── clientServices.js   # Database query logic
    │   ├── db.js                   # PostgreSQL connection
    │   └── index.js                # Express app entry point
    ├── .env
    └── package.json
```

---

## 📡 API Reference

Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/clients` | Fetch all clients |
| `POST` | `/clients` | Create a new client |
| `PUT` | `/clients/:id` | Update a client by ID |
| `DELETE` | `/clients/:id` | Delete a client by ID |
| `GET` | `/clients/search?q=` | Search clients by name, email, or job |

### Client Object

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "job": "Frontend Developer",
  "rate": 50,
  "isactive": true
}
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) installed and running

### 1. Clone the Repository

```bash
git clone https://github.com/dev-nouman/crud-app.git
cd crud-app
```

### 2. Setup the Backend

```bash
cd SERVER
npm install
```

Create a `.env` file (see [Environment Variables](#-environment-variables)), then:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

### 3. Setup the Frontend

```bash
cd CLIENT
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔑 Environment Variables

Create a `.env` file inside the `SERVER/` directory:

```env
PG_USER=your_postgres_username
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=5432
```

---

## 🗄️ Database Setup

Connect to your PostgreSQL instance and run the following SQL to create the required table:

```sql
CREATE TABLE clients_tb (
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(100)  NOT NULL,
  email     VARCHAR(150)  NOT NULL,
  job       VARCHAR(100),
  rate      NUMERIC(10,2),
  isactive  BOOLEAN DEFAULT FALSE
);
```

---

## 👤 Author

**Muhammad Nouman Ali**

<p>
  <a href="https://github.com/dev-nouman"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://linkedin.com/in/mnouman-ali"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
</p>

---

<div align="center">
  <sub>Built with ❤️ using React · Express · PostgreSQL</sub>
</div>
