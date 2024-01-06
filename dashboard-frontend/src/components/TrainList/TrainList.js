
import React, { useState, useEffect } from 'react';
import StationMaster from '../StationMaster/StationMaster';
import './TrainList.css'; 


const TrainList = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/trains/list')
            .then((response) => response.json())
            .then((data) => setTrains(data))
            .catch((error) => console.error('Error fetching trains:', error));
    }, []);

    const handleFormSubmit = (createdTrain) => {
        setTrains((prevTrains) => [...prevTrains, createdTrain]);
    };

    return (
        <div className="train-list-container">
            <h2>Train List</h2>
            <table className="train-list-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Train Name</th>
                        <th>Platform</th>
                        <th>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train) => (
                        <tr key={train.id}>
                            <td>{train.id}</td>
                            <td>{train.name}</td>
                            <td>{train.platform}</td>
                            <td>{train.arrivalTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <StationMaster onSubmit={handleFormSubmit} className="station-master" />
        </div>
    );
};

export default TrainList;
