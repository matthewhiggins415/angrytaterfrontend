import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../api/user';
import { getOrders } from '../../api/order';
import { Container, OrdersContainer, SingleOrder, OrderDetailsBtn, LogoutBtn } from './Orders.styles';

const Orders = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getAllOrders = async (user) => {
      try {
        const res = await getOrders(user)
        console.log("res", res)
        setOrders(res.data.orders)
      } catch(error) {
        console.log(error)
      }
    }

    getAllOrders(user);
  }, [])

  //if not admin then return to landing. 
  const handleLogout = async () => {
    try {
      const signoutResponse = await signOut(user);
      if (signoutResponse.status === 204) {
        navigate('/')
      } else {
        console.log('something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <LogoutBtn onClick={handleLogout}>logout</LogoutBtn>
      <OrdersContainer>
      {orders.map((order, index) => {
          // Convert the UTC timestamp to PST
          const createdAtPST = new Date(order.createdAt).toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true, // Optional: Set to false for 24-hour format
          });

          return (
            <SingleOrder key={order._id}>
              <p>{index + 1}. created at: {createdAtPST}</p>
              <p>address: {order.address}</p>
              <OrderDetailsBtn onClick={() => navigate(`/orders/${order._id}`)}>details</OrderDetailsBtn>
            </SingleOrder>
          );
        })}
      </OrdersContainer>
    </Container>
  )
}

export default Orders