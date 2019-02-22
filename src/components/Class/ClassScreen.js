import React, { Component } from 'react';
import './ClassScreen.css'
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer'
import Class from '../../DndBackend/DndCharacterStorage/Classes/class.js';

class ClassScreen extends React.Component
{

  constructor(props)
  {
  		super(props);
      this.state =
      {
          class: "Fighter",
          important_stats: "Str and Dex",
          bonuses: ["bonus 1", "bonus 2"],
          other: ["other 1", "other 2"],
          desc: "One dynamic long string",
          image: "./dwarf.png"
        }
        this.ButtonClick = this.ButtonClick.bind(this);
        this.child = React.createRef();
  	}

    left_list = [ "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk"];
    right_list = ["Paladin", "Ranger", "Rogue", "Sorceror", "Warlock", "Wizard"];

  ButtonClick(new_class)
  {

      var myClass =
      {
        class: "Bard",
        important_stats: "aaStr and Dex",
        bonuses: ["aabonus 1", "bonus 2"],
        other: ["aaother 1", "other 2"],
        desc: "aaOne dynamic long string",
        image: "./dwarf.png"
      };

      //myClass = new Class("Bard");

      this.setState({
        class: new_class,
        important_stats: myClass.important_stats,
        bonuses: myClass.bonuses,
        other: myClass.other,
        desc: myClass.desc
      });
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
        <div className='tabs'>
          <ul>
            <li> <Link to={"/race"}>
            <button class='tab'>Race</button> </Link> </li>
            <li> <Link to={"/class"}>
            <button class='tab tab2 tab_current'>Class</button> </Link> </li>
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
          <button class ='tab tab2 tab_block'></button>
          <div className='button_side'>
            <h1><b1>Class Selection</b1></h1>
            <h3><b3>Choose a Class:</b3></h3>
            <div className='TwoLists'>
              <ul>{this.left_list.map(p => <li key={p}><button class='button_class' onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
              <ul>{this.right_list.map(p => <li key={p}><button class='button_class' onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
            </div>
          </div>

          <div className='desc_side'>
            <div className='top'>
              <div className='left'>
                <h2><b2>{this.state.class}</b2></h2>
                <h3><b3>Important Stats:</b3></h3>
                <a1> {this.state.important_stats} </a1>
                <h3><b3>Class Bonuses:</b3></h3>
                {this.state.bonuses.map(p => <ul> <a1 key={p}>{p} </a1> </ul>)}
                <h3><b3>Other Important Info:</b3></h3>
                {this.state.other.map(p => <ul> <a1 key={p}>{p} </a1> </ul>)}
              </div>

              <div className='right'>
                <img src={require("../Race/dwarf.png")} alt="dwarf" height='250px' />
              </div>
            </div>

            <div className='bottom'>
              <h3><b3>Description:</b3></h3>
              <a1>{this.state.desc}</a1>
            </div>
          </div>

        </div>
      </div>
      <Footer prev="/race" next='/stats'/>
    </div>
    );
  }
}

export default ClassScreen;
