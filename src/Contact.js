import React from "react";
import './App.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Contact = ()=>{
  const navigate = useNavigate()
return(
    <div className="contactform">
    <div className="contactform1">
        <h2>Contact Us </h2>
        <br/>
        <Form onSubmit={
             event => {
              event.preventDefault();
          navigate('/mess')}
        }>
      <Row>
        <Col><Form.Control placeholder="First name" /></Col>
        <Col><Form.Control placeholder="Last name" /></Col>
      </Row>
      <br/>
      <Form.Control 
      placeholder="E-mail"
       type="email"
       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
      <br/>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}/>
      </FloatingLabel>
      <br/>
      <Button variant="success" type="submit">Click ME </Button>
    </Form>
    </div>
    </div>
);
}

export default Contact;