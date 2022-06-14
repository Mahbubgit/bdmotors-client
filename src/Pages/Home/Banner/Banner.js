import { Carousel } from 'react-bootstrap';
import React from 'react';

const Banner = () => {
    
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/z2HV9K5/slider1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>The Power of Speed</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/Kbt6NMK/slider2.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>World's Famous Motorbike</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/z2HV9K5/slider1.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>The Power of Speed</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;