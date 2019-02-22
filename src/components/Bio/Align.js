import React from 'react';
import './Bio.css'
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'



class Align extends React.Component
{

  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='alignment'/>
      <div className='m'>
        <div className='lr'>

          <div className="left">
            <h3>Select Alignment:</h3>
            <table id="simple-board">
               <tbody>
                 <tr id="row0">
                   <td id="cell0-0"><button className='button_class'>Lawful Good</button></td>
                   <td id="cell0-1"><button className='button_class'>Neutral Good</button></td>
                   <td id="cell0-2"><button className='button_class'>Chaotic Good</button></td>
                 </tr>
                 <tr id="row1">
                   <td id="cell1-0"><button className='button_class'>Lawful Neutral</button></td>
                   <td id="cell1-1"><button className='button_class'>True Neutral</button></td>
                   <td id="cell1-2"><button className='button_class'>Chaotic Neutral</button></td>
                 </tr>
                 <tr id="row2">
                   <td id="cell2-0"><button className='button_class'>Lawful Evil</button></td>
                   <td id="cell2-1"><button className='button_class'>Neutral Evil</button></td>
                   <td id="cell2-2"><button className='button_class'>Chaotic Evil</button></td>
                 </tr>
               </tbody>
             </table>
          </div>

          <div className='right'>
            <h3>Description</h3>
            <p>Lots of text</p>
          </div>


        </div>
        </div>
      </div>
      <Footer prev="/bio" next='/equipment' />
    </div>
    );
  }
}

export default Align;
