import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowRight, FaReadme } from "react-icons/fa";


const SingleBlog = ({ blog }) => {
    //console.log('dfd', blog)
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const buttonStyle = isHovered ? 'border border-warning text-warning' : 'warning text-white';
    const { picture, date, title, description, type, message } = blog
    return (
        <div className='col-6 col-md-4'>

            <Card className='border-0 ' style={{ width: '25rem' }}>
                <Card.Img className="position-relative" variant="top" style={{ height: '250px' }} src={picture}
                />
                <div className="bg-primary position-absolute ">
                    <p className="text-white">{date}</p>
                </div>

                <Card.Body>

                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <p>
                        {description}
                    </p>

                    <div className="d-flex gap-5">
                        <div className="position-relative">
                            <Button className='rounded-pill' style={{ width: '150px', height: '50px' }} variant={buttonStyle}
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}>Apply Now</Button>
                            <FaArrowRight className="position-absolute custom-left custom-top text-white"></FaArrowRight>
                        </div>
                        <div className="d-flex gap-5 mt-2">
                            <p className="text-warning">{type}</p>
                            <div className="d-flex gap-3">
                                <FaReadme className="mt-1"></FaReadme>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleBlog;