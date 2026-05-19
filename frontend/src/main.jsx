import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/shared/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import Benefits from './pages/Benefits.jsx'
import About from './pages/About.jsx'
import Register from './pages/Register.jsx'
import Admin from './pages/Admin.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/shared/ProtectedRoute.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
