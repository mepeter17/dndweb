import React, { Component } from 'react';
import logo from './d_d_logo.jpg';

class Header extends Component
{

  render()
  {
    return (
      <div className='main'>
      <div>
      <a href='/'>
      <img src={logo} alt="Logo" height='50px' />
      
      </a>
          </div>
      </div>

    );
  }
}

export default Header;
