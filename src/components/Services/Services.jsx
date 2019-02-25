import React, { Component } from 'react'
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const Service =(props)=>{
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
export default class Services extends Component {
  static defaultProps = {
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
    ]
       }
  render() {
    const services = this.props.services.map((srv, index)=>(
      <Service key={index} {...srv} />
    ))
    return (
      <div>
        <Helmet>
          <title>Services || TOFT </title>
          <meta name='description' content='Helmet application' />
        </Helmet>

        <section className='services'>
          {/* <h3><i class="fas fa-align-right"></i> What we do </h3> */}
          <hr/>
          <Container>
            <Row>
            {services}
            </Row>
          </Container>
       
        </section> 
      </div>
    )
  }
}
