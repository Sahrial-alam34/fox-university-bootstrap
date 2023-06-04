import { Button, Card } from "react-bootstrap";

import img1 from '../../../assets/images/blog/image.jpg'
import { FaArrowRight,FaReadme } from "react-icons/fa";
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <div className="mb-5  text-center ">
                <h1 className='mb-5 mt-5'>Recent Blog</h1>
                <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary <br />  regelialia. It is a paradisematic country</p>
            </div>
            <div className="row  justify-content-between mb-5">
                <div className='col-6 col-md-3'>

                    <Card className='border-0 ' style={{ width: '25rem' }}>
                        <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                        />
                        <Card.Body>

                            <Card.Title>
                                <h3>Skills To Develop Your Child Memory</h3>
                            </Card.Title>
                            <p>
                                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                            </p>

                            <div className="d-flex gap-5">
                                <div className="position-relative">
                                    <Button className='rounded-pill btn btn-warning text-white' style={{ width: '150px', height: '50px' }} >Apply now</Button>
                                    <FaArrowRight className="position-absolute custom-left custom-top text-white"></FaArrowRight>
                                </div>
                                <div className="d-flex gap-5 mt-2">
                                    <p className="text-warning">Admin</p>
                                    <div className="d-flex gap-3">
                                        <FaReadme className="mt-1"></FaReadme>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6 col-md-3'>

                    <Card className='border-0 ' style={{ width: '25rem' }}>
                        <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                        />
                        <Card.Body>

                            <Card.Title>
                                <h3>Skills To Develop Your Child Memory</h3>
                            </Card.Title>
                            <p>
                                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                            </p>

                            <div className="d-flex gap-5">
                                <div className="position-relative">
                                    <Button className='rounded-pill btn btn-warning text-white' style={{ width: '150px', height: '50px' }} >Apply now</Button>
                                    <FaArrowRight className="position-absolute custom-left custom-top text-white"></FaArrowRight>
                                </div>
                                <div className="d-flex gap-5 mt-2">
                                    <p className="text-warning">Admin</p>
                                    <div className="d-flex gap-3">
                                        <FaReadme className="mt-1"></FaReadme>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6 col-md-3'>

                    <Card className='border-0 ' style={{ width: '25rem' }}>
                        <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                        />
                        <Card.Body>

                            <Card.Title>
                                <h3>Skills To Develop Your Child Memory</h3>
                            </Card.Title>
                            <p>
                                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                            </p>

                            <div className="d-flex gap-5">
                                <div className="position-relative">
                                    <Button className='rounded-pill btn btn-warning text-white' style={{ width: '150px', height: '50px' }} >Apply now</Button>
                                    <FaArrowRight className="position-absolute custom-left custom-top text-white"></FaArrowRight>
                                </div>
                                <div className="d-flex gap-5 mt-2">
                                    <p className="text-warning">Admin</p>
                                    <div className="d-flex gap-3">
                                        <FaReadme className="mt-1"></FaReadme>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
                <div className='col-6 col-md-3'>

                    <Card className='border-0 ' style={{ width: '25rem' }}>
                        <Card.Img variant="top" style={{ height: '250px' }} src={img1}
                        />
                        <Card.Body>

                            <Card.Title>
                                <h3>Skills To Develop Your Child Memory</h3>
                            </Card.Title>
                            <p>
                                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                            </p>

                            <div className="d-flex gap-5">
                                <div className="position-relative">
                                    <Button className='rounded-pill btn btn-warning text-white' style={{ width: '150px', height: '50px' }} >Apply now</Button>
                                    <FaArrowRight className="position-absolute custom-left custom-top text-white"></FaArrowRight>
                                </div>
                                <div className="d-flex gap-5 mt-2">
                                    <p className="text-warning">Admin</p>
                                    <div className="d-flex gap-3">
                                        <FaReadme className="mt-1"></FaReadme>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blog;