import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';


class Footer extends React.Component
{

  constructor(props)
  {
  	 super(props);
     this.prev = props.prev;
     this.next = props.next;

  }



  render()
  {
    return (
      <div className='foot'>
        <Link to={this.prev}><button className='button_foot button_prev'>Previous</button></Link>
        <Link to={this.next}><button className='button_foot button_next'>Next</button></Link>
      </div>
    );
  }
}

export default Footer;
