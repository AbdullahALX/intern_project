import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Visualize from './pages/Visualize';
import Movement from './pages/Movement';
import Show from './pages/Show';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/visualize" element={<Visualize />} />
        <Route path="/viewMovement" element={<Movement />} />
        <Route path="/showVisualize" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
