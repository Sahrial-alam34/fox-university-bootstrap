
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FcCalendar, FcGrid, FcManager } from "react-icons/fc";

const SingleCourse = ({ course }) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const buttonStyle = isHovered ? 'border border-warning text-warning' : 'warning text-white';
    const { picture, name, seats, years, title, description } = course
    return (
        <div className="col-12 col-md-3">
            <Card className='border-0 ' style={{ width: '25rem' }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={picture}
                />
                <Card.Body>
                    <div className="d-flex">
                        <div className="d-flex gap-2">
                            <div>
                                <FcManager></FcManager>
                            </div>
                            <div>
                                <p className="uppercase">{name} </p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 ms-3">
                            <div>
                                <FcGrid></FcGrid>
                            </div>
                            <div>
                                <p className="uppercase">{seats} SEATS</p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 ms-3">
                            <div>
                                <FcCalendar></FcCalendar>
                            </div>
                            <div>
                                <p className="uppercase">{years} YEARS</p>
                            </div>
                        </div>
                    </div>
                    <Card.Title>
                        <h3>{title}</h3>
                    </Card.Title>
                    <p>
                        {description}
                    </p>

                    <Button className='rounded-pill' style={{ width: '150px', height: '50px' }} variant={buttonStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}>Apply Now</Button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCourse;