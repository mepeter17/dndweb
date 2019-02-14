import React, { Component } from 'react';
import './RaceScreenContent.css'
import './RaceInfo.css'
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
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps(nextProps)
  {
    var ns = nextProps.props;
    this.setState({race: ns.race,
      bonuses: ns.bonuses,
      languages: ns.languages,
      other: ns.other,
      desc: ns.desc});
  }

  // select_race(new_race)
  // {
  //   var myRace =
  //   {
  //     race: "Elf",
  //     abilityScore: ["elf 1", "elf 2"],
  //     languages: ["elf one", "lang 2"],
  //     abilities: ["elf 1", "other 2"],
  //     description: "One dynamic elf elf elf",
  //     image: "./dwarf.png"
  //   }
  //
  //   this.setState({
  //     race: new_race,
  //     languages: myRace.languages,
  //     bonuses: myRace.abilityScore,
  //     other: myRace.abilities,
  //     desc: myRace.description
  //   });
  //
  // }

  render()
  {
    return (
      <div className='full'>
      <div className='top'>
          <div className='left'>
            <h1>{this.state.race}</h1>
            <h3>Race Bonuses:</h3>
              <ul> {this.state.bonuses.map(p => <li key={p}>{p}</li>)} </ul>
            <h3>Languages:</h3>
              <ul> {this.state.languages.map(p => <li key={p}>{p}</li>)} </ul>
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
    );
  }
}

export default RaceInfo;
