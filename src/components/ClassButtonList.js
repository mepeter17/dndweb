import React, { Component } from 'react';
import './ClassButtonList.css'

class ClassButtonList extends Component
{

  render()
  {
    return (
      <div className='BL'>
        <h1>Race Selection</h1>
        <h2>Choose a Race:</h2>

        <div className='TwoLists'>
          <ul>
            <li>  <button>Dwarf</button></li>
            <li>  <button>Elf</button></li>
            <li>  <button>Halfling</button></li>
            <li>  <button>Human</button></li>
            <li>  <button>Dragonborn</button></li>
          </ul>

          <ul>
            <li>  <button>Gnome</button></li>
            <li>  <button>Half-Elf</button></li>
            <li>  <button>Half-Orc</button></li>
            <li>  <button>Tiefling</button></li>
          </ul>
        </div>


      </div>

    );
  }
}

export default ClassButtonList;
