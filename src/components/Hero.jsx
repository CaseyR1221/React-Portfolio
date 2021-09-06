import React from 'react'
import CarouselPage  from './Carousel'

const hero = () => {
    return (
        <div className='hero'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container home-header">
                    <h1 class="display-3 jumbotron-header">Casey Rowlands</h1>
                    <p class="lead">Hi! Welcome to my site. My name is Casey, and I'm a Web Developer specializing in the MERN stack.</p>
                </div>
            </div>
                <CarouselPage />
        </div>
    )
}

export default hero
