import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import me from '../images/me2.jpg'

const About = () => {
    return (
        <div className='about'>
            <div>
                <Image src={me} className='avatar mb-3'/>
            </div>
            <Container>
                <Row>
                    <Col className='about-me'>
                        <p className='h4 text-center'>Hi, my name is Casey, and I am a hardworking young tech professional striving to acquire a comprehensive set of software development
                     skills to broaden the range of projects that I may work on. I have always known that I wanted to make an impact in people lives and 
                     that I wasn’t meant to just fade into the background. I aspire to become a competent and dependable mobile developer so that I may 
                     contribute fully within my given field, and act as a fountain of information to those around me who are less knowledgeable.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>One</p>
                    </Col>
                    <Col>
                        <p>Two</p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default About
