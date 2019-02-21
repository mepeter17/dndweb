import React, { Component } from 'react';
import './Stats.css'
import Footer from '../Footer/Footer'
import { DropdownButton, Dropdown  } from 'react-bootstrap';
import {ButtonToolbar, Button} from 'react-bootstrap'
import CommonDataManager from '../CommonDataManager';


class Stats extends React.Component
{
  constructor(props)
  {
    super(props);
    this.toggle = this.toggle.bind(this);
    let commonData = CommonDataManager.getInstance();

    if(commonData.getStats() == "empty")
    {
        this.stats = this.generate_stats();

    }
    else
    {
        this.stats = commonData.getStats();
    }
    this.cats =  [{s:"Str",v:"-"}, {s:"Dex",v:"-"}, {s:"Cons",v:"-"}, {s:"Wis",v:"-"}, {s:"Int",v:"-"}, {s:"Cha",v:"-"}];
    if(commonData.getCats() != "empty")
    {
        this.cats = commonData.getCats();
    }

    this.state = {
      dropdownOpen: false,
      cats: this.cats,
      list: this.stats
    };
    commonData.setStats(this.state.list);
    commonData.setCats(this.state.cats);



  }

  toggle()
  {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  generate_stats = () =>
  {
      var s = [];
      for(var i=0;i<6;i++)
      {
        s.push(this.generate_one_stat());
      }
      s.sort((a, b) => b - a);
      return s;
  }

  generate_one_stat = () =>
  {
    var lowest = 20;
    var total = 0;
    for(var i=0; i<4;i++)
    {
      var current_roll = Math.floor(Math.random() * Math.floor(6));
      if(current_roll < lowest)
      {
          lowest = current_roll;
      }
      total += current_roll;
    }
    return total-lowest;
  }


  handleChange = (stat) =>
  {
      this.setState()
  }

  pick_stat = (number, stat_name) =>
  {
      var new_list = this.state.list;
      for(var i=0;i<this.state.list.length;i++)
      {
          if(new_list[i] == number)
          {
              new_list.splice(i,1);
              this.setState({list: new_list})
              this.set_stat_with_return(stat_name,number);
              return;
          }
      }
  }

  set_stat_with_return = (stat_name,number) =>
  {
      var new_list = this.state.cats;
      for(var i=0;i<new_list.length;i++)
      {
        var current_stat_name = new_list[i]["s"];
        if(current_stat_name == stat_name)
        {
            var old_number = new_list[i]["v"];
            if(old_number != "-")
            {
                var available_stats = this.state.list;
                available_stats.push(old_number);
                this.setState({list:available_stats});
            }
            new_list[i]["v"] = number;
            this.setState({cats: new_list});
        }
      }
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='lr'>

        <div className="Stats">
          <h1>Stats</h1>
          <h2>Randomly Generated Stats</h2>
          <p>{(this.state.list).map(p => (p + " "))}</p>
          <ul>
          {
            (this.state.cats).map(p =>

              <li key={p['s']}>
                <div className='lr' >
                  <div className='ten'>{p['s']}</div>
                    <DropdownButton title={p['v']}>
                      {this.state.list.map(number =>
                          <Dropdown.Item>
                            <div onClick={()=>this.pick_stat(number, p['s'])}> {number} </div>
                          </Dropdown.Item>)}
                      </DropdownButton>
                </div>
              </li>
          )
          }
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
