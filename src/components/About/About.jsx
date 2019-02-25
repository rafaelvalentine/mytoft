import React, { Component } from 'react'
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import './About.css'

export default class About extends Component {
  render () {
    return (
      <div id='about'>
        <Helmet>
          <title>About || TOFT </title>
          <meta name='description' content='Helmet application' />
        </Helmet>
        <Jumbotron style={{ backgroundImage: 'url("assets/img/about-us.jpg")' }} fluid>
          <Container />
        </Jumbotron>
        <div className='about-div'>
          <p>
      About Us
          </p>
          <hr />
        </div>
        <div className='about-content'>
          <Container>
            <Row>
              <Col xs={12} lg={4}>
            At TORF Technologies, we view our customers not just as clients, but as our partners. To this end, we always do our best to improve our customers’ work experience and make them happy at their jobs.

By taking care of your software implementation and integration, TORF Technologies helps you to concentrate on your major business processes and flourish in those businesses.

Our solutions are tailored to increase revenue and improve your customers’ satisfaction by offering highly competitive prices.
We also provide dedicated consulting and support services
              </Col>
              <Col xs={12} lg={4} >
            TORF Technologies provides solutions for Business Process Automation, Advanced Network Infrastructure Design, Custom Software/Applications development, and Website Design and Development.

We employ a wide range of technologies to provide professional custom solutions using our enormous experience in software development. Our products include standalone desktop applications and components for integration into larger business solutions.

At TORF Technologies, we offer professional services from Workflows and Business Process Automation (BPA) to Advanced Infrastructure and Data Collaboration. We also engage in Custom Applications development and website design and development for highly responsive websites.
              </Col>

              <Col xs={12} lg={4}>
            We are a close-knit organized team that consists of dynamic and talented achievers. TORF Technologies has professionals in business analysis, specialists in object-oriented programming languages, and consultants with great analytical and mathematical background.

We always stay ahead of our game by consolidating our knowledge database and learning new technologies. We can implement advanced computer technologies as well as develop new ones.

Our practice at TORF Technologies is to embark on challenging tasks that give us the opportunity to extend our capabilities; and we cope with our clients’ orders in the earliest possible date
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    )
  }
}
