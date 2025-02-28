import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import apiUrl from '../../apiConfig';
import { ReturnSection, HomeBtn } from './Return.styles';
import { createOrder } from '../../api/order';

export const Return = (order) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');
  
    fetch(`${apiUrl}/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("stripe data:", data)
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
    });
  }, []);

  // Clear sessionStorage when status is 'complete'
  useEffect(() => {
    if (status === 'complete') {
      const storedData = sessionStorage.getItem("orderInfo"); // Retrieve stored string
      const orderInfo = storedData ? JSON.parse(storedData) : {}; // Parse JSON

      console.log("order info:", orderInfo); // Now it's a single JSON object

      const updatedOrderInfo = { ...orderInfo, customerEmail };

      const createTheOrder = async () => {
        try {
          const res = await createOrder(updatedOrderInfo);
          console.log("res", res)
        } catch (error) {
          console.log(error);
        }
      }

      createTheOrder(orderInfo);

      sessionStorage.clear();
    }
  }, [status]);
  
  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }
  
  if (status === 'complete') {
    return (
      <ReturnSection id="success">
        <p>Thank you for your business and unwavering spite.</p> 
        <p>A confirmation email will be sent to {customerEmail}.</p>
        <p>If you have any questions, please email <a href="mailto:orders@example.com">mhiggins.louis@gmail.com</a>.</p>
        <a>{order.recipient_business_name}</a>
        <HomeBtn onClick={() => navigate("/")}>back to home</HomeBtn>

      </ReturnSection>
    )
  }
  return null;
}