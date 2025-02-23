import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const Return = (order) => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');

    console.log('Order:', order)
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
  
      fetch(`http://localhost:5000/session-status?session_id=${sessionId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        });
    }, []);

    console.log("order", order)
  
    if (status === 'open') {
      return (
        <Navigate to="/checkout" />
      )
    }
  
    if (status === 'complete') {
      return (
        <section id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.

            <a>{order.recipient_business_name}</a>
          </p>
        </section>
      )
    }
  
    return null;
  }