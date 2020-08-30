import React from 'react';
import { Container, Row, Nav, Navbar } from 'react-bootstrap';
import './CredentialContainer.scss';

function CredentialContainer() {
  return (
    <Container fluid className='cred-ctn'>
      <Row><h1>Our Credentials:</h1></Row>
    </Container>
  );
}

export default CredentialContainer;
