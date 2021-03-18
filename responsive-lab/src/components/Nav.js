import React, { Component } from 'react'

class Nav extends Component {
  constructor (){
    super();
    this.state = {
      menu: false

    }
}

  render(){
    return (
      <nav>
        <button className='ham-button'>menu
        <div className='hamburger'>
          <div className='ham'></div>
          <div className='ham'></div>
          <div className='ham'></div>
        </div>
        </button>
        <ul>
          <li>services</li>
          <li>portfolio</li>
          <li>about</li>
          <li>team</li>
          <li>contact</li>
        </ul>
      </nav>
    )
  }
}

export default Nav