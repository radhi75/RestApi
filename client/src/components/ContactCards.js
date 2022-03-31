import React, { useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deletecontact, getcontacts } from "../redux/action/ContactActions";
const ContactCards = ({ contacts }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(
    (id) => {
      dispatch(getcontacts(id));
    },
    [dispatch]
  );
  return (
    <div>
      <Card style={{ width: "18rem", margin: " 5rem auto " }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{contacts.name}</ListGroup.Item>
          <ListGroup.Item>{contacts.email}</ListGroup.Item>
          <ListGroup.Item>{contacts.age}</ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button as={Link} to={`/EditContact/${contacts._id}`}>
              EDIT
            </Button>
            <Button onClick={() => dispatch(deletecontact(contacts._id))}>
              DELETE
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ContactCards;
