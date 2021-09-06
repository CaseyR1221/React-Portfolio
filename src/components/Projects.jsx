import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TastyBytes from '../images/TastyBytes-Logo.jpg'
import FreshBytes from '../images/fresh-bytes.png'
import Planner from '../images/day-planner.png'
import DiscJockies from '../images/disc-jockies.png'
import Employee from '../images/Employee-tracker-screenshot.jpeg'
import Note from '../images/note-taker.png'
import Weather from '../images/weather.png'

const Projects = () => {
    return (
        <div>
            <Container>
                <Row className='pt-3'>
                    <Col className=' d-flex justify-content-center'>
                        <img className='pImage' src={FreshBytes} alt='fresh bytes kitchen' />
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col className=' d-flex justify-content-center'>
                        <img  className='pImage'src={TastyBytes} alt='tasty bytes' />
                    </Col>
                    <Col className=' d-flex justify-content-center'>
                        <img className='pImage' src={DiscJockies} alt='disc jockies' />
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col className=' d-flex justify-content-center'>
                        <img className='pImage' src={Weather} alt='weather dash-board' />
                    </Col>
                    <Col className=' d-flex justify-content-center'>
                        <img className='pImage' src={Planner} alt='day planner' />
                    </Col>
                </Row>
                <Row className='pt-3'>
                    <Col className=' d-flex justify-content-center'>
                        <img className='pImage' src={Employee} alt='employee tracker' />
                    </Col>
                    <Col className=' d-flex justify-content-center'>
                        <img className='pImage' src={Note} alt='note taker' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects

