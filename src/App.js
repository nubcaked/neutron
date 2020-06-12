import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar.js';
import Home from './components/routes/Home.js';
import NeutronRectangleLogo from './images/neutron-rectangle-logo.png';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container className="App">
      <BrowserRouter>
        <Navbar logo={NeutronRectangleLogo} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
