import React, { Component } from 'react';
import './Home.css';
import {Link} from "react-router";


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
          <img src={require("./skeleton_dragon.png")} alt="Dragon" height='200px'/>
        </div>



      </div>
    );
  }
}

export default Home;
