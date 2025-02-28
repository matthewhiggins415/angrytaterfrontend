import './App.css';
import React, { useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// views
import Landing from './views/landing/Landing';
import CheckoutForm from './views/checkout/Checkout';
import { Return } from './views/return/Return';
import OrderInfo from './views/orderinfo/OrderInfo';
import Login from './views/login/Login';
import Orders from './views/orders/Orders';
import OrderDetails from './views/orderdetails/OrderDetails';

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
  const [order, setOrder] = useState({});

  console.log("order:", order)

  return (
    <Router>
      <Navbar />
      <ToastContainer theme="light" position="top-left" autoClose={1200}/>

      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route path="/order" element={<OrderInfo user={user} setOrder={setOrder} />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/return" element={<Return order={order} />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />}  />
        <Route path="/orders" element={<Orders user={user} setUser={setUser} />}  />
        <Route path="/orders/:id" element={<OrderDetails user={user} setUser={setUser} />} /> 
      </Routes>
    </Router>
  );
}

export default App;
