import { Button, Card, Form } from "react-bootstrap";


import img1 from '../../../assets/images/quote/images.jpg'
import img2 from '../../../assets/images/banner/img1.jpg'
import './Quote.css'
import { useState } from "react";
const Quote = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const buttonStyle = isHovered ? 'border border-warning text-warning' : 'warning text-white';
    return (
        <div>
            <Card className="bg-dark text-white fixed">
                <Card.Img style={{ height: '800px' }} className="custom-opacity " src={img1} alt="Card image" />
                <Card.ImgOverlay className=" m-5  ">
                    <div className="d-flex "  >
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div className="m-5" >
                            <div className="mb-5 ">
                                <h1 className='mb-5 mt-5'>Request A Quote</h1>
                                <p>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, <br /> there live the blind texts.</p>
                            </div>
                            <Form className="row"   >
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="name" name='name' placeholder="Enter First  Name" required />
                                    <Form.Text className="text-muted">


                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="name"  placeholder="Enter Last Name" required />
                                    <Form.Text className="text-muted">


                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicRole">
                                    <Form.Label>Select Your Course</Form.Label>
                                    <Form.Select  aria-label="Select Role" required>
                                        <option value="">Select a Course</option>
                                        <option value="admin">CSE</option>
                                        <option value="user">EEE</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text"  placeholder="Phone" required />
                                    <Form.Text className="text-muted">


                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control type="text"  placeholder="Message" required />
                                    <Form.Text className="text-muted">


                                    </Form.Text>
                                </Form.Group>


                                <Button className='rounded-pill col-md-6 mt-4' style={{ width: '250px', height: '50px' }} variant={buttonStyle}
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleHover}>Request A Quote </Button>
                            </Form>
                        </div>
                    </div>


                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Quote;