import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './img/linkedin.svg'
import './img/linkedin(1).svg'
import './Footer.css'

export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.changeImage = this.changeImage.bind(this)
    this.changeImageBack = this.changeImageBack.bind(this)
  }
  changeImage (e) {
    let name = e.target.className
    document.getElementById(name).style.backgroundImage = 'url("assets/img/' + name + '.svg")'
  }
  changeImageBack (e) {
    let name = e.target.className
    document.getElementById(name).style.backgroundImage = 'url("assets/img/' + name + '(1).svg")'
  }
  render () {
    return (
      <div id='footer' className='footer'>
        <div className='footer-links'>
          <div className='footer-links-text'>
            <p> <strong>TOFT TECHNOLOGY</strong> offers the best services in technology to take your business to the next level </p>
          </div>
          <div>
            <ul className='list-one'>
              <li className='link'><Link to='/'>Home</Link></li>
              <li className='link'><Link to='/about'>About Us</Link></li>
              <li className='link'><Link to='/services'>Services</Link></li>
              <li className='link'><Link to='/blog'>Blog</Link></li>
              <li className='link'><Link to='/contact'>Contact</Link></li>
              <li className='link'><Link to='/'>Privacy</Link></li>
              <li className='link'><Link to='/'>Terms</Link></li>
            </ul>
            <ul className='list-two'>
              <li> <span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/facebook(1).svg")' }} id='facebook' className='facebook'> <a href='#' /> </span> </li>
              <li> <span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/twitter(1).svg")' }} id='twitter' className='twitter'><a href='#' /></span> </li>
              <li> <span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/google-plus(1).svg")' }} id='google-plus' className='google-plus'><a href='#' /></span></li>
              <li><span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/linkedin(1).svg")' }} id='linkedin' className='linkedin'><a href='#' /></span></li>
              <li><span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/rss(1).svg")' }} id='rss' className='rss'><a href='#' /></span></li>
              <li><span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/mail(1).svg")' }} id='mail' className='mail'> <a href='mailto:' /> </span></li>
              <li><span onMouseOver={this.changeImage} onMouseOut={this.changeImageBack} style={{ backgroundImage: 'url("assets/img/phone(1).svg")' }} id='phone' className='phone'><a href='tel:+' /> </span></li>
            </ul>
          </div>
          <div className='footer-legal'>
            <p className='footer-legal-one'> <strong>TOFT TECHNOLOGY</strong> </p>
            <p className='footer-legal-two'> &copy;{new Date().getFullYear()} TOFT TECHNOLOGY Inc. All Rights Reserved</p>
            <p className='footer-legal-three'>
          TOFT TECHNOLOGY is protected by federally registered trademarks of valentine rafael, LLC and may not be used by third parties without explicit permission.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
