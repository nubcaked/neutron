import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import NeutronJumbotron from './components/NeutronJumbotron';
import NeutronNavbar from './components/NeutronNavbar';
import NeutronFooter from './components/NeutronFooter';
import NeutronSocialButtons from './components/NeutronSocialButtons';
import ServiceCardContainer from './components/ServiceCardContainer';
import CredentialContainer from './components/CredentialContainer';

function App() {
  return (
    <React.Fragment>
      <div className="div--height-max">
        <NeutronNavbar/>
        <NeutronJumbotron/>
      </div>
      <ServiceCardContainer/>
      <CredentialContainer/>
      <NeutronFooter/>

      <NeutronSocialButtons/>
    </React.Fragment>
  );
}

export default App;
