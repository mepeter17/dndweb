import React, { Component } from 'react';
import './RaceScreenContent.css'
import RaceButtonList from './RaceButtonList'
import RaceInfo from './RaceInfo'

class RaceScreenContent extends Component
{

  render()
  {
    return (
      <div className='m'>

      <div className='button_side'>
      <RaceButtonList/>
      </div>

      <div className='desc_side'>
      <RaceInfo/>
      </div>


      </div>
    );
  }
}

export default RaceScreenContent;
