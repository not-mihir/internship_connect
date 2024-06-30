// src/pages/HomePage.js
import React from 'react';
import FacultyList from '../components/FacultyList';
import '../Styles/Homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            <div className='card-hptext' >Below contains the list of Faculty's and their Specialization</div>
            <FacultyList />
        </div>
    );
};

export default HomePage;
