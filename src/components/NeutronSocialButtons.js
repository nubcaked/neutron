import React from 'react';
import './NeutronSocialButtons.scss';

function NeutronSocialButtons() {
  return (
    <div className="icon-bar">
      <a target='_blank' href="https://www.facebook.com/groups/583579769225855/" className="facebook"><i className="fa fa-facebook"></i></a>
      <a target='_blank' href="https://www.instagram.com/neutron.sg/" className="instagram"><i className="fa fa-instagram"></i></a>
      {/* <a href="#" className="google"><i className="fa fa-google"></i></a>
      <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
      <a href="#" className="youtube"><i className="fa fa-youtube"></i></a> */}
    </div>
  );
}

export default NeutronSocialButtons;
