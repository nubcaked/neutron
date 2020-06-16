import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import NeutronJumbotron from './components/NeutronJumbotron';
import NeutronNavbar from './components/NeutronNavbar';

function App() {
  return (
    <div className="div--height-max">
      <NeutronNavbar/>
      <NeutronJumbotron/>
    </div>
  );
}

export default App;
