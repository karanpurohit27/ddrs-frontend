import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import Cookies from 'js-cookie';
const Sell=()=>{
    const [amount, setAmount] = useState('');
    const [size, setSize] = useState('');
    const email=Cookies.get('user');

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await axios.post('http://localhost:5000/files', { email, amount,size });
      console.log(response.data.token); 
      console.log('Amount:', amount);
      console.log('Size:', size);

      // Reset the form after submission
      setAmount('');
      setSize('');
    };
  
    return(<>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="size">
        <Form.Label>Size</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    </>)
}

export default Sell;