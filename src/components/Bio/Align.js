import React from 'react';
import './Bio.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';


class Align extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state =
    {
      alignment: "No alignment selected",
      desc: ""
    }
    this.render();
    this.ButtonClick = this.ButtonClick.bind(this);
    this.child = React.createRef();
  }

  ButtonClick(new_align)
  {
    let commonData = CommonDataManager.getInstance();
    if(commonData._alignment !== null)
      document.getElementById(commonData._alignment).setAttribute("class", "button_class_bio");
    commonData._alignment = new_align;
    document.getElementById(new_align).setAttribute("class", "button_persist_align");

    var new_desc = this.get_description(new_align);
    this.setState({
      alignment: new_align,
      desc: new_desc
    });

  }

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._alignment !== null){
      this.ButtonClick(commonData._alignment);
      document.getElementById(commonData._alignment).setAttribute("class", "button_persist_align");
    }
  }

  get_description(target_align)
  {
    switch(target_align)
    {
        case "Lawful Good": return "Lawful good characters follow the rules of society and work toward the better of everyone. Most celestials are lawful good, dedicated to keeping the world's peace";
        case "Neutral Good": return "Lawful neutral characters act in line with law, tradition, and common morals, but without a particular desire to improve lives or induce misery. Humanity as a whole tends to be lawful neutral, obeying laws and mostly caring for themselves and their friends";
        case "Chaotic Good": return "Chaotic good characters follow their conscience and try to help others, but without care for what's expected of their behavior. Elves are usually chaotic good.";
        case "Lawful Neutral": return "Lawful neutral characters act in line with law, tradition, and common morals, but without a particular desire to improve lives or induce misery. Humanity as a whole tends to be lawful neutral, obeying laws and mostly caring for themselves and their friends.";
        case "True Neutral": return "True neutral is the ultimate neutral alignment. Characters of this alignment don't take sides in the battle of good and evil, and just do what they feel is best at the time. Lizardfolk are an example of this, since they follow what the world gives them and tend to be very simplistic and objective in their lives.";
        case "Chaotic Neutral": return "Chaotic neutral characters are whimsical and value their freedom. They can be destructive, but lack malicious intent like chaotic evil characters. Many fey are chaotic neutral, and classes like bards, rogues, and barbarians are frequently played as chaotic neutral.";
        case "Lawful Evil": return "Lawful evil characters work within the rules they're surrounded by to do what they want. Imp familiars are an example of this, since they must listen to their master's order but are inherently self-focused since they're fiends.";
        case "Neutral Evil": return "Neutral evil characters follow a policy of, 'It's nothing personal, just business.' They do what they can get away with and don't usually have moral objections to anything. Rogues are stereotyped as neutral evil, though assassins, rogue or not, often are.";
        case "Chaotic Evil": return "Chaotic evil characters tend to be ruled by violence and destruction, and take pride in the damage they cause. Drow, fiends, orcs, and giants are typically chaotic evil.";
    }
    return "woops";
  }

  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='alignment'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab_block'></button>
        <div className='lr'>
          <div className="left">
            <div className="ud">
              <h1><b1>Alignment</b1></h1>
              <h3><b3>Select Alignment:</b3></h3>
              <table id="simple-board">
                 <tbody>
                    <tr id="row0">
                      <td id="cell0-0"><bio2><button className='button_class_bio' id='Lawful Good' onClick={()=>this.ButtonClick('Lawful Good')}>Lawful Good</button></bio2></td>
                      <td id="cell0-1"><bio2><button className='button_class_bio' id='Neutral Good' onClick={()=>this.ButtonClick('Neutral Good')}>Neutral Good</button></bio2></td>
                      <td id="cell0-2"><bio2><button className='button_class_bio' id='Chaotic Good' onClick={()=>this.ButtonClick('Chaotic Good')}>Chaotic Good</button></bio2></td>
                    </tr>
                    <tr id="row1">
                      <td id="cell1-0"><bio2><button className='button_class_bio' id='Lawful Neutral' onClick={()=>this.ButtonClick('Lawful Neutral')}>Lawful Neutral</button></bio2></td>
                      <td id="cell1-1"><bio2><button className='button_class_bio' id='True Neutral' onClick={()=>this.ButtonClick('True Neutral')}>True Neutral</button></bio2></td>
                      <td id="cell1-2"><bio2><button className='button_class_bio' id='Chaotic Neutral' onClick={()=>this.ButtonClick('Chaotic Neutral')}>Chaotic Neutral</button></bio2></td>
                    </tr>
                    <tr id="row2">
                      <td id="cell2-0"><bio2><button className='button_class_bio' id='Lawful Evil' onClick={()=>this.ButtonClick('Lawful Evil')}>Lawful Evil</button></bio2></td>
                      <td id="cell2-1"><bio2><button className='button_class_bio' id='Neutral Evil' onClick={()=>this.ButtonClick('Neutral Evil')}>Neutral Evil</button></bio2></td>
                      <td id="cell2-2"><bio2><button className='button_class_bio' id='Chaotic Evil' onClick={()=>this.ButtonClick('Chaotic Evil')}>Chaotic Evil</button></bio2></td>
                    </tr>
                 </tbody>
               </table>
            </div>
          </div>

          <div className='right'>
            <h3><b3>{this.state.alignment}</b3></h3>
            <a1>&nbsp;&nbsp;{this.state.desc}</a1>
          </div>


        </div>
        </div>
      </div>
      <Footer prev="/bio" next='/weapons' />
    </div>
    );
  }
}

export default Align;
