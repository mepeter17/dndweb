import React, { Component } from 'react';
import logo from './dnd_transparent.png';
import {Link} from 'react-router-dom';

class Header extends Component
{

  render()
  {
    return (
      <div className='main'>
      <div>
          <Link to={"/"}>
          <img src={logo} alt="Logo" height='50px' />
          </Link>
          </div>
      </div>

    );
  }
}

export default Header;
