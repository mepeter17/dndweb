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
      bio: cD._bio
    }
    cD._ft = this.state.ft;

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
      bio: cd._bio
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
              <div className='lr'>
                  <div className='left'>
                      <div className='ud'>
                              <h1>Bio</h1>
                              <h3>Choose Name</h3>
                              <input type="text" name="name"
                                onChange={ this.handleChange.bind(this) }
                                 value={this.state.name}/>
                              <h3>Select Gender: {this.state.gender}</h3>
                                <div className='lr'>
                                  <button onClick={()=>this.change_gender("Male")}>Male</button>
                                  <button onClick={()=>this.change_gender("Female")}>Female</button>
                                </div>

                              <h3>Set Height </h3>
                                <div className='lr'>
                                      <input type="text"
                                        value={this.state.ft}
                                        onChange={ this.handleChange.bind(this) }
                                        name="ft"  />
                                      ft
                                      <input type="text" name="in"
                                        onChange={ this.handleChange.bind(this) }
                                         value={this.state.in}/>
                                      in
                                  <button>Random</button>
                                </div>

                              <h3>Set Weight </h3>
                                <div className='lr'>
                                      <input type="text"
                                        value={this.state.lbs}
                                        onChange={ this.handleChange.bind(this) }
                                        name="lbs"/>
                                      lbs
                                  <button>Random</button>
                                </div>
                        </div>
                  </div>

                  <div className='right'>
                      <h3>Biography (optional)</h3>
                      <input type="text"
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
