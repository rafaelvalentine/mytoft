import React, { Component } from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import './Contact.css'

export default class Contact extends Component {
  render () {
    return (
      <div id='contact'>
        <Helmet>
          <title>Contact Us || TOFT </title>
          <meta name='description' content='Helmet application' />
        </Helmet>
        <h3> Contact TOFT</h3>
        <hr />
        <Container>
          <Row>
            <Col >
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' placeholder='Full Name' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridPassword'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Email' />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId='formGridEmail'>
                    <Form.Label>Company(Optional)</Form.Label>
                    <Form.Control type='text' placeholder='Company' />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridPassword'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type='tel' placeholder='Phone' />
                  </Form.Group>
                </Form.Row>

                {/* <Form.Group controlId='formBasicChecbox'>
                  <Form.Check type='checkbox' label='Check me out' />
                </Form.Group> */}
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' rows='3' />
                </Form.Group>
                <Button variant='primary' type='submit'>
    Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <div className='head-office'>
                <Card >
                  <Card.Body>
                    <Card.Title>Head Office</Card.Title>
                    <Card.Text>Lagos: <strong>291, Ikorodu Road, Idiroko Bus Stop, Maryland, Lagos</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className='head-office'>
                <Card >
                  <Card.Body>
                    <Card.Title>Client Support</Card.Title>
                    <Card.Text>Email: <strong>info@torftechnologies.com</strong>
                    </Card.Text>
                    <Card.Text>Phone No:<strong>0810 394 3909, 0810 395 2424</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
}
