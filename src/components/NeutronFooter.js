import React from 'react';
import { Container, Row, Col, Image, Nav, Navbar } from 'react-bootstrap';
import NeutronLogo from '../images/nu4-removebg-preview.png';
import './NeutronFooter.scss';

function NeutronFooter() {
  return (
    <div className='bg-dark text-white-50 footer'>
      <Container>
        <Row>
          <Col>
            <h5>Contact Info</h5>
            Email: sgneutron@gmail.com <br/>
            Mobile: +65 9169 9955
          </Col>
          <Col>
            <h5>Follow us at</h5>
            <a target='_blank' href="https://www.facebook.com/groups/583579769225855/">Facebook</a> <br/>
            <a target='_blank' href="https://www.instagram.com/neutron.sg/">Instagram</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NeutronFooter;
