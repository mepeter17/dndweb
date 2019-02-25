import React from 'react';
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';
import './Weapons.css';


class Armor extends React.Component
{

  constructor(props)
  {
    super(props);
    let cd = CommonDataManager.getInstance();
    var init_a = cd._available_armor;
    var init_p = cd._purchased_armor;
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
      cd._purchased_armor = new_purchased;
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
          cd._purchased_armor = new_purchased;
          return;
        }
      }
  }


  render()
  {
    return (
    <div className='content_footer'>
    <div className='background'>
      <Tabs value='armor'/>
      <div className='m'>
          <button class='tab tab2 tab3 tab4 tab5 tab6 tab7 tab_block'></button>
        <div className='lr'>
          <div className="left">
            <div className="ud">
              <h1><b1>Armor</b1></h1>
              <h3><b3>Buy Armor: {this.state.gold + " gold remaining"}</b3></h3>
                <div className='lr'>
                    <div className='ScrollList' name="Available">
                        <ul>{this.state.available.map(p => <li key={p}><button  id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></li>)} </ul>
                    </div>
                    <div className='ud' name="Buttons">
                      <button onClick={()=>this.buy()}>Buy</button>
                      <button onClick={()=>this.sell()}>Sell</button>
                    </div>
                    <div className='ScrollList' name="Purchased">
                      <ul>{this.state.purchased.map(p => <li key={p}><button  id={p} onClick={()=>this.set_selected(p)}>{p['name'] + " (" + p['price'] + " gp)"}</button></li>)} </ul>
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
      <Footer prev="/weapons" next='/other' />
    </div>
    );
  }
}

export default Armor;
