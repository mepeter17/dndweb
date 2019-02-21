import React, { Component } from 'react';
import './Bio.css'
import Footer from '../Footer/Footer'
import { DropdownButton, Dropdown  } from 'react-bootstrap';
import {ButtonToolbar, Button} from 'react-bootstrap'


class Bio extends React.Component
{


  render()
  {
    return (
    <div className='content_footer'>
      <div className='lr'>
          <div className='left'>
              <div className='ud'>
                      <h1>Bio</h1>
                      <h3>Select Gender</h3>
                        <div className='lr'>
                          <button>Male</button>
                          <button>Female</button>
                        </div>

                      <h3>Set Height </h3>
                        <div className='lr'>
                              <input type="text" name="name" />
                              ft
                              <input type="text" name="name" />
                              in
                          <button>Random</button>
                        </div>

                      <h3>Set Weight </h3>
                        <div className='lr'>
                          <form>
                            <label>
                              <input type="text" name="name" />
                              lbs
                            </label>
                          </form>
                          <button>Random</button>
                        </div>
                </div>
          </div>

          <div className='right'>
              <h3>Biography (optional)</h3>
              <input type="text" name="name" />
          </div>
      </div>

      <Footer prev="/stats" next='/align' />
    </div>
    );
  }
}

export default Bio;
