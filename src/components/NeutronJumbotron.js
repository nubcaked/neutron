import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';

function NeutronJumbotron() {
  return (
    <div>
      <Jumbotron className='bg-transparent'>
        <Container>
          {/* <Row>
            <Col> */}
              <h1>Affordable, reliable, local techies at your fingertips</h1>
              <p>
                We specialise in technical jobs ranging from helping with simple technical assignments to building full-blown enterprise systems
              </p>
              <Button target='_blank' href="https://forms.gle/Y7ZjScCKMkK6VJfr5" variant="success">Request For IT Help</Button>
            {/* </Col>
          </Row> */}
        </Container>
      </Jumbotron>
    </div>
  );
}

export default NeutronJumbotron;
