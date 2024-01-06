import React, { useState } from 'react';
import './StationMaster.css';

const StationMaster = ({ onSubmit }) => {
    const [trainData, setTrainData] = useState({ name: '', platform: '', arrivalTime: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/trains/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(trainData),
            });

            if (response.ok) {
                const createdTrain = await response.json();
                onSubmit(createdTrain);
                setTrainData({ name: '', platform: '', arrivalTime: '' });
            } else {
                console.error('Failed to create train. Server returned:', response.status);
            }
        } catch (error) {
            console.error('Error creating train:', error);
        }
    };

    return (
        <div className="station-master">
            <h2>Station Master</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Train Name:
                    <input type="text" name="name" value={trainData.name} onChange={(e) => setTrainData((prevData) => ({ ...prevData, name: e.target.value }))} />
                </label>
                <br />
                <label>
                    Platform:
                    <input type="text" name="platform" value={trainData.platform} onChange={(e) => setTrainData((prevData) => ({ ...prevData, platform: e.target.value }))} />
                </label>
                <br />
                <label>
                    Arrival Time:
                    <input type="datetime-local" name="arrivalTime" value={trainData.arrivalTime} onChange={(e) => setTrainData((prevData) => ({ ...prevData, arrivalTime: e.target.value }))} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default StationMaster;
