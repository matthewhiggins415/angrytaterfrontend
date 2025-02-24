import React, { useState } from 'react';
import { ScreenContainer, Form, Input, SubmitBtn } from './Login.styles';
import { useNavigate } from "react-router-dom";
import { signIn } from '../../api/user';

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('form submit')
      const signInResponse = await signIn(formData)
      console.log(signInResponse)
      
      setUser(signInResponse.data.user);

      if (signInResponse.data.user.isAdmin === true) {
        // notify('login successful')
        navigate("/orders");
      } else {
        // notify(`${signInResponse.data.msg}`, 'danger')
        console.log(signInResponse)
      }
    } catch(e) {
      // notify(`something went wrong`, 'danger')
      console.log('something went wrong')
    }
  }

  return (
    <ScreenContainer>
      <Form onSubmit={handleSubmit}>
        <Input 
          name="email"  
          type="email" 
          value={formData.email} 
          placeholder="user email" 
          onChange={onChange}
          required='true'
        />
        <Input 
          name="password"  
          type="text" 
          value={formData.password} 
          placeholder="user password" 
          onChange={onChange}
          required='true'
        />
        <SubmitBtn type="submit">submit</SubmitBtn>
      </Form>
    </ScreenContainer>
  )
}

export default Login