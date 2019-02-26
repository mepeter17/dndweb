import React, { Component } from 'react';
import logo from './dnd_full_logo.png';
import './Header.css';
import {Link} from 'react-router-dom';
import CommonDataManager from '../CommonDataManager';

class Header extends Component
{
  reset()
  {
    CommonDataManager.newInstance();
  }

  render()
  {
    return (
      <div className='main'>
        <div>
          <Link to={"/"}>
          <img src={logo} alt="Logo" height='95px'/>
          </Link>
          <li> <Link to={"/race"}>
          <button class='button_class_reset' onClick={()=>this.reset()}>Reset</button> </Link> </li>
        </div>
      </div>

    );
  }
}

export default Header;
