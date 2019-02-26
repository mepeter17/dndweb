import React from 'react';
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';
import './Weapons.css';


class Weapons extends React.Component
{

  constructor(props)
  {
    super(props);
    let cd = CommonDataManager.getInstance();
    var init_a = cd._available_weapons;
    var init_p = cd._purchased_weapons;
    this.state =
    {
      available: init_a,
      purchased: init_p,
      selected: null,
      gold: cd._gold
    }
  }

  set_selected(item)
  {
      this.setState({selected: item});
  }


  buy()
  {
      if(this.state.selected === null) return;
      let cd = CommonDataManager.getInstance();

      if(cd._gold < this.state.selected['price'])
        return;

      var new_purchased = this.state.purchased;
      new_purchased.push(this.state.selected);
      cd._gold -= this.state.selected['price'];

      this.setState({purchased: new_purchased, gold: cd._gold});
      cd._purchased_weapons = new_purchased;
  }

  sell()
  {
      if(this.state.selected === null) return;
      var new_purchased = this.state.purchased
      for(var i=0; i<new_purchased.length; i++)
      {
        if(this.state.selected === new_purchased[i])
        {
          let cd = CommonDataManager.getInstance();
          new_purchased.splice(i,1);
          cd._gold += this.state.selected['price'];

          this.setState({purchased: new_purchased, gold: cd._gold});
          cd._purchased_weapons = new_purchased;
          return;
        }
      }
  }


  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='weapons'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab6 tab_block'></button>
        <div className='lr'>
          <div className="left">
            <div className="ud">
              <h1><b1>Weapons</b1></h1>
              <h3><b3>Buy Weapons: {this.state.gold + " gold remaining"}</b3></h3>
                <a1>&nbsp;&nbsp;&nbsp;&nbsp;{'Available:'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {'Purchased:'}</a1>
                <div className='lr'>
                    <div className='ScrollList' name="Available">
                    <ul>{this.state.available.map(p => <ul key={p}><button class='button_equip'  id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></ul>)} </ul>
                    </div>
                    <div className='ud' name="Buttons">
                      <button class='button_buy' onClick={()=>this.buy()}><buy>Buy</buy></button>
                      <button class='button_buy' onClick={()=>this.sell()}><buy>Sell</buy></button>
                    </div>
                    <div className='ScrollList' name="Purchased">
                      <ul>{this.state.purchased.map(p => <ul key={p}><button class='button_equip' id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></ul>)} </ul>
                    </div>
                </div>
            </div>
          </div>

          <div className='right'>
            <h3><b3>Description: { this.state.selected ? ( this.state.selected['name'] ) : ("" )}</b3></h3>
            <a1>&nbsp;&nbsp;{ this.state.selected ? ( this.state.selected['name'] ) : ("none" )}</a1>
          </div>


        </div>
        </div>
      </div>
      <Footer prev="/alignment" next='/armor' />
    </div>
    );
  }
}

export default Weapons;
