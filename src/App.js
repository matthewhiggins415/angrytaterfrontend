import './App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// views
import Landing from './views/landing/Landing';

// components
import Navbar from './components/navbar/Navbar';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Navbar />
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>

      <Routes>
        <Route path='/' element={<Landing user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
