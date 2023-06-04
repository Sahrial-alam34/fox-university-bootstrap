import { useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../assets/images/banner/img1.jpg'
import banner2 from '../../../assets/images/banner/image2.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const buttonStyle = isHovered ? 'border border-warning text-warning' : 'warning text-white';
    return (
        <div>
            {/* banner */}
            <div >
                <Carousel  activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item className='relative'>
                        <img
                            className="d-block w-100 "
                            src={banner1}
                            alt="First slide"
                            style={{ height: '600px' }}
                        />
                        <Carousel.Caption className='absolute rounded-xl bg-gradient-to-r top-0 left-0 items-center h-full'>
                            <div style={{margin:'250px'}}>
                                <h1 className='font-weight-bold'>Education need <br /> Complete Solution</h1>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <Button className='rounded-pill' style={{ width: '150px', height: '50px' }} variant={buttonStyle}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>Contact Us</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src=
                            {banner2}
                            alt="Second slide"
                            style={{ height: '600px' }}
                        />

                        <Carousel.Caption className='absolute rounded-xl bg-gradient-to-r top-0 left-0 items-center   h-full'>
                          <div style={{margin:'250px'}}>
                          <h1 className='font-weight-bold'>Education need <br /> Complete Solution</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button className='rounded-pill' style={{ width: '150px', height: '50px'  }} variant={buttonStyle}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>Contact Us</Button>
                          </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
            {/* section */}


        </div>
    );
};

export default Banner;