import React, { useState } from 'react';
import { Container, Form, Input, SectionContainer, TextArea, ImgContainer, SubmitBtn } from './OrderInfo.styles';
import { useNavigate } from "react-router-dom";

const OrderInfo = ({ user, setOrder }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    recipient_name: '',
    recipient_business_name: '',
    recipient_address: '',
    recipient_unit: '',
    recipient_city: '',
    recipient_state: '',
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
    // console.log("Form submitted:", formData);
    setOrder(formData);
    sessionStorage.setItem("orderInfo", JSON.stringify(formData));
    navigate('/checkout');
  };
  
  return (
    <Container> 
      <ImgContainer>
          
      </ImgContainer>
      <Form onSubmit={handleSubmit}>
        <SectionContainer>
          <p>Potato Recipient Info</p>
          <Input 
            name="recipient_business_name"  
            type="text" 
            value={formData.recipient_business_name} 
            placeholder="business name (optional)" 
            onChange={onChange}
            required={false}
          />
          <Input 
            name="recipient_name"  
            type="text" 
            value={formData.recipient_name} 
            placeholder="recipient's name" 
            onChange={onChange}
            required={false}
          />
          <Input 
            name="recipient_address"  
            type="text" 
            value={formData.recipient_address} 
            placeholder="street address" 
            onChange={onChange}
            required={true}
          />
          <Input 
            name="recipient_unit"  
            type="text" 
            value={formData.recipient_unit} 
            placeholder="unit # (optional)" 
            onChange={onChange}
            required={false}
          />
          <Input 
            name="recipient_city"  
            type="text" 
            value={formData.recipient_city} 
            placeholder="city" 
            onChange={onChange}
            required={true}
          />
          <Input 
            name="recipient_zip"  
            type="text" 
            value={formData.recipient_zip} 
            placeholder="zip code" 
            onChange={onChange}
            required={true}
          />
          <Input 
            name="recipient_state"  
            type="text" 
            value={formData.recipient_state} 
            placeholder="state" 
            onChange={onChange}
            required={true}
          />
          <Input 
            name="recipient_country"  
            type="text" 
            value={formData.recipient_country} 
            placeholder="country" 
            onChange={onChange}
            required={true}
          />
        </SectionContainer>
        <SectionContainer>
          {/* <p>Your custom message</p> */}
          <TextArea
            name="message"  
            type="textarea" 
            value={formData.message} 
            placeholder="Your message here.. be sure to include your name here if desired. " 
            onChange={onChange}
            required={true}
          />
        </SectionContainer>
        <SubmitBtn type="submit">Submit</SubmitBtn>
    </Form>
  </Container>
  )
}

export default OrderInfo