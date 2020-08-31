import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.scss';

function ServiceCard(props) {
  return (
    <Card className='svc-card svc-card--borderless'>
      <img className='' src={props.image} width='auto' height='auto' />
      <Card.Title>{props.title}</Card.Title>
    </Card>
  );
}

export default ServiceCard;
