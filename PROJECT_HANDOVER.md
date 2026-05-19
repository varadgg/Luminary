# Luminary Academy — Technical Project Documentation

This document provides a comprehensive overview of the Luminary Academy project architecture, deployment stack, and API specifications. It is designed to serve as a single source of truth for developers and AI agents to understand the system.

---

## 🏗️ Project Architecture

**Stack:** MERN (MongoDB, Express, React, Node.js)
**Frontend Build Tool:** Vite
**Styling:** Tailwind CSS / Vanilla CSS

### 🌐 Deployment Infrastructure
| Component | Hosting Provider | Deployment URL |
| :--- | :--- | :--- |
| **Frontend** | Netlify | `https://luminaryacademy.netlify.app` |
| **Backend** | Render | `https://luminaryacademy.onrender.com` |
| **Database** | MongoDB Atlas | Cluster: `luminaryacademy.llr0bh2` |

---

## 📡 Backend Specifications

The backend is a Node.js/Express application hosted on Render.

### 🔌 API Endpoints

#### 🛠️ System / Health
*   **GET `/`**
    *   **Description:** Health check and server status.
    *   **Auth:** Public
    *   **Response:** `{ "status": "ok", "message": "...", "timestamp": "..." }`

#### 📝 Registration
*   **POST `/api/register`**
    *   **Description:** Submits a new student registration.
    *   **Auth:** Public
    *   **Body:** `{ "name", "mobile", "email", "domain", "college", "city" }`
    *   **Logic:** Generates a unique `applicationId` (e.g., `LUM-123456`).

*   **GET `/api/registrations`**
    *   **Description:** Fetches all student registrations.
    *   **Auth:** Private (Admin JWT required)
    *   **Header:** `Authorization: Bearer <token>`

#### 🔐 Authentication
*   **POST `/api/auth/login`**
    *   **Description:** Admin login.
    *   **Auth:** Public
    *   **Body:** `{ "email", "password" }`
    *   **Response:** `{ "_id", "email", "token" }`

*   **POST `/api/auth/create-admin`**
    *   **Description:** Temporary route to seed admin users in DB.
    *   **Auth:** Public

---

## 🗄️ Database Schema (MongoDB/Mongoose)

### 1. `Registration` Collection
*   `name`: String (Required)
*   `mobile`: String (Required)
*   `email`: String (Required, Unique)
*   `domain`: String (Required)
*   `college`: String (Required)
*   `city`: String (Required)
*   `applicationId`: String (Unique)
*   `createdAt`: Date (Default: Now)

### 2. `Admin` Collection
*   `email`: String (Required, Unique, Lowercase)
*   `password`: String (Hashed via bcrypt)
*   `timestamps`: True

---

## 💻 Frontend Configuration

The frontend is a React application using Vite.

### 🌐 API Connection
The frontend connects to the backend using the `VITE_API_URL` environment variable.
*   **Usage:** `${import.meta.env.VITE_API_URL}/api/register`
*   **Production URL:** `https://luminaryacademy.onrender.com`

### 🔑 Authentication Flow
1.  Admin logs in via `/login`.
2.  JWT token is stored in local storage.
3.  Token is sent in the `Authorization` header for protected routes (e.g., `/admin`).

---

## ⚙️ Environment Variables (Config)

### Backend (`backend/.env`)
| Key | Description |
| :--- | :--- |
| `PORT` | Server port (Render provides this automatically) |
| `MONGO_URI` | Atlas connection string (Place password in placeholders) |
| `JWT_SECRET` | Secret for signing JWT tokens |
| `ADMIN_EMAIL` | Hardcoded admin email |
| `ADMIN_PASSWORD` | Hardcoded admin password |
| `NODE_ENV` | Deployment mode (production) |

### Frontend (`frontend/.env`)
| Key | Value |
| :--- | :--- |
| `VITE_API_URL` | `https://luminaryacademy.onrender.com` |

---

## ⚠️ Critical Handover Notes for AI / Developers

1.  **502 Error Avoidance:** The `db.js` is configured *not* to call `process.exit(1)`. This ensures Render doesn't cycle in a crash loop if Atlas is slow to respond.
2.  **CORS:** Whitelisted domains include `localhost:5173`, `5174` and the Netlify URL.
3.  **MIME Types:** The server is a pure API server now. Frontend is decoupled and hosted on Netlify.
4.  **Health Check:** Render uses `GET /` to verify the instance is live. Do not remove this route.
5.  **IP Access:** Atlas MUST have `0.0.0.0/0` in Network Access for Render to connect.
