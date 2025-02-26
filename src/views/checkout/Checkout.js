import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import apiUrl from '../../apiConfig';
import React, { useCallback, useState, useEffect } from "react";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_TEST_KEY);

const CheckoutForm = () => {
  const sessionData = sessionStorage.getItem('orderInfo'); // Retrieve stored data
  const parsedData = sessionData ? JSON.parse(sessionData) : {}; // Parse if exists

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${apiUrl}/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify({
        sessionData: parsedData, // Send session storage data
      })
    })
    .then((res) => res.json())
    .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};
  
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export default CheckoutForm;
