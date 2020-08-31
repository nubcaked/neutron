import React from 'react';
import { Container, Row, Nav, Navbar } from 'react-bootstrap';
import './CredentialContainer.scss';
import NUSLogo from '../images/nus-logo.png';
import NTULogo from '../images/ntu-logo.png';
import SMULogo from '../images/smu-logo.svg';
import SCBLogo from '../images/scb-logo.svg';

function CredentialContainer() {
  return (
    <Container fluid id='credentials' className='cred-ctn'>
      <Row className='cred-ctn__text-row'><h1>Our Credentials</h1></Row>
      <br />
      <Row className='cred-ctn__text-row'><h4>Education</h4></Row>
      <Row className='cred-ctn__img-row'>
        <img className='cred-ctn__cred' src={NUSLogo} />
        <img className='cred-ctn__cred' src={NTULogo} />
        <img className='cred-ctn__cred' src={SMULogo} />
      </Row>
      <br />
      <Row className='cred-ctn__text-row'><h4>Experience</h4></Row>
      <Row className='cred-ctn__img-row'>
        <img className='cred-ctn__cred' src={SCBLogo} />
      </Row>
    </Container>
  );
}

export default CredentialContainer;
