import './App.css';
import React, { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// views
import Landing from './views/landing/Landing';
import CheckoutForm from './views/checkout/Checkout';
import { Return } from './views/return/Return';

// components
import Navbar from './components/navbar/Navbar';

// React Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

export const App = () => {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Navbar />
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>

      <Routes>
        <Route path='/' element={<Landing user={user}/>} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/return" element={<Return />} />
      </Routes>
    </Router>
  );
}

export default App;
