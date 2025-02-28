import React, { useEffect, useState } from 'react';
import { OrderDetailsContainer, DetailContainer, BackBtn } from './OrderDetails.styles';
import { getAnOrder } from '../../api/order';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderDetails = ({ user }) => {
  const { id } = useParams(); // Extracts "id" from the URL params
  const [order, setOrder] = useState({});
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const getOrder = async (user, id) => {
      try {
        const res = await getAnOrder(user, id)
        setOrder(res.data.order)
      } catch (error) {
        console.log(error)
      }
    }

    getOrder(user, id);
  }, [])

  return (
    <OrderDetailsContainer>
      <BackBtn onClick={() => navigate(-1)}>back</BackBtn>
      <DetailContainer>
        <div>
          <p>Created:{order.createdAt ? new Date(order.createdAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles" }) : "Loading..."}</p>
          <p>Customer Email: {order.customerEmail}</p>
          <p>Customer Name: {order.customerName}</p>
          <p>{order.isSent}</p>
          <p>Business Name: {order.businessName}</p>
          <p>Recipient Name: {order.recipientName}</p>
          <p>Address: {order.address}</p>
          <p>Unit: {order.unitNumber}</p>
          <p>City: {order.city}</p>
          <p>State: {order.state}</p>
          <p>Zip: {order.zipCode}</p>
          <p>Country: {order.country}</p>
        </div>
      </DetailContainer>
    </OrderDetailsContainer>
  )
}

export default OrderDetails