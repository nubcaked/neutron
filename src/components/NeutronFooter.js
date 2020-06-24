import React from 'react';
import { Container, Row, Col, Image, Nav, Navbar } from 'react-bootstrap';
import NeutronLogo from '../images/nu4-removebg-preview.png';

function NeutronFooter() {
  return (
    <div className='bg-dark text-white-50'>
      <Container>
        <Row>
          <Col>
            <h5>Contact Info</h5>
            Email: sgneutron@gmail.com <br/>
            Mobile: +65 9169 9955
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NeutronFooter;
