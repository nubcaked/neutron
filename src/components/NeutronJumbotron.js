import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import './NeutronJumbotron.scss';

function NeutronJumbotron() {
  return (
    <Jumbotron className='jumbo--position-relative jumbo--height-fill jumbo--vertical-center'>
      <Container>
        <h1>Affordable and reliable local techies at your fingertips</h1>
        <p>We specialise in technical jobs ranging from helping with simple technical assignments to building full-blown enterprise systems</p>
        <Button target='_blank' href="https://forms.gle/Y7ZjScCKMkK6VJfr5" variant="success" block>Request For IT Help</Button>
      </Container>
    </Jumbotron>
  );
}

export default NeutronJumbotron;
