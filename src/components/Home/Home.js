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
            <button>Create Character</button> </Link> </li>
            <li><Link to={"/"}><button>Load and View Character</button> </Link></li>
          </ul>
        </div>

        <div className='right'>
          <img src={require("./skeleton_dragon.png")} alt="Dragon" height='200px'/>
        </div>



      </div>
    );
  }
}

export default Home;
