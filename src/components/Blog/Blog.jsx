import React, { Component } from 'react'
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'


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
export default class Blog extends Component {
  static defaultProps ={
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
  render() {
    const news = this.props.news.map((news, index)=>(
      <News key={index} {...news} />
    ))
    return (
      <div>
         <Helmet>
          <title>Blog|| TOFT </title>
          <meta name='description' content='Helmet application' />
        </Helmet>
         <section className='news'>
          {/* <h3><i class="fas fa-align-right"></i> News</h3> */}
          <hr/>
          <Container>
            <Row>
            {news}
            </Row>
          </Container>
        </section>
      </div>
    )
  }
}
