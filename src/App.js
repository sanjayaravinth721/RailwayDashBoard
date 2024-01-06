import React from 'react';
import TrainList from './components/TrainList/TrainList'; 
import StationMaster from './components/StationMaster/StationMaster';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const appStyles = {
    fontFamily: 'Arial, sans-serif',
  };
  
  const navStyles = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
  };
  
  const linkStyles = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    marginRight: '10px',
  };
  
  const hrStyles = {
    marginTop: '20px',
    marginBottom: '20px',
    border: '0',
    borderTop: '1px solid #ccc',
  };

const App = () => {
  return (
    <BrowserRouter>
      <div style={appStyles}>
        <nav style={navStyles}>
          <ul>
            <li>
              <a style={linkStyles} href="/station-master">Station Master</a>
            </li>
            <li>
              <a style={linkStyles} href="/train-list">Train List</a>
            </li>
          </ul>
        </nav>

        <hr style={hrStyles} />

        <Routes>
          <Route path="/station-master" element={<StationMaster />} />
          <Route path="/train-list" element={<TrainList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
