import React from "react";
import { Button, Card } from "react-bootstrap";

const Contact = ({ contact }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded h-90'>
        <Card.Img
          style={{ objectFit: "contain" }}
          variant='top'
          src={contact.picture.large}
        />
        <Card.Body>
          <Card.Title>{`${
            contact.name.first + " " + contact.name.last
          }`}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Address</Card.Subtitle>
          <Card.Text>
            <div>
              <strong>Number: </strong>
              {contact.location.street.number}
            </div>
            <div>
              <strong>Street: </strong>
              {contact.location.street.name}
            </div>
            <div>
              <strong>City: </strong>
              {contact.location.city}
            </div>
            <div>
              <strong>State: </strong>
              {contact.location.state}
            </div>
            <div>
              <strong>Country: </strong>
              {contact.location.country}
            </div>
          </Card.Text>
          <Card.Subtitle className='mb-2 text-muted'>Phone</Card.Subtitle>
          <Card.Text>
            <div>{contact.phone}</div>
          </Card.Text>
          <Card.Subtitle className='mb-2 text-muted'>Emial</Card.Subtitle>
          <Card.Text>
            <div>{contact.email}</div>
          </Card.Text>

          <a href={`mailto:${contact.email}`}>
            <Button className='w-100' variant='dark'>
              Contact test
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default Contact;
