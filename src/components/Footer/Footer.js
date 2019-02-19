import React, { Component } from 'react';
import {Link} from 'react-router-dom';


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
        <Link to={this.prev}><button>Previous</button></Link>
        <Link to={this.next}><button>Next</button></Link>
      </div>
    );
  }
}

export default Footer;
