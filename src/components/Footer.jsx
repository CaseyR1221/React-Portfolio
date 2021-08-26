import React from 'react'
import Image from 'react-bootstrap/Image'
import git from '../images/white-git.png'
import stackOverflow from '../images/stack-overflow.png'
import linkedin from '../images/linkedin.png'
import spotify from '../images/spotify.png'

const Footer = () => {
    return (
        <div className='footer d-flex justify-content-around'>  
            <a
                href='https://github.com/CaseyR1221'
                target='_blank'
                rel='noreferrer'
            >
                <span className='d-inline'>
                    <Image src={git} />
                </span>
            </a>
            <a
                href='https://stackoverflow.com/users/10541891/casey-r'
                target='_blank'
                rel='noreferrer'
            >
                <span className='d-inline'>
                    <Image src={stackOverflow} />
                </span>
            </a> 
            <a
                href='https://www.linkedin.com/in/casey-rowlands-0311/'
                target='_blank'
                rel='noreferrer'
            >
                <span className='d-inline'>
                    <Image src={linkedin} />
                </span>
            </a> 
            <a
                href='https://open.spotify.com/user/12172853125'
                target='_blank'
                rel='noreferrer'
            >
                <span className='d-inline'>
                    <Image src={spotify} />
                </span>
            </a>      
        </div>
    )
}

export default Footer
