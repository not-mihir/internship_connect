// src/components/FacultyProfile.js
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import API from '../api';

const FacultyProfile = () => {
    const { id } = useParams();
    const [faculty, setFaculty] = useState(null);

    useEffect(() => {
        const fetchFaculty = async () => {
            try {
                const response = await API.get(`/professors/${id}`);
                setFaculty(response.data);
            } catch (error) {
                console.error('Error fetching faculty:', error);
            }
        };

        fetchFaculty();
    }, [id]);

    if (!faculty) return <div>Loading...</div>;

    return (
        <div>
            <h1>{faculty.name}</h1>
            <p>{faculty.qualifications}</p>
            <h2>Offered Internships</h2>
            <ul>
                {faculty.internships.map(internship => (
                    <li key={internship._id}>
                        <Link to={`/internships/${internship._id}`}>{internship.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyProfile;
