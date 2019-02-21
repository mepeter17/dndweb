import React, { Component } from 'react';
import './ClassScreen.css'
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
      <div className='m'>

        <div className='button_side'>
          <h1>Class Selection</h1>
          <h2>Choose a Class:</h2>
          <div className='TwoLists'>
            <ul>{this.left_list.map(p => <li key={p}><button onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
            <ul>{this.right_list.map(p => <li key={p}><button onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
          </div>
        </div>

        <div className='desc_side'>
          <div className='top'>
            <div className='left'>
              <h1>{this.state.class}</h1>
              <h3>Important Stats:</h3>
                <ul> {this.state.important_stats} </ul>
              <h3>Class Bonuses:</h3>
                  <ul> {this.state.bonuses.map(p => <li key={p}>{p}</li>)} </ul>
              <h3>Other Important Info:</h3>
                  <ul> {this.state.other.map(p => <li key={p}>{p}</li>)} </ul>
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
      <Footer prev="/race" next='/stats'/>
    </div>
    );
  }
}

export default ClassScreen;
