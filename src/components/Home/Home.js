import React, { Component } from 'react';
import './Home.css';
import {Link} from "react-router";
import dragon from './skeleton_dragon.png'


class Home extends Component
{

  render()
  {
    return (
      <div className='main'>
        <div className='left'>
            <Link to={"/race"}>
            <button>Create Character</button>
            </Link>
            <button>Load and View Character</button>
        </div>

        <div className='right'>
          <img src={dragon} height='200px'/>
        </div>



      </div>
    );
  }
}

export default Home;
