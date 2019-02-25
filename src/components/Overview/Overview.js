import React from 'react';
import Footer from '../Footer/Footer'
import Tabs from '../Tabs/Tabs'
import CommonDataManager from '../CommonDataManager';

class Overview extends React.Component
{

  constructor(props)
  {
    //let cd = CommonDataManager.getInstance();
    //this.state.cd = cd;
    super(props);
  }


  stats(name)
  {
      if(CommonDataManager.gi()._stats === "empty")
        return "??";
        console.log("STATS" + CommonDataManager.gi()._cats);
      for(var i=0; i<CommonDataManager.gi()._cats.length;i++)
      {

        var current_stat = CommonDataManager.gi()._cats[i];
        if(current_stat['s'] === name)
        {
          if(current_stat['v'] === '-')
            return "??";
          else
            return current_stat['v'];
        }
      }
      return "WHAT";
  }

  render()
  {
    return (
    <div className='content_footer'>
      <div className='background'>
      <Tabs value=''/>
        <div className='m'>
            <div className='ud'>
              <h1><b1>Overview</b1></h1>
              <p><b2> { (CommonDataManager.gi()._name !== "") ? (CommonDataManager.gi()._name) : ("Character Name")} </b2></p>
              <p><b5>{ CommonDataManager.gi()._race + " " + CommonDataManager.gi()._class}</b5></p>
              <p><b5>Level 1</b5></p>
              <p><b5> { (CommonDataManager.gi()._alignment) ? (CommonDataManager.gi()._alignment) : ("????? Alignment")} </b5></p>

              <div className='lr' name='the rest'>
                  <div classname='ud' name='bio_langauges'>
                    <p><b2>Bio</b2></p>
                    <p><b5>{(CommonDataManager.gi()._gender) ? (CommonDataManager.gi()._gender) : ("?? Gender")}</b5></p>
                    <p><b5>?? years old</b5></p>
                    <p><b5>{((CommonDataManager.gi()._ft !== "") ? (CommonDataManager.gi()._ft) : ("?")) + " ft " + ((CommonDataManager.gi()._in !== "") ? (CommonDataManager.gi()._in) : ("??")) + " in"}</b5></p>
                    <p><b5>{((CommonDataManager.gi()._lbs) ? (CommonDataManager.gi()._lbs) : ("???")) + " lbs"}</b5></p>
                    <p><b2>Languages</b2></p>
                    <p><b5>{CommonDataManager.gi()._race}</b5></p>
                  </div>

                  <div classname='ud' name='stats_combat'>
                    <p><b2>Stats</b2></p>
                    <p>Str {this.stats("Str")}</p>
                    <p>Dex {this.stats("Dex")}</p>
                    <p>Cons {this.stats("Cons")}</p>
                    <p>Int {this.stats("Int")}</p>
                    <p>Wis {this.stats("Wis")}</p>
                    <p>Cha {this.stats("Cha")}</p>

                    <p><b2>Combat</b2></p>
                    <p>Initiative: {CommonDataManager.gi()._iniative}</p>
                    <p>Speed:  {CommonDataManager.gi()._speed}</p>
                    <p>AC: {CommonDataManager.gi()._ac} </p>
                    <p>HP:  {CommonDataManager.gi()._hp}</p>
                    <p>Hit Dice: 1</p>

                  </div>

                  <div classname='ud' name='equipment'>
                    <b2>Equipment</b2>
                    <p><b3>Weapons</b3></p>
                      {CommonDataManager.gi()._purchased_weapons.map(wep => <p>{wep['name']}</p>)}
                    <p><b3>Armor</b3></p>
                      {CommonDataManager.gi()._purchased_armor.map(wep => <p>{wep['name']}</p>)}
                    <p><b3>Other</b3></p>
                      {CommonDataManager.gi()._purchased_other.map(wep => <p>{wep['name']}</p>)}

                  </div>

                  <div classname='ud' name='spells'>
                    <b2>Spells</b2>
                    <p><b3>Level 0 (Cantrips)</b3></p>
                      {CommonDataManager.gi()._spells0.map(wep => <p>{wep['name']}</p>)}
                    <p><b3>Level 0 (Cantrips)</b3></p>
                      {CommonDataManager.gi()._spells1.map(wep => <p>{wep['name']}</p>)}


                  </div>



              </div>

            </div>




        </div>
      </div>
      <Footer prev="/spells" next='/spells'/>
    </div>
    );
  }
}

export default Overview;
