import React, { Component } from 'react';
import './RaceScreenContent.css'
import './RaceInfo.css'

class RaceInfo extends Component
{

  render()
  {
    return (
      <div className='full'>

      <div className='top'>
          <div className='left'>
            <h1>Dwarf</h1>
            <h3>Race Bonuses:</h3>
            <li>one</li>
            <li>two</li>
            <h3>Languages:</h3>
            <li>one</li>
            <li>two</li>
            <h3>Other Important Info:</h3>
            <li>one</li>
          </div>

          <div className='right'>
          Image goes here.
          </div>
      </div>

      <div className='bottom'>
          <h3>Description:</h3>
          Dwarves are really cool. how far do we want this to goooooooooooooooooooooooooo
      </div>

      </div>
    );
  }
}

export default RaceInfo;
