import React from 'react';
import NeutronNavbar from './components/NeutronNavbar';
import NeutronJumbotron from './components/NeutronJumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <NeutronNavbar/>
      <NeutronJumbotron/>
    </React.Fragment>
  );
}

export default App;
