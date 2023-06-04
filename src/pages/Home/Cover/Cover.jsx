import { Card } from "react-bootstrap";

import './Cover.css'
import img1 from '../../../assets/images/banner/image2.jpg'
import img2 from '../../../assets/images/banner/img1.jpg'
const Cover = () => {
    return (
        <div>
            <Card className="bg-dark text-white fixed">
                <Card.Img style={{ height: '800px' }} className="custom-opacity " src={img1} alt="Card image" />
                <Card.ImgOverlay className=" m-5">
                    <div className="d-flex">
                        <div>
                            <img src={img2} alt="" />
                        </div>
                        <div className="m-5">
                           <h1 className="mb-5">Fox University</h1>
                            <Card.Text>
                                Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </Card.Text>
                        </div>
                    </div>
                    <div className="d-flex container m-5 justify-content-between">
                        <div>
                            <h1>18</h1>
                            <p>Certified Teachers</p>
                        </div>
                        <div>
                            <h1>401</h1>
                            <p>Students</p>
                        </div>
                        <div>
                            <h1>30</h1>
                            <p>Courses</p>
                        </div>
                        <div>
                            <h1>50</h1>
                            <p>Awards Won</p>
                        </div>
                    </div>

                </Card.ImgOverlay>
            </Card>
        </div>

    );
};

export default Cover;