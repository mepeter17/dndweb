import React, { Component } from 'react';
import Img from 'react-image'
import logo from './d_d_logo.jpg'

class Header extends Component
{

  render()
  {
    return (
      <div>
      Logo Goes here
      <image src={logo} alt="logo" />

      </div>
    );
  }
}

export default Header;
