// src/components/FacultyProfile.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/FacultyProfile.css';
// import API from '../api'; // Uncomment this when connecting to the actual API

const FacultyProfile = () => {
    const { id } = useParams();
    const [faculty, setFaculty] = useState(null);

    useEffect(() => {
        // Mock data for example purposes
        const mockFaculties = {
            '1': {
                name: 'Professor A',
                qualifications: 'PhD in Computer Science',
                internships: [
                    { _id: '101', title: 'AI Research Internship' },
                    { _id: '102', title: 'Data Science Internship' },
                ],
            },
            '2': {
                name: 'Professor B',
                qualifications: 'PhD in Electrical Engineering',
                internships: [
                    { _id: '201', title: 'Embedded Systems Internship' },
                    { _id: '202', title: 'Signal Processing Internship' },
                ],
            },
            '3': {
                name: 'Professor C',
                qualifications: 'PhD in Mechanical Engineering',
                internships: [
                    { _id: '301', title: 'Robotics Internship' },
                    { _id: '302', title: 'Automotive Engineering Internship' },
                ],
            },
        };
        setFaculty(mockFaculties[id]);

        // Uncomment and use this when you have the API ready
        // const fetchFaculty = async () => {
        //     try {
        //         const response = await API.get(`/professors/${id}`);
        //         setFaculty(response.data);
        //     } catch (error) {
        //         console.error('Error fetching faculty:', error);
        //     }
        // };

        // fetchFaculty();
    }, [id]);

    if (!faculty) return <div>Loading...</div>;

    return (
        <div className="faculty-profile">
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
