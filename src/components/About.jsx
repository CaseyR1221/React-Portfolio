import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import me from '../images/me2.jpg'
import codeSymbol from '../images/code-symbol.png'

const About = ({ currentPage, handlePageChange }) => {
    return (
        <div className='about'>
            <div>
                <Image src={me} className='avatar mb-3'/>
            </div>
            <Container>
                <Row>
                    <Col className='about-me'>
                        <p className=''>Hi, my name’s Casey, and I’m a Full-Stack Developer who specializes in building and designing 
                        exceptional and accessible digital experiences. I have always loved tech and building new things, so I am constantly reading 
                        up on and experimenting with new technologies. I’ve worked with a wide variety of programming languages and frameworks, but 
                        currently I use the MERN stack for most of my web development projects. I attended the University of Central Florida and completed 
                        The UCF Full-Stack Web Development Bootcamp as well.
                        </p>
                        <p>If you every need something built of just want to chat, I’m your guy! Feel free to reach out to me on any of my social media 
                        platforms listed at the bottom of the page or contact me via the "Contact" section of this site.
                        </p>
                    </Col>
                </Row>
                <div>
                    <Image src={codeSymbol} className='code-symbol'/>
                </div>
                <Row>
                    <Col className='sub-section pt-5'>
                        <h3 className='sub-section-heading'>My Hobbies</h3>
                        <ul>
                            <li>Web Development</li>
                            <li>Playing Disc Golf</li>
                            <li>Playing Tennis</li>
                            <li>Playing Basketball</li>
                            <li>Video Games</li>
                            <ul>
                                <li>The Final Fantasy Series</li>
                                <li>The Kingdom Hearts Series</li>
                                <li>The Witcher Series</li>
                            </ul>
                            <li>Magic The Gathering</li>
                            <li>Fishing</li>
                        </ul>
                    </Col>
                    <Col className='sub-section pt-5'>
                        <h3 className='sub-section-heading'>My Proficiencies</h3>
                        <ul>
                            <li>Foundations</li>
                            <ul>
                                <li>MacOS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Front-end</li>
                            <ul>
                                <li>React.js</li>
                                <li>Redux</li>
                                <li>Vue.js</li>
                                <li>Angular.js</li>
                                <li>Netlify</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Back-end</li>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>Heroku</li>
                            </ul>   
                        </ul>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default About
