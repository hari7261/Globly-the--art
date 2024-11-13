import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import the necessary routing components
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home'; 
import WelcomeScreen from './components/WelcomeScreen.jsx';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <Router> {/* Wrap your entire app in the Router to enable routing */}
      <div className="App">
        {showWelcome ? (
          <WelcomeScreen onComplete={handleWelcomeComplete} /> 
        ) : (
          <>
            <Navbar /> {/* This is always shown after the welcome screen */}
            <Routes> {/* Define your routes */}
              <Route path="/" element={<Home />} /> {/* Home page route */}
              {/* Add more routes as necessary */}
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
