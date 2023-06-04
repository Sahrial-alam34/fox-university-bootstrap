import { Helmet } from "react-helmet-async";
import CoverPage from "../Shared/CoverPage/CoverPage";
import './Contact.css'
import { Button, Form } from "react-bootstrap";
import img2 from '../../assets/images/banner/img1.jpg'
import { useState } from "react";
const Contact = () => {
    
   
        const [isHovered, setIsHovered] = useState(false);
        const handleHover = () => {
            setIsHovered(!isHovered);
        };
        const buttonStyle = isHovered ? 'border border-warning text-warning' : 'warning text-white';
        return (
            <div>
                <Helmet>
                    <title>Fox | Contact</title>
                </Helmet>
                <CoverPage title="Contact Us" link="contact"></CoverPage>
                <div className=" m-5 row gap-3">
                    <div className="col-12 col-md-3 gray-background text-center p-5" style={{ width: '380px' }}>
                        <h3>Address</h3>
                        <p>198 West 21th Street, Suite <br /> 721 New York NY 10016</p>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 gray-background text-center p-5 " style={{ width: '380px' }}>
                        <h3>Contact Number</h3>
                        <p>+ 1235 2355 98</p>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 gray-background text-center p-5 " style={{ width: '380px' }}>
                        <h3>Email Address</h3>
                        <p>info@yoursite.com</p>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 gray-background text-center p-5 " style={{ width: '380px' }}>
                        <h3>Website</h3>
                        <p>yoursite.com</p>
                    </div>
                    <div className="d-lg-flex ">
                        <div>
                            <img className="img-fluid" src={img2}   alt="" />
                        </div>
                        <div className='w-lg-50 p-5' >
                            <h3>Contact Us</h3>
                            <Form  >
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="name" name='name' placeholder="Enter your Name" required />
                                    <Form.Text className="text-muted">


                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="email" name='email' placeholder="Enter your email" required />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="name" name='email' placeholder="Subject" required />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="name" name='email' placeholder="Message" required />

                                </Form.Group>






                                <Button className='rounded-pill col-md-6 mt-4' style={{ width: '250px', height: '50px' }} variant={buttonStyle}
                                    onMouseEnter={handleHover}
                                    onMouseLeave={handleHover}>Send Message </Button>
                            </Form>




                        </div>
                    </div>

                </div>
            </div>
        );
    };

    export default Contact;