import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NeutronBackground from './components/NeutronBackground';
import NeutronJumbotron from './components/NeutronJumbotron';
import NeutronNavbar from './components/NeutronNavbar';

function App() {
  return (
    <React.Fragment>
      <NeutronBackground/>
      <NeutronNavbar/>
      <NeutronJumbotron/>
      {/* <NeutronJumbotron/>
      <NeutronJumbotron/>
      <NeutronJumbotron/>
      <NeutronJumbotron/> */}
    </React.Fragment>
  );
}

export default App;
