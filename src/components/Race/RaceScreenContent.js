import React, { Component } from 'react';
import './RaceScreenContent.css'
import RaceButtonList from './RaceButtonList'
import RaceInfo from './RaceInfo'
import Footer from '../Footer/Footer'


class RaceScreenContent extends React.Component
{

  constructor(props)
  {
  		super(props);
      this.state =
      {
            race: "Dwarfff",
            bonuses: ["bonus 1", "bonus 2"],
            languages: ["lang one", "lang 2"],
            other: ["other 1", "other 2"],
            desc: "One dynamic long string",
            image: "./dwarf.png"
        }
        this.ButtonClick = this.ButtonClick.bind(this);
        this.child = React.createRef();
  	}





  ButtonClick(new_race)
  {
    //const Race = require('../../DndBackend/DndCharacterStorage/Races/race');
      console.log(new_race);

      var myRace =
      {
        race: "Elf",
        abilityScore: ["elf 1"],
        languages: ["elf one"],
        abilities: ["elf 1", "other 2"],
        description: "One dynamic elf elf elf",
        image: "./dwarf.png"
      };

      //myRace = new Race(new_race);
      //console.log(myRace);
      this.setState({
        race: new_race,
        languages: myRace.languages,
        bonuses: myRace.abilityScore,
        other: myRace.abilities,
        desc: myRace.description
      });

  }

  render()
  {
    return (
      <div className="up_and_down">
        <div className='m'>
          <div className='button_side'>
            <RaceButtonList pM={this.ButtonClick}/>
          </div>

          <div className='desc_side'>
            <RaceInfo props={this.state}/>
          </div>
      </div>
        <Footer prev="/home" next="/class"/>
      </div>
    );
  }
}

export default RaceScreenContent;
