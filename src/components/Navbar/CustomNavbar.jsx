import React, { Component } from 'react'
import { ButtonToolbar, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import moduleName from 'react-router-dom'
import './CustomNavbar.css'

const Tooltipz = (props) => {
  return (
    <ButtonToolbar>
      <Dropdown>
        <Dropdown.Toggle id='dropdown-custom-1'>
        
        </Dropdown.Toggle>
        <Dropdown.Menu className='super-colors'>
          <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
          <Dropdown.Item eventKey='3' active>
        Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
  )
}
export default class CustomNavbar extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
    this.openNav = this.openNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  openNav () {
    document.getElementById('mySidenav').style.width = '100%'
    // document.getElementById('main').style.marginLeft = '250px'
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  closeNav () {
    document.getElementById('mySidenav').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
    document.body.style.backgroundColor = 'white'
  }
  render () {
    return (
      <div id='nav-div'>
        <aside id='mySidenav' className='sidenav'>
          <h4>TOFT TECHNOLOGY</h4>
          <ul>
            <li><a className='closebtn' onClick={this.closeNav}>&times;</a></li>
            <li className='link'><Link to='/1'>About</Link></li>
            <li className='link'><Link to='/2'>Services</Link></li>
            <li className='link'><Link to='/3'>Clients</Link></li>
            <li className='link'><Link to='/4'>Contact</Link></li>
          </ul>
        </aside>

        {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page  */}
        <div id='nav-main'>
          {/* Use any element to open the sidenav  */}
          <span className='nav-main-button' onClick={this.openNav}>  <i className='fas fa-bars' />  Toft Technology</span>
          <div>
            <ul id='nav-main-list' className='nav-main-list'>
              <li> <img src='assets/img/magnifying-glass.svg' alt='search' /> </li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
