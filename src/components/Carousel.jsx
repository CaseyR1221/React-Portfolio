import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import core from '../images/core-el.png' 
import mongo from '../images/mongo.png'
import express from '../images/express.png'
import react from '../images/react.png'
import node from '../images/node.png'

const CarouselPage = () => {
    return (
        <div className="carousel pb-2">
            <h2 className="heading">Expertise</h2>
            <Carousel>
                <Carousel.Item className='carousel-item'>
                    <Image src={core} className='coreTech carousel-image' />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Image src={mongo} className='mongo carousel-image' />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Image src={express} className='express carousel-image' />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Image src={react} className='react carousel-image' />
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <Image src={node} className='node carousel-image' />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselPage
