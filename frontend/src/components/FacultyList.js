// src/components/FacultyList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import API from '../api'; // Uncomment this when connecting to the actual API

const FacultyList = () => {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        // Mock data for example purposes
        const mockFaculties = [
            { _id: '1', name: 'Professor A' },
            { _id: '2', name: 'Professor B' },
            { _id: '3', name: 'Professor C' },
        ];
        setFaculties(mockFaculties);

        // Uncomment and use this when you have the API ready
        // const fetchFaculties = async () => {
        //     try {
        //         const response = await API.get('/professors');
        //         setFaculties(response.data);
        //     } catch (error) {
        //         console.error('Error fetching faculties:', error);
        //     }
        // };

        // fetchFaculties();
    }, []);

    return (
        <div>
            <h1>Faculty List</h1>
            <ul>
                {faculties.map(faculty => (
                    <li key={faculty._id}>
                        <Link to={`/professors/${faculty._id}`}>{faculty.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyList;
