import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import CommonDataManager from '../CommonDataManager';


class Home extends Component
{
  reset()
  {
    CommonDataManager.newInstance();
  }

  render()
  {
    return (
      <div className='home_main'>
        <div className='left_home'>
          <ul>
            <li> <Link to={"/race"}>
            <button class='button' onClick={()=>this.reset()}>Create New Character</button> </Link> </li>
            <li><Link to={"/race"}>
            <button class='button button2'>Resume Character Creation</button> </Link></li>
          </ul>
        </div>

        <div className='right_home'></div>
        <div className='skele_drag'>
          <img src={require("./skeleton_dragon1.png")} alt="Dragon" width='1650px'/>
        </div>



      </div>
    );
  }
}

export default Home;
