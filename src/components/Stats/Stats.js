import React, { Component } from 'react';
import './Stats.css'
import Footer from '../Footer/Footer'
import { DropdownButton, Dropdown  } from 'react-bootstrap';
import {ButtonToolbar, Button} from 'react-bootstrap'


class Stats extends React.Component
{

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  stats = ["11", "14", "12", "15", "13", "18"];
  cats = ["Str", "Dex", "Cons", "Wis", "Int", "Cha"]
  render()
  {
    return (
    <div className='content_footer'>
      <div className='lr'>

        <div className="Stats">
          <h1>Stats</h1>
          <h2>Randomly Generated Stats</h2>
          <p>{this.stats.map(p => (p + " "))}</p>
          <ul>
          {this.cats.map(p => <li key={p}>{p}:<DropdownButton id="dropdown-basic-button" title="Dropdown button">
            {this.stats.map(p => <Dropdown.Item>{p}</Dropdown.Item>)}
          </DropdownButton> </li>)}
          </ul>
        </div>

        <div>
          <h3>Racial Bonuses:</h3>
          <h3>Important for Class:</h3>
          <h3>Common:</h3>
          <h3>Alternative:</h3>
        </div>


      </div>
      <Footer prev="/class" next='/bio' />
    </div>
    );
  }
}

export default Stats;
