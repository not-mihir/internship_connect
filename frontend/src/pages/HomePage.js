// src/pages/HomePage.js
import React from 'react';
import FacultyList from '../components/FacultyList';
import '../Styles/Homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            <FacultyList />
        </div>
    );
};

export default HomePage;
