import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


class Home extends Component
{

  render()
  {
    return (
      <div className='home_main'>
        <div className='left'>
          <ul>
            <li> <Link to={"/race"}>
            <button class='button'>Create Character</button> </Link> </li>
            <li><Link to={"/"}>
            <button class='button button2'>Load and View Character</button> </Link></li>
          </ul>
        </div>

        <div className='right'>
          <img src={require("./skeleton_dragon_original.png")} alt="Dragon" height='800px'/>
        </div>



      </div>
    );
  }
}

export default Home;
