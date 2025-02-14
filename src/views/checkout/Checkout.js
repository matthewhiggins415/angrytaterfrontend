import React, { useState } from 'react';
import { Container, Form, Input, SectionContainer, TextArea, ImgContainer, SubmitBtn } from './Checkout.styles';

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
      <ImgContainer>
        
      </ImgContainer>
      <Form onSubmit={handleSubmit}>
        <SectionContainer>
          <p>Your information</p>
          <Input 
            name="name" 
            type="text" 
            value={formData.name} 
            placeholder="enter your name" 
            onChange={onChange}
          />
          <Input 
            name="email"  
            type="email" 
            value={formData.email} 
            placeholder="enter your email" 
            onChange={onChange}
          />
        </SectionContainer>
        <SectionContainer>
          <p>Recipient information</p>
          <Input 
            name="recipient_name"  
            type="text" 
            value={formData.recipient_name} 
            placeholder="recipient's name" 
            onChange={onChange}
          />
          <Input 
            name="recipient_business_name"  
            type="text" 
            value={formData.recipient_business_name} 
            placeholder="business name (optional)" 
            onChange={onChange}
          />
          <Input 
            name="recipient_address"  
            type="text" 
            value={formData.recipient_address} 
            placeholder="street address" 
            onChange={onChange}
          />
          <Input 
            name="recipient_unit"  
            type="text" 
            value={formData.recipient_unit} 
            placeholder="unit # (optional)" 
            onChange={onChange}
          />
          <Input 
            name="recipient_city"  
            type="text" 
            value={formData.recipient_city} 
            placeholder="city" 
            onChange={onChange}
          />
          <Input 
            name="recipient_zip"  
            type="text" 
            value={formData.recipient_zip} 
            placeholder="zip code" 
            onChange={onChange}
          />
          <Input 
            name="recipient_country"  
            type="text" 
            value={formData.recipient_country} 
            placeholder="country" 
            onChange={onChange}
          />
        </SectionContainer>
        <SectionContainer>
          <p>Your custom message</p>
          <TextArea
            name="message"  
            type="textarea" 
            value={formData.message} 
            placeholder="message on your potato" 
            onChange={onChange}
          />
        </SectionContainer>
        <SubmitBtn>submit</SubmitBtn>
      </Form>
    </Container>
  );
}

export default Checkout;
