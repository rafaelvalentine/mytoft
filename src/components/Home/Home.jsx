import React, { Component } from 'react'
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap'
 import './Home.css'


 const Strenght =(props)=>{
   const {title, details, img} = props
 return (
   <Col xs={12} md={3} lg={3}>
      <Card >
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {details}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
      </Card>
   </Col>
 )
 }

 const Services =(props)=>{
  const {title, img} = props
   return(
    <Col xs={12} md={6} lg={4}>
    <Card >
        <Card.Img variant="top" src={img}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>
            {details}
          </Card.Text> */}
          <Button className='services-button' variant="primary">Find out more</Button>
        </Card.Body>
    </Card>
 </Col>
   )
 }

 const News =(props)=> {
  const {title, img, subject, details} = props
   return(
    <Col xs={12} md={6} lg={4}>
    <Card >
        <Card.Img variant="top" src={img}/>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{subject}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
    </Card>
 </Col>
   )
 }
export default class Home extends Component {
   static defaultProps = {
strenght:[
  {
    title:'software asset management',
    details: 'Embrace software management that makes technology working for you, By taking advantage of comprehensive SAM service you gain competitive leverage and save cost',
    img:'assets/img/imageOne.jpg'
  },
  {
    title:'microsoft licensing advisory',
    details: 'we negociatiate for the most cost effective deals that carter for your licensing needs, while cartering for the future development plan; thereby ensuring the best possible return on investment',
    img:'assets/img/imageTwo.jpg'
  },
  {
    title:'Collaborative solutions',
    details: 'Our collaborative solution are meant to meet and exceed your expections',
    img:'assets/img/imageThree.jpg'
  },
  {
    title:'Custom application development',
    details: 'At TORF we customise applications that take care of our clients particular business needs processes and practices',
    img:'assets/img/imageFour.jpg'
  }
],
services:[
  {
    title:'business service automation',
    img:'assets/img/imageOne.jpg'
  },
  {
    title:'customer application development',
    img:'assets/img/imageFive.jpg'
  },
  {
    title:'collaboration solution',
    img:'assets/img/imageSix.jpg'
  },
  {
    title:' web design and development',
    img:'assets/img/imageSeven.jpg'
  },
  {
    title:'advanced infrastructure',
    img:'assets/img/imageEight.png'
  },
  {
    title:'document management solution',
    img:'assets/img/imageNine.jpg'
  },
],
news:[
  {
    title:'Sony slowly rolls out its 2019 lineup of enormous TVs, with pricing to match',
    details: 'At TORF we customise applications that take care of our clients particular business needs processes and practices',
    img:'assets/img/cat.jpg',
    subject:'tech'
  },
  {
    title:'Sony slowly rolls out its 2019 lineup of enormous TVs, with pricing to match',
    details: 'At TORF we customise applications that take care of our clients particular business needs processes and practices',
    img:'assets/img/cat.jpg',
    subject:'tech'
  },
  {
    title:'Sony slowly rolls out its 2019 lineup of enormous TVs, with pricing to match',
    details: 'At TORF we customise applications that take care of our clients particular business needs processes and practices',
    img:'assets/img/cat.jpg',
    subject:'tech'
  },
  {
    title:'Sony slowly rolls out its 2019 lineup of enormous TVs, with pricing to match',
    details: 'At TORF we customise applications that take care of our clients particular business needs processes and practices',
    img:'assets/img/cat.jpg',
    subject:'tech'
  },
  {
    title:'Sony slowly rolls out its 2019 lineup of enormous TVs, with pricing to match',
    details: 'At TORF we customise applications that take care of our clients particular business needs processes and practices',
    img:'assets/img/cat.jpg',
    subject:'tech'
  }
]
   }
  render () {
     const strenght = this.props.strenght.map((str, index)=>(
       <Strenght key={index} {...str} />
     ))
     const services = this.props.services.map((srv, index)=>(
      <Services key={index} {...srv} />
    ))
    const news = this.props.news.map((news, index)=>(
      <News key={index} {...news} />
    ))
    return (
      <div id='home'>
        <div className='jumbotron-section'>
       
          <Jumbotron>
            <h2>Welcome to Toft</h2>
            <p>
            TORF Technologies offers the best services in technology to take your business to the next level.

            Our areas of focus include Software Assets Management, Microsoft Licensing Advisory, Business Process Automation, and Custom Applications development.

            At TORF Technologies, we let you sit on our wealth of expertise and experience to build solutions tailored for your organization. Our consultants are seasoned professionals who don’t see you as ordinary clients, but permanent partners.
            </p>
            <p>
              <Button variant='primary'>Learn more</Button>
            </p>
          </Jumbotron>
          <img src="assets/img/cloud-biz.jpg" alt="cloud" srcset=""/>
        </div>
        <section className='our-core'>
          <h3> Our Core </h3>
          <hr/>
          <Container>
            <Row>
            {strenght}
            </Row>
          </Container>
       
        </section> 
        <section className='services'>
          <h3> What we do </h3>
          <hr/>
          <Container>
            <Row>
            {services}
            </Row>
          </Container>
       
        </section> 
        <section className='clients'>
          <h3> Clients </h3>
          <hr/>
          <Container>
            <Row>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/oak.jpg" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/mtn.png" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/indiana.jpg" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/vodafone.jpg" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/jace.png" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/champion.png" alt=""/>
            </Col>
            </Row>
          </Container>
        </section>

        <section className='news'>
          <h3> Blog </h3>
          <hr/>
          <Container>
            <Row>
            {news}
            </Row>
          </Container>
        </section>
       
        <section className='partners'>
          <h3> Partners </h3>
          <hr/>
          <Container>
            <Row>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/oak.jpg" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/mtn.png" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/indiana.jpg" alt=""/>
            </Col>
            <Col xs={6} md={3} lg={2} >
            <img src="assets/img/vodafone.jpg" alt=""/>
            </Col>

            </Row>
          </Container>
        </section>
       
      </div>
    )
  }
}
