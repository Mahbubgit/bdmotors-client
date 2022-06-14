import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='gallery'>
            <h1 className='product-title text-secondary'>Gallery</h1>
            <div className='w-75 mx-auto mb-3 mt-3'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/h8FVsZ0/img1.jpg'
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/mqRMBKw/img2.jpg'
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/XbkH3BF/img3.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/LhcYxyT/img4.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/YTxDYpq/img5.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/QQwd7jY/img6.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/1TRszbZ/img7.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/wYkyLHX/img8.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/pK39sBR/img9.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src='https://i.ibb.co/T4ZLd7H/img10.jpg'
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Gallery;