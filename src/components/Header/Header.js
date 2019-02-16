import React, { Component } from 'react';
import logo from './d_d_logo.jpg';
import {Link} from 'react-router-dom';

class Header extends Component
{

  render()
  {
    return (
      <div className='main'>
      <div>
        <Link to='/'>
          <img src={logo} alt="Logo" height='50px' />
          </Link>
          </div>
      </div>

    );
  }
}

export default Header;
