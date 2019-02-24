import React, { Component } from 'react';
import './RaceInfo.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs.js'
import CommonDataManager from '../CommonDataManager';
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

  left_list = [ "Dwarf", "Elf", "Halfling", "Human", "Dragonborn"];
  right_list = ["Gnome", "Half-Elf", "Half-Orc", "Tiefling"];

  ButtonClick(next_race)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData.race_button !== null)
      document.getElementById(commonData.race_button).setAttribute("class", "button_class");
    commonData.race_button = next_race;
    document.getElementById(next_race).setAttribute("class", "button_persist");
    
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

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData.race_button !== null){
      this.ButtonClick(commonData.race_button);
      document.getElementById(commonData.race_button).setAttribute("class", "button_persist");
    }
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
        <Tabs value='race'/>
        <div className='m'>
          <button class ='tab tab_block'></button>
          <div className='button_side'>
            <h1><b1>Race Selection</b1></h1>
            <h3><b3>Choose a Race:</b3></h3>
            <div className='TwoLists'>
              <ul>{this.left_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
              <ul>{this.right_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
            </div>
          </div>

          <div className='desc_side'>
            <div className='top'>
              <div className='left'>
                <h2><b2>{this.state.race}</b2></h2>
                <h3><b3>Race Bonuses:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.bonuses}</a1>
                <h3><b3>Languages:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.languages}</a1>
                <h3><b3>Other Important Info:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.other}</a1>
              </div>

              <div className='right'>
                <img src={require("../../photos/" + this.state.race + ".png")} alt={this.state.race} class='picture_race' />
              </div>
            </div>

            <div className='bottom'>
              <h3><b3>Description:</b3></h3>
              <a1>&nbsp;&nbsp;{this.state.desc}</a1>
            </div>
          </div>

        </div>
      </div>
      <Footer prev="/home" next='/class'/>
    </div>
    );
  }

}

export default RaceInfo;
