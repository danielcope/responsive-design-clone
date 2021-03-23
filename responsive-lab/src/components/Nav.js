import React, { Component } from 'react'

class Nav extends Component {
  constructor (){
    super();
    this.state = {
      menu: false

    }
}


  clickHandler = () => {
    this.setState({ menu: !this.state.menu })
  }

  // menu = () => {
  //   if (this.state.menu === false) {

  //   }
  // }

  render(){

    const {menu} = this.state

    return (
      <section>
        <button onClick={this.clickHandler} className='ham-button'>menu
        <span>&#9776;</span></button>
        <nav className={ menu ? 'opened' : 'closed'} >
          <p>services</p>
          <p>portfolio</p>
          <p>about</p>
          <p>team</p>
          <p>contact</p>
        </nav>
      </section>
    )
  }
}

export default Nav