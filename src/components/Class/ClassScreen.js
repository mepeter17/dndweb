import React from 'react';
import './ClassScreen.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';

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
      desc: "One dynamic long string aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa aaaaaaaaa",
      image: "./dwarf.png"
    }
    this.render();
    this.ButtonClick = this.ButtonClick.bind(this);
    this.child = React.createRef();
  }

  left_list = [ "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk"];
  right_list = ["Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

  ButtonClick(new_class)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData._class !== null)
      document.getElementById(commonData._class).setAttribute("class", "button_class");
    commonData._class = new_class;
    document.getElementById(new_class).setAttribute("class", "button_persist");
    
      
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

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._class !== null){
      this.ButtonClick(commonData._class);
      document.getElementById(commonData._class).setAttribute("class", "button_persist");
    }
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
      <Tabs value='class'/>
        <div className='m'>
          <button class='tab tab2 tab_block'></button>
          <div className='button_side'>
            <h1><b1>Class Selection</b1></h1>
            <h3><b3>Choose a Class:</b3></h3>
            <div className='TwoLists'>
              <ul>{this.left_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)} </ul>
              <ul>{this.right_list.map(p => <li key={p}><button class='button_class' id={p} onClick={()=>this.ButtonClick(p)}>{p}</button></li>)}  </ul>
            </div>
          </div>

          <div className='desc_side'>
            <div className='top'>
              <div className='left'>
                <h2><b2>{this.state.class}</b2></h2>
                <h3><b3>Important Stats:</b3></h3>
                <a1>&nbsp;&nbsp;{this.state.important_stats}</a1>
                <h3><b3>Class Bonuses:</b3></h3>
                {this.state.bonuses.map(p => <ul>&nbsp;&nbsp;<a1>-</a1> <a1 key={p}>{p} </a1> </ul>)}
                <h3><b3>Other Important Info:</b3></h3>
                {this.state.other.map(p => <ul>&nbsp;&nbsp;<a1>-</a1> <a1 key={p}>{p} </a1> </ul>)}
              </div>

              <div className='right'>
                <img src={require("../../photos/" + this.state.class + ".png")} alt={this.state.class} class="picture" />
              </div>
            </div>

            <div className='bottom'>
              <h3><b3>Description:</b3></h3>
              <a1>&nbsp;&nbsp;{this.state.desc}</a1>
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
