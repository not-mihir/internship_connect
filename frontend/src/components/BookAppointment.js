// src/components/BookAppointment.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/BookAppointment.css';
// import API from '../api'; // Uncomment this when connecting to the actual API

const BookAppointment = () => {
    const { id } = useParams();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Mock booking process
        alert(`Appointment booked successfully for internship ID: ${id} on ${date} at ${time}`);
        navigate(`/home`);

        // Uncomment and use this when you have the API ready
        // try {
        //     await API.post(`/internships/${id}/book`, { date, time });
        //     alert('Appointment booked successfully');
        //     navigate(`/home`);
        // } catch (error) {
        //     console.error('Error booking appointment:', error);
        // }
    };

    return (
        <div className="book-appointment">
            <h1>Book Appointment</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div>
                    <label>Time:</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookAppointment;
