import React from 'react';
import '../Styles/ProfilePage.css';


const ProfilePage = () => {
    // Dummy user data; in real application, fetch this data from backend
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        role: "Student"
    };

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
        </div>
    );
};

export default ProfilePage;
