import React from 'react';
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';
import './Weapons.css';


class Spells extends React.Component
{

  constructor(props)
  {
    super(props);
    let cd = CommonDataManager.getInstance();
    var init_a0 = cd._available_spells0;
    var init_p0 = cd._spells0;
    var init_a1 = cd._available_spells1;
    var init_p1 = cd._spells1;
    this.state =
    {
      available0: init_a0,
      purchased0: init_p0,
      available1: init_a1,
      purchased1: init_p1,
      selected0: null,
      selected1: null,
      max0: cd._max_spells0,
      max1: cd._max_spells1
    }
  }

  set_selected(item, number)
  {
    if(number === 0)
      this.setState({selected0: item});
    else
      this.setState({selected1: item});
  }


  buy0()
  {
      if(this.state.selected0 === null) return;
      let cd = CommonDataManager.getInstance();

      if(cd._max_spells0 <= this.state.purchased0.length)
        return;

      for(var i=0; i<this.state.purchased0.length; i++)
      {
            if(this.state.selected0 === this.state.purchased0[i])
              return;
      }

      var new_purchased = this.state.purchased0;
      new_purchased.push(this.state.selected0);

      this.setState({purchased0: new_purchased});
      cd._spells0 = new_purchased;
  }

  sell0()
  {
      if(this.state.selected0 === null) return;
      var new_purchased = this.state.purchased0
      for(var i=0; i<new_purchased.length; i++)
      {
        if(this.state.selected0 === new_purchased[i])
        {
          let cd = CommonDataManager.getInstance();
          new_purchased.splice(i,1);

          this.setState({purchased0: new_purchased});
          cd._spells0 = new_purchased;
          return;
        }
      }
  }


  buy1()
  {
      if(this.state.selected1 === null) return;
      let cd = CommonDataManager.getInstance();

      if(cd._max_spells1 <= this.state.purchased1.length)
        return;

      for(var i=0; i<this.state.purchased1.length; i++)
      {
            if(this.state.selected1 === this.state.purchased1[i])
              return;
      }

      var new_purchased = this.state.purchased1;
      new_purchased.push(this.state.selected1);

      this.setState({purchased1: new_purchased});
      cd._spells1 = new_purchased;
  }

  sell1()
  {
      if(this.state.selected1 === null) return;
      var new_purchased = this.state.purchased1
      for(var i=0; i<new_purchased.length; i++)
      {
        if(this.state.selected1=== new_purchased[i])
        {
          let cd = CommonDataManager.getInstance();
          new_purchased.splice(i,1);

          this.setState({purchased1: new_purchased});
          cd._spells1 = new_purchased;
          return;
        }
      }
  }


  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='spells'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab6 tab7 tab8 tab9 tab_block'></button>
        <div className='lr'>
        <div className="ud" name="base">
          <h1><b1>Spells</b1></h1>
          <h3><b3>Level 0 Spells: {(this.state.max0-this.state.purchased0.length) + " Remaining"}</b3></h3>

            <div className="lr" name="lvl 0 spells">
              <div className="left">
                <div className="ud">

                    <div className='lr'>
                        <div className='ScrollList_small' name="Available">
                            <ul>{this.state.available0.map(p => <li key={p}><button  id={p} onClick={()=>this.set_selected(p,0)}>{p['name']}</button></li>)} </ul>
                        </div>
                        <div className='ud' name="Buttons">
                          <button onClick={()=>this.buy0()}>Learn</button>
                          <button onClick={()=>this.sell0()}>Unlearn</button>
                        </div>
                        <div className='ScrollList_small' name="Purchased">
                          <ul>{this.state.purchased0.map(p => <li key={p}><button  id={p} onClick={()=>this.set_selected(p,0)}>{p['name']}</button></li>)} </ul>
                        </div>
                    </div>
                </div>
              </div>

              <div className='right'>
                <h3><b3>Description: { this.state.selected0 ? ( this.state.selected0['name'] ) : ("" )}</b3></h3>
                <a1>&nbsp;&nbsp;{ this.state.selected0 ? ( this.state.selected0['name'] ) : ("none" )}</a1>
              </div>
          </div>
          <h3><b3>Level 1 Spells: {(this.state.max1-this.state.purchased1.length) + " Remaining"}</b3></h3>
          <div className="lr" name = "lvl 1 spells">
            <div className="left">
              <div className="ud">

                  <div className='lr'>
                      <div className='ScrollList_small' name="Available">
                          <ul>{this.state.available1.map(p => <li key={p}><button  id={p} onClick={()=>this.set_selected(p,1)}>{p['name']}</button></li>)} </ul>
                      </div>
                      <div className='ud' name="Buttons">
                        <button onClick={()=>this.buy1()}>Learn</button>
                        <button onClick={()=>this.sell1()}>Unlearn</button>
                      </div>
                      <div className='ScrollList_small' name="Purchased">
                        <ul>{this.state.purchased1.map(p => <li key={p}><button  id={p} onClick={()=>this.set_selected(p,1)}>{p['name']}</button></li>)} </ul>
                      </div>
                  </div>
              </div>
            </div>

            <div className='right'>
              <h3><b3>Description: { this.state.selected1 ? ( this.state.selected1['name'] ) : ("" )}</b3></h3>
              <a1>&nbsp;&nbsp;{ this.state.selected1 ? ( this.state.selected1['name'] ) : ("none" )}</a1>
            </div>
        </div>






        </div>

        </div>
        </div>
      </div>
      <Footer prev="/other" next='/overview' />
    </div>
    );
  }
}

export default Spells;
