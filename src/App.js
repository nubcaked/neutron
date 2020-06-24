import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import NeutronJumbotron from './components/NeutronJumbotron';
import NeutronNavbar from './components/NeutronNavbar';
import NeutronFooter from './components/NeutronFooter';

function App() {
  return (
    <React.Fragment>
      <div className="div--height-max">
        <NeutronNavbar/>
        <NeutronJumbotron/>
      </div>
      <NeutronFooter/>
    </React.Fragment>
  );
}

export default App;
