import React, { useState } from 'react';
import { Container, Form, Input, SectionContainer } from './Checkout.styles';

const Checkout = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient_name: '',
    recipient_business_name: '',
    recipient_address: '',
    recipient_unit: '',
    recipient_city: '',
    recipient_zip: '',
    recipient_country: '',
    date: '',
    message: ''
  })


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container> 
      <Form onSubmit={handleSubmit}>
        <SectionContainer>
          <Input 
            name="name"  /* Changed from "title" to "name" to match formData */
            type="text" 
            value={formData.name} /* Updated to formData.name */
            placeholder="Enter your name" 
            onChange={onChange}
          />
        </SectionContainer>
      </Form>
    </Container>
  );
}

export default Checkout;
