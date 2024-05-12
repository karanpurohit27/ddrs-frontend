import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const UserInfo = ({ userInfo }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(userInfo);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission, e.g., update user info in the backend
    console.log("Updated user info:", formData);
    setEditing(false);
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          {editing ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  //value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  //value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Save
              </Button>
            </Form>
          ) : (
            <div>
              <p>Name: </p>
              <p>Email: userInfo.email</p>
              <Button variant="dark" onClick={() => setEditing(true)}>
                Edit
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserInfo;
