import React, { Component } from 'react';
import './RaceInfo.css'
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer'
//const Race = require('../../DndBackend/DndCharacterStorage/Races/race');

class RaceInfo extends Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      race: "Dwarf",
      bonuses: ["bonus 1", "bonus 2"],
      languages: ["lang one", "lang 2"],
      other: ["other 1", "other 2"],
      desc: "One dynamic long string",
      image: "./dwarf.png"
    };
  }

  ButtonClick(next_race)
  {
      var ns =
      {
        race: next_race,
        bonuses: "Bonus",
        languages: "Language 1",
        other: ["Other", "Other 2"],
        desc: "Description"
      }
      this.setState({race: ns.race,
      bonuses: ns.bonuses,
      languages: ns.languages,
      other: ns.other,
      desc: ns.desc});
  }

  left_list = [ "Dwarf", "Elf", "Halfling", "Human", "Dragonborn"];
  right_list = ["Gnome", "Half-Elf", "Half-Orc", "Tiefling"];

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
        <div className='tabs'>
          <ul>
            <li> <Link to={"/race"}>
            <button class='tab tab_current'>Race</button> </Link> </li>
            <li> <Link to={"/class"}>
            <button class='tab tab2 '>Class</button> </Link> </li>
            <li> <Link to={"/stats"}>
            <button class='tab tab3'>Stats</button> </Link> </li>
            <li> <Link to={"/bio"}>
            <button class='tab tab4'>Bio</button> </Link> </li>
            <li> <Link to={"/alignment"}>
            <button class='tab tab5'>Alignment</button> </Link> </li>
            <li> <Link to={"/alignment"}>
            <button class='tab tab6'>Weapons</button> </Link> </li>
            <li> <Link to={"/alignment"}>
            <button class='tab tab7'>Armor</button> </Link> </li>
            <li> <Link to={"/alignment"}>
            <button class='tab tab8'>Other</button> </Link> </li>
            <li> <Link to={"/alignment"}>
            <button class='tab tab9'>Spells</button> </Link> </li>
          </ul>
        </div>
        <div className='m'>
          <button class ='tab tab_block'></button>
          <div className='button_side'>
            <h1>Race Selection</h1>
            <h2>Choose a Race:</h2>
            <div className='TwoLists'>
              <ul>{this.left_list.map(p => <li key={p}><button class='button_class' onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
              <ul>{this.right_list.map(p => <li key={p}><button class='button_class' onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
            </div>
          </div>

          <div className='desc_side'>
            <div className='top'>
              <div className='left'>
                <h1>{this.state.race}</h1>
                <h3>Race Bonuses:</h3>
                  <ul> {this.state.bonuses} </ul>
                <h3>Languages:</h3>
                    <ul> {this.state.languages} </ul>
                <h3>Other Important Info:</h3>
                    <ul> {this.state.other} </ul>
              </div>

              <div className='right'>
                <img src={require("../Race/dwarf.png")} alt="dwarf" height='250px' />
              </div>
            </div>

            <div className='bottom'>
              <h3>Description:</h3>
                {this.state.desc}
            </div>
          </div>

        </div>
      </div>
      <Footer prev="/race" next='/class'/>
    </div>
    );
  }

}

export default RaceInfo;
