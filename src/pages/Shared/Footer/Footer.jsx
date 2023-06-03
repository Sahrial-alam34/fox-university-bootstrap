import { Button, Container } from "react-bootstrap";

import { MdOutlineLocationOn, MdOutlineCall, MdOutlineEmail, MdOutlineDateRange, MdAdminPanelSettings, MdMessage, MdOutlineArrowForward } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import img1 from '../../../assets/images/footer/image1.jpg'
import './Footer.css'
import { Form } from "react-router-dom";

const Footer = () => {
    return (
        <Container className="bg-black text-white p-5">
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluidtext-md-left">
                    <div className="row">
                        <div className="col-md-3 mt-md-0 mt-3">
                            <h3 className="mb-5">Have a Questions?</h3>
                            <div className="d-flex gap-3">
                                <MdOutlineLocationOn style={{ width: '50px', height: '25px' }}></MdOutlineLocationOn>
                                <p>  203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </div>
                            <div className="d-flex gap-3">
                                <MdOutlineCall style={{ width: '25px', height: '25px' }}></MdOutlineCall>
                                <p>	+2 392 3929 210</p>
                            </div>
                            <div className="d-flex gap-3">
                                <MdOutlineEmail style={{ width: '25px', height: '25px' }}></MdOutlineEmail>
                                <p>info@yourdomain.com</p>
                            </div>

                        </div>



                        <div className="col-md-3 mb-md-0 mb-3">
                            <h3 className="mb-5">Recent Blog</h3>
                            <div className="d-flex gap-3">
                                <img style={{ height: '100px', width: '100px' }} src={img1} alt="" />
                                <div className="w-50">
                                    <p>Even the all-powerful Pointing has no control about</p>
                                    <div className="d-flex gap-3">
                                        <MdOutlineDateRange style={{ width: '25px', height: '25px' }}></MdOutlineDateRange>
                                        <p><small>June 27, 2019</small></p>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <div className="d-flex gap-3">
                                            <MdAdminPanelSettings style={{ width: '25px', height: '25px' }}></MdAdminPanelSettings>
                                            <p><small>Admin</small></p>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <MdMessage style={{ width: '25px', height: '25px' }}></MdMessage>
                                            <p><small>19</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3 mt-5">
                                <img style={{ height: '100px', width: '100px' }} src={img1} alt="" />
                                <div className="w-50">
                                    <p>Even the all-powerful Pointing has no control about</p>
                                    <div className="d-flex gap-3">
                                        <MdOutlineDateRange style={{ width: '25px', height: '25px' }}></MdOutlineDateRange>
                                        <p><small>June 27, 2019</small></p>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <div className="d-flex gap-3">
                                            <MdAdminPanelSettings style={{ width: '25px', height: '25px' }}></MdAdminPanelSettings>
                                            <p><small>Admin</small></p>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <MdMessage style={{ width: '25px', height: '25px' }}></MdMessage>
                                            <p><small>19</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3 ">
                            <h3 className="mb-5">Links</h3>
                            <ul className="list-unstyled">
                                <div className="d-flex gap-3">
                                    <MdOutlineArrowForward style={{ width: '25px', height: '25px' }}></MdOutlineArrowForward>
                                    <li><a className="about-link" href="#!">Home</a></li>
                                </div>

                                <div className="d-flex gap-3">
                                    <MdOutlineArrowForward style={{ width: '25px', height: '25px' }}></MdOutlineArrowForward>
                                    <li><a className="about-link" href="#!">About</a></li>
                                </div>
                                <div className="d-flex gap-3">
                                    <MdOutlineArrowForward style={{ width: '25px', height: '25px' }}></MdOutlineArrowForward>
                                    <li><a className="about-link" href="#!">Services</a></li>
                                </div>
                                <div className="d-flex gap-3">
                                    <MdOutlineArrowForward style={{ width: '25px', height: '25px' }}></MdOutlineArrowForward>
                                    <li><a className="about-link" href="#!">Departments</a></li>
                                </div>    <div className="d-flex gap-3">
                                    <MdOutlineArrowForward style={{ width: '25px', height: '25px' }}></MdOutlineArrowForward>
                                    <li><a className="about-link" href="#!">Contact</a></li>
                                </div>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h3 className="mb-5">Subscribe Us!</h3>
                            <Form>
                                <div className="mb-3">

                                    <input
                                        type="text"
                                        className="form-control text-center  text-white bg-dark border border-0"
                                        id="nameInput"
                                        value="Enter Email Address"

                                    />
                                </div>
                                <div className="bg-success">
                                    <Button className="w-100 text-center " variant="primary">Subscribe</Button>
                                </div>

                            </Form>
                            <div>
                                <h3 className="mb-2 mt-5">Connect With Us</h3>
                                <div className="d-flex justify-content-between"  style={{ width: '200px' }}>
                                    <a className="link link-hover"><FaTwitter style={{ width: '25px', height: '25px' }} /></a>
                                    <a className="link link-hover "><FaFacebook style={{ width: '25px', height: '25px' }} /></a>
                                    <a className="link link-hover "><FaInstagram style={{ width: '25px', height: '25px' }} /></a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">
                    <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
                </div>

            </footer>

        </Container>
    );
};

export default Footer;