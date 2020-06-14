import React from 'react';
import { Button, Jumbotron, Container, Row } from 'react-bootstrap';

function NeutronJumbotron() {
  return (
    <div>
      <Jumbotron>
        <Container display='flex'>
          <Row>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>  
            </p>
          </Row>
          <Row>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>  
            </p>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default NeutronJumbotron;
