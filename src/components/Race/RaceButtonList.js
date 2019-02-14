import React, { Component } from 'react';
import './RaceButtonList.css'
import RaceInfo from './RaceInfo'
import PropTypes from 'prop-types';

class RaceButtonList extends Component
{


  left_list = [ "Dwarf", "Elf", "Halfling", "Human", "Dragonborn"];
  right_list = ["Gnome", "Half-Elf", "Half-Orc", "Tiefling"];

  click(the_race)
  {
    this.props.pM(the_race);
  }


  render()
  {
    return (
      <div className='BL'>
        <h1>Race Selection</h1>
        <h2>Choose a Race:</h2>

        <div className='TwoLists'>
          <ul>
          {this.left_list.map(p => <li key={p}><button onClick={()=>this.click(p)}>{p}</button></li>)}
          </ul>

          <ul>
          {this.right_list.map(p => <li key={p}><button onClick={()=>this.click(p)}>{p}</button></li>)}
          </ul>
        </div>


      </div>

    );
  }



}

export default RaceButtonList;
