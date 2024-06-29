// src/components/InternshipDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api';

const InternshipDetail = () => {
    const { id } = useParams();
    const [internship, setInternship] = useState(null);

    useEffect(() => {
        const fetchInternship = async () => {
            try {
                const response = await API.get(`/internships/${id}`);
                setInternship(response.data);
            } catch (error) {
                console.error('Error fetching internship:', error);
            }
        };

        fetchInternship();
    }, [id]);

    if (!internship) return <div>Loading...</div>;

    return (
        <div>
            <h1>{internship.title}</h1>
            <p>{internship.description}</p>
            <Link to={`/book-appointment/${internship._id}`}>Book Appointment</Link>
        </div>
    );
};

export default InternshipDetail;
