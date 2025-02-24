import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../api/user';

const Orders = ({ user, setUser }) => {
  const navigate = useNavigate();

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
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Orders