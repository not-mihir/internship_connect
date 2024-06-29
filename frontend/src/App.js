// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Navbar from './components/Navbar';
import FacultyProfile from './components/FacultyProfile';
import InternshipDetail from './components/InternshipDetail';
import BookAppointment from './components/BookAppointment';
import './Styles/Navbar.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<MainApp />} />
            </Routes>
        </Router>
    );
};

const MainApp = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/professors/:id" element={<FacultyProfile />} />
                <Route path="/internships/:id" element={<InternshipDetail />} />
                <Route path="/book-appointment/:id" element={<BookAppointment />} />
            </Routes>
        </>
    );
};

export default App;
