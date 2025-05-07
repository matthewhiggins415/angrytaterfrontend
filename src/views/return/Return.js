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
        } catch (error) {
          console.log(error);
        }
      }

      createTheOrder(orderInfo);

      // ✅ GA4 purchase event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "purchase",
          ecommerce: {
            transaction_id: sessionId || "unknown_txn",
            value: 20 || 0,
            currency: "USD",
            items: [
              {
                item_id: updatedOrderInfo.sku || "potato_sku",
                item_name: updatedOrderInfo.message || "Custom Potato",
                price: 20,
                quantity: 1,
              },
            ],
          },
        });
      }

      sessionStorage.clear();
    }
  }, [status]);

  useEffect(() => {
  if (status === 'complete' && window.fbq) {
    window.fbq('track', 'Purchase', {
      value: 20, // You could dynamically insert the actual order value
      currency: 'USD',
    });
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
        <p>Thank you for your business!</p> <br/>
        <p>Upon sending your potato a confirmation email will be sent to {customerEmail}.</p> <br/>
        <p>If you have any questions, please email <a href="mailto:angrytaters@gmail.com">angrytaters@gmail.com</a>.</p>
        <a>{order.recipient_business_name}</a>
        <HomeBtn onClick={() => navigate("/")}>back to home</HomeBtn>

      </ReturnSection>
    )
  }
  return null;
}