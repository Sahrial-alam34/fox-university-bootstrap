import { useState } from "react";
import { Card } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const SingleStaff = ({ singleStaff }) => {
    console.log('dd', singleStaff)
    const { name, type, picture, description } = singleStaff
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="col-12 col-md-3">
            <Card className='border-0 ' border rounded-0>
                <Card.Img cla variant="top" style={{ height: '250px', opacity: isHovered ? 0.5 : 1 }} src={picture} onMouseEnter={handleMouseEnter}
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
                        <h3>{name}</h3>
                        <p className="uppercase text-warning">{type}</p>
                    </Card.Title>
                    <p>
                        {description}
                    </p>



                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleStaff;