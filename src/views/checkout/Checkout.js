import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import apiUrl from '../../apiConfig';
import React, { useCallback, useState, useEffect } from "react";

const stripePromise = loadStripe('pk_test_51QsVuIIz1XZR8bQ2bKMH5l9Ehts5mwusAk79wDC4o3ILuhqRubSht8dQfPizoXJLH1tKUOAoi28BdFWW9pcJh0Qt00MBOgngZ3');

const CheckoutForm = () => {
  const sessionData = sessionStorage.getItem('orderInfo'); // Retrieve stored data
  const parsedData = sessionData ? JSON.parse(sessionData) : {}; // Parse if exists

  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Important!
        },
        body: JSON.stringify({
          sessionData: parsedData, // Send session storage data
        }),
      });
  
      const data = await response.json();
      return data.clientSecret;
      
    } catch (error) {
      console.error("Error fetching client secret:", error);
      throw error; // Rethrow the error if needed
    }
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
