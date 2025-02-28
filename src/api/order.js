import axios from 'axios';
import apiUrl from '../apiConfig.js';

// create an order
export const createOrder = (data) => {
  let { customerName, customerEmail, recipientName, businessName, address, unitNumber, city, state, country, zipCode  } = data;

  console.log("data sent to createOrder request", data)

  return axios.post(apiUrl + '/order', {
    order: {
      customerName: data.customerName || "",
      customerEmail: data.customerEmail || "",
      recipientName: data.recipient_name,  
      businessName: data.recipient_business_name,
      address: data.recipient_address,
      unitNumber: data.recipient_unit,
      city: data.recipient_city,
      state: data.recipient_state,
      country: data.recipient_country,
      zipCode: data.recipient_zip,
      message: data.message,  
    }
  })
}

// get all orders
export const getOrders = (user) => {
  return axios.get(apiUrl + `/orders`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// get a single order 
export const getAnOrder = (user, id) => {
  console.log("user from getAnOrder", user)
  return axios.get(apiUrl + `/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
  

// update an order as sent 