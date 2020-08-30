import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AppDev from '../images/app-dev.jpg';
import GraphicDesign from '../images/graphic-design.png';
import WebDev from '../images/web-dev.jpg';
import ServiceCard from './ServiceCard';
import './ServiceCardContainer.scss';
import CodingAssignment from '../images/coding-assignment.png';

function ServiceCardContainer() {
  return (
    <Container fluid id='services' className='svc-card-ctn'>
      <Row><h1>Our Services:</h1></Row>
      <Row className='svc-card-ctn__row'>
        <ServiceCard title='Web Development' image={WebDev} />
        <ServiceCard title='App Development' image={AppDev} />
        <ServiceCard title="Coding Assignment" image={CodingAssignment} />
        <ServiceCard title='Graphic Design' image={GraphicDesign} />
      </Row>
    </Container>
  );
}

export default ServiceCardContainer;
