import React, { Component } from 'react';
import './ClassScreenContent.css'
import ClassButtonList from './ClassButtonList'
import RaceInfo from './RaceInfo'

class ClassScreenContent extends Component
{

  render()
  {
    return (
      <div className='m'>

      <div className='button_side'>
      <ClassButtonList/>
      </div>

      <div className='desc_side'>
      <RaceInfo/>
      </div>


      </div>
    );
  }
}

export default ClassScreenContent;
