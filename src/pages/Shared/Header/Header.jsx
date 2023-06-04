import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdCall, MdSearch } from 'react-icons/md';
import { SiMinutemailer } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const buttonStyle = isHovered ? 'border border-warning text-warning' : 'warning text-white';
    return (
        <div className='container'>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand href="/"> <h3 className='text-bold'>FOX.</h3><small>University</small></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-5">
                            <div className='d-flex'>
                                <SiMinutemailer style={{ width: '50px', height: '40px', color: 'orange' }} className='me-3 mt-2'></SiMinutemailer>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Email</p>
                                    <p>youremail@email.com</p>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <MdCall style={{ width: '50px', height: '40px', color: 'orange' }} className='me-3 mt-2'></MdCall>
                                <div>
                                    <p style={{ fontWeight: 'bold' }}>Call</p>
                                    <p>Call Us: + 1235 2355 98</p>
                                </div>
                            </div>





                        </Nav>
                        <Button style={{ width: '150px', height: '50px' }} variant={buttonStyle}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}>Apply Now</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" bg="black">
                <Container >

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-between'>
                        <div>
                            <Nav className="">
                                <NavLink to='/' activeclassname="active" className='text-white mt-2 p-2 text-decoration-none nav-link'>Home</NavLink>
                                <NavLink to='/blog' activeclassname="active" className='text-white mt-2 p-2 text-decoration-none nav-link' >Blog</NavLink>
                                <NavLink to='/blog' activeclassname="active" className='text-white mt-2 p-2 text-decoration-none nav-link' >Blog</NavLink>
                                <NavLink to='/blog' activeclassname="active" className='text-white mt-2 p-2 text-decoration-none nav-link' >Blog</NavLink>
                                <NavLink to='/blog' activeclassname="active" className='text-white mt-2 p-2 text-decoration-none nav-link' >Blog</NavLink>
                                <NavLink to='/blog' activeclassname="active" className='text-white mt-2 p-2 text-decoration-none nav-link' >Blog</NavLink>

                            </Nav>
                        </div>
                        <Form className="d-flex">
                            <div className='d-flex '>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 "
                                    aria-label="Search"
                                    
                                    

                                >

                                </Form.Control>
                                <div className='bg-white' style={{ position: 'absolute', right: 25, top: 20, width:'35px' }}>
                                    <MdSearch ></MdSearch>
                                </div>

                            </div>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;