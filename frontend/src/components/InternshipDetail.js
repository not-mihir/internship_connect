// src/components/InternshipDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Styles/InternshipDetail.css';
// import API from '../api'; // Uncomment this when connecting to the actual API

const InternshipDetail = () => {
    const { id } = useParams();
    const [internship, setInternship] = useState(null);

    useEffect(() => {
        // Mock data for example purposes
        const mockInternships = {
            '101': { title: 'AI Research Internship', description: 'Work on cutting-edge AI research projects.' },
            '102': { title: 'Data Science Internship', description: 'Analyze large datasets and build predictive models.' },
            '201': { title: 'Embedded Systems Internship', description: 'Develop software for embedded systems.' },
            '202': { title: 'Signal Processing Internship', description: 'Work on signal processing algorithms.' },
            '301': { title: 'Robotics Internship', description: 'Design and build robotic systems.' },
            '302': { title: 'Automotive Engineering Internship', description: 'Work on automotive engineering projects.' },
        };
        setInternship(mockInternships[id]);

        // Uncomment and use this when you have the API ready
        // const fetchInternship = async () => {
        //     try {
        //         const response = await API.get(`/internships/${id}`);
        //         setInternship(response.data);
        //     } catch (error) {
        //         console.error('Error fetching internship:', error);
        //     }
        // };

        // fetchInternship();
    }, [id]);

    if (!internship) return <div>Loading...</div>;

    return (
        <div className="internship-detail">
            <h1>{internship.title}</h1>
            <p>{internship.description}</p>
            <Link to={`/book-appointment/${id}`}>Book Appointment</Link>
        </div>
    );
};

export default InternshipDetail;
