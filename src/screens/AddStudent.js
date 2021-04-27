import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function AddTrainee() {
  return (
    <Container>
      <Form>
        <Form.Control placeholder="enter a name "></Form.Control>
        <Form.Control placeholder="enter a gender "></Form.Control>
        <Form.Control placeholder="enter an email "></Form.Control>
        <Form.Control placeholder="enter a level "></Form.Control>
        <Button>SAVE</Button>
      </Form>
    </Container>
  );
}

export default AddTrainee;
