import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Doctorprofile/Profile';
import Finddoctor from './Components/Finddoctor/Finddoctor';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/doctor" element={<Finddoctor />} />
        <Route exact path="/BruceWillisprofile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
};
function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
