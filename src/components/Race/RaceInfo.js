import React, { Component } from 'react';
import './RaceScreenContent.css'
import './RaceInfo.css'

class RaceInfo extends Component
{

  state = {
    race: "Dwarf",
    bonuses: ["bonus 1", "bonus 2"],
    languages: ["lang one", "lang 2"],
    other: ["other 1", "other 2"],
    desc: "One dynamic long string",
    image: "./dwarf.png"
  }

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
