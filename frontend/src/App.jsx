import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Visualize from './pages/Visualize';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/visualize" element={<Visualize />} />
      </Routes>
    </Router>
  );
}

export default App;
