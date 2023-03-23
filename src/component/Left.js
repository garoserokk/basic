import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { newactions } from "../redux/reducer/slice";
import { useDispatch } from "react-redux";

function Left() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [phone, setphone] = useState(0);
  const getname = (event) => {
    setname(event.target.value);
  };
  const getphone = (event) => {
    setphone(event.target.value);
  };
  const addContact = (event) => {
    event.preventDefault();
    dispatch(newactions.ADD_CONTACT({ name, phone }));
  };
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={getname} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number" onChange={getphone} />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
}

export default Left;
