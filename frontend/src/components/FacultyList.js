// src/components/FacultyList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import API from '../api'; // Uncomment this when connecting to the actual API
import '../Styles/FacultyList.css';


const FacultyList = () => {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        // Mock data for example purposes
        const mockFaculties = [
            { _id: '1', name: 'Priyank', work: 'PhD (Wireless Communications), IIT Delhi', spec:'Reinforcement Learning, Deep Learning for Finance and Cyber Security, Wireless Communication, Cyber-Physical Systems, Information Security'},
            { _id: '2', name: 'Mihir', work: 'PhD (Wireless Communications), IIT Delhi', spec:'Reinforcement Learning, Deep Learning for Finance and Cyber Security, Wireless Communication, Cyber-Physical Systems, Information Security'},
            { _id: '3', name: 'Raj', work: 'PhD (Wireless Communications), IIT Delhi', spec:'Reinforcement Learning, Deep Learning for Finance and Cyber Security, Wireless Communication, Cyber-Physical Systems, Information Security'},
            { _id: '4', name: 'Hudka', work: 'PhD (Wireless Communications), IIT Delhi', spec:'Reinforcement Learning, Deep Learning for Finance and Cyber Security, Wireless Communication, Cyber-Physical Systems, Information Security'},
            { _id: '5', name: 'D', work: 'PhD (Wireless Communications), IIT Delhi', spec:'Reinforcement Learning, Deep Learning for Finance and Cyber Security, Wireless Communication, Cyber-Physical Systems, Information Security'},

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
                    <li key={faculty._id} className='card-adjust'>
                        <div className="card " style={{width: "20rem", height: "auto"}}>
                            <img src="" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">
                                        <Link to={`/professors/${faculty._id}`}>
                                            {faculty.name}
                                        </Link>
                                </h5>
                                <p className="card-text">{faculty.work}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Specialization:-</b>
                                    <p>{faculty.spec}</p>
                                </li>
                            </ul>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyList;
