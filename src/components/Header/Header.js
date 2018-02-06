import React from 'react'
import Link from 'gatsby-link'
import './header.scss'

class Header extends React.Component() {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  render() {
    return(
      <div>
      <nav className='nav-container'>
        <div className='title'>Taylor Sam</div>
        <div className='menu-btn'>MENU</div>
        <div className='list-container'>
          <div>ABOUT</div>
          <div>SKILLS</div>
          <div>WORK</div>
          <div>CONTACT</div>
          <div>CONTACT</div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Header
