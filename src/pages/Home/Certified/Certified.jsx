import { Card } from "react-bootstrap";
import img1 from '../../../assets/images/teachers/image.jpg'
import './Certified.css'
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Certified = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="gray-background">
            <div className="m-3">
                <div className="mb-5  text-center ">
                    <h1 className='mb-5 mt-5'>Certified Teachers</h1>
                    <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a <br /> paradisematic country</p>
                </div>
                <div className="row  justify-content-between mb-5 text-center">
                    <div className='col-6 col-md-3'>

                        <Card className='border-0 ' border rounded-0>
                            <Card.Img cla variant="top" style={{ height: '250px', opacity: isHovered ? 0.5 : 1 }} src={img1} onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            />
                            {isHovered && (
                                <Card.ImgOverlay className="d-flex align-items-center">
                                    <Card.Text>
                                        <div className="d-flex justify-content-between" style={{ width: '200px' }}>
                                            <a className="link link-hover"><FaTwitter style={{ width: '25px', height: '25px' }} /></a>
                                            <a className="link link-hover "><FaFacebook style={{ width: '25px', height: '25px' }} /></a>
                                            <a className="link link-hover "><FaInstagram style={{ width: '25px', height: '25px' }} /></a>

                                        </div>
                                    </Card.Text>
                                </Card.ImgOverlay>
                            )}
                            <Card.Body>

                                <Card.Title>
                                    <h3>Bianca Wilson</h3>
                                    <p className="uppercase text-warning">Teacher</p>
                                </Card.Title>
                                <p>
                                    I am an ambitious workaholic, but apart from that, pretty simple person.
                                </p>



                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-6 col-md-3'>

                        <Card className='border-0 ' border rounded-0>
                            <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                            />
                            <Card.Body>

                                <Card.Title>
                                    <h3>Bianca Wilson</h3>
                                    <p className="uppercase text-warning">Teacher</p>
                                </Card.Title>
                                <p>
                                    I am an ambitious workaholic, but apart from that, pretty simple person.
                                </p>



                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-6 col-md-3'>

                        <Card className='border-0 ' border rounded-0>
                            <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                            />
                            <Card.Body>

                                <Card.Title>
                                    <h3>Bianca Wilson</h3>
                                    <p className="uppercase text-warning">Teacher</p>
                                </Card.Title>
                                <p>
                                    I am an ambitious workaholic, but apart from that, pretty simple person.
                                </p>



                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-6 col-md-3'>

                        <Card className='border-0 ' border rounded-0>
                            <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                            />
                            <Card.Body>

                                <Card.Title>
                                    <h3>Bianca Wilson</h3>
                                    <p className="uppercase text-warning">Teacher</p>
                                </Card.Title>
                                <p>
                                    I am an ambitious workaholic, but apart from that, pretty simple person.
                                </p>



                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Certified;