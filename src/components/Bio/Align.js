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
      alignment: "Lawful Good"
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

    this.setState({
      alignment: new_align
    });
  }

  componentDidMount(){
    let commonData = CommonDataManager.getInstance();
    if(commonData._alignment !== null){
      this.ButtonClick(commonData._alignment);
      document.getElementById(commonData._alignment).setAttribute("class", "button_persist_align");
    }
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
            <h3><b3>Description</b3></h3>
            <a1>&nbsp;&nbsp;Lots of text</a1>
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
