import React from 'react';
import './Bio.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';


class Bio extends React.Component
{
  constructor(props)
  {
    super(props);
    let cD = CommonDataManager.getInstance();
    this.state =
    {
      gender: cD._gender,
      name: cD._name,
      ft: cD._ft,
      in: cD._in,
      lbs: cD._lbs,
      bio: cD._bio,
      age: cD._age,
      race: cD._race,
      height_change: 6
    }
    cD._ft = this.state.ft;

    this.ButtonClick = this.ButtonClick.bind(this);
    this.child = React.createRef();
  }
  
  details = [
    {race: "Human", feetBase: 4, inchBase: 8, heightMod: "2d10", weightBase: 110, weightMod: "2d4"},
    {race: "Dwarf", feetBase: 3, inchBase: 10, heightMod: "2d4", weightBase: 120, weightMod: "2d6"},
    {race: "Elf", feetBase: 4, inchBase: 6, heightMod: "2d10", weightBase: 95, weightMod: "1d4"},
    {race: "Halfling", feetBase: 2, inchBase: 7, heightMod: "2d4", weightBase: 35, weightMod: "1"},
    {race: "Dragonborn", feetBase: 5, inchBase: 6, heightMod: "2d8", weightBase: 175, weightMod: "2d6"},
    {race: "Gnome", feetBase: 2, inchBase: 11, heightMod: "2d4", weightBase: 35, weightMod: "1"},
    {race: "Half-Elf", feetBase: 4, inchBase: 9, heightMod: "2d8", weightBase: 110, weightMod: "2d4"},
    {race: "Half-Orc", feetBase: 4, inchBase: 10, heightMod: "2d10", weightBase: 140, weightMod: "2d6"},
    {race: "Tiefling", feetBase: 4, inchBase: 9, heightMod: "2d8", weightBase: 110, weightMod: "2d4"}
  ];
  
  roll(dice)
  {
    if(dice === "1")
      return 1;
    dice = dice.split("d");
    var sum = 0;
    for(var i = 0; i < dice[0]; i++)
      sum += Math.ceil(Math.random() * dice[1]);
    return sum;
  }
  
  randomHeight(race)
  {
    for(var d of this.details)
    {
      if(race === d.race)
      {
        var inch = d.feetBase * 12 + d.inchBase;
        var change = this.roll(d.heightMod);
        inch += change;
        this.setState({ft: Math.floor(inch/12), in: inch%12, height_change: change});
        
        let cD = CommonDataManager.getInstance();
        cD._ft = Math.floor(inch/12);
        cD._in = inch%12;
      }
    }
  }
  
  randomWeight(race)
  {
    for(var d of this.details)
    {
      if(race === d.race)
      {
        var weight = d.weightBase;
        var mod = this.roll(d.weightMod);
        weight += mod * this.state.height_change;
        this.setState({lbs: weight});
        
        let cD = CommonDataManager.getInstance();
        cD._lbs = weight;
      }
    }
  }

  ButtonClick(new_gender)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData._gender !== null)
      document.getElementById(commonData._gender).setAttribute("class", "button_class_bio");
    commonData._gender = new_gender;
    document.getElementById(new_gender).setAttribute("class", "button_persist_bio");

    this.setState({
      gender: commonData._gender
    });
  }

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._gender !== null){
      this.ButtonClick(commonData._gender);
      document.getElementById(commonData._gender).setAttribute("class", "button_persist_bio");
    }
  }

  handleChange(e) {
    var var_name = "_" + e.target.name;
    let cd = CommonDataManager.getInstance();
    cd[var_name] = e.target.value;
    this.refresh_state();
  }

  refresh_state = () =>
  {
    let cd = CommonDataManager.getInstance()
    this.setState({
      gender: cd._gender,
      name: cd._name,
      ft: cd._ft,
      in: cd._in,
      lbs: cd._lbs,
      bio: cd._bio,
      age: cd._age
    });
  }

  change_gender = (g) =>
  {
    let cd = CommonDataManager.getInstance();
    cd['_gender'] = g;
    this.refresh_state();
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
        <Tabs value='bio'/>
          <div className='m'>
          <button class='tab tab2 tab3 tab4 tab_block tab_shift'></button>
              <div className='lr'>
                  <div className='left'>
                      <div className='ud'>
                        <h1><b1>Bio</b1></h1>
                        <h3><b3>Choose Name:</b3></h3>
                        <div className='buttons1'>
                          <input type="text" name="name"
                            onChange={ this.handleChange.bind(this) }
                            value={this.state.name}/>
                        </div>
                        <h3><b3>Select Gender:</b3></h3>
                        <div className='buttons'>
                          <bio1><button class='button_class_bio'  id='Male' onClick={()=>this.ButtonClick('Male')}>Male</button></bio1>
                          <bio1><button class='button_class_bio'  id='Female' onClick={()=>this.ButtonClick('Female')}>Female</button></bio1>
                        </div>
                        <h3><b3>Set Age:</b3></h3>
                        <div className='buttons'>
                          <input type="text" name="age"
                            onChange={ this.handleChange.bind(this) }
                            value={this.state.age} />
                          <a1>&nbsp;yrs</a1>
                        </div>
                        <h3><b3>Set Height:</b3></h3>
                        <div className='buttons'>
                          <input type="text" name="ft"
                            onChange={ this.handleChange.bind(this) }
                            value={this.state.ft}/>
                          <a1>&nbsp;ft&nbsp;&nbsp;</a1>
                          <input type="text" name="in"
                            onChange={ this.handleChange.bind(this) }
                            value={this.state.in}/>
                          <a1>&nbsp;in</a1>
                          <bio1><button class='random_button' onClick={()=>(this.state.race) ? (this.randomHeight(this.state.race)) : (this.randomHeight("Human"))}>Random</button></bio1>
                        </div>
                          <h3><b3>Set Weight:</b3></h3>
                          <div className='buttons'>
                            <input type="text"
                              value={this.state.lbs}
                              onChange={ this.handleChange.bind(this) }
                              name="lbs"/>
                            <a1>&nbsp;lbs</a1>
                            <bio1><button class='random_button' onClick={()=>(this.state.race) ? (this.randomWeight(this.state.race)) : (this.randomWeight("Human"))}>Random</button></bio1>
                          </div>
                        </div>
                  </div>

                  <div className='right'>
                    <h3><b3>Biography (optional):</b3></h3>
                    <textarea type='bio'
                      value={this.state.bio}
                      onChange={ this.handleChange.bind(this) }
                      name="bio" />
                  </div>
              </div>
          </div>
     </div>
          <Footer prev="/stats" next='/alignment' />
    </div>
    );
  }
}

export default Bio;
