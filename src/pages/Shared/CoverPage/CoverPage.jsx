
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/quote/images.jpg'
import { Card } from "react-bootstrap";
const CoverPage = ({title,link}) => {
    return (
        <div>
            <Card className="bg-dark text-white fixed">
                <Card.Img style={{ height: '500px' }} className="custom-opacity " src={img1} alt="Card image" />
                <Card.ImgOverlay className=" m-5">
                    <div className='text-center'>
              
                        <div className="m-5">
                            <h1 className="mb-5">{title}</h1>
                            <Link to='/' className='text-decoration-none text-white me-5'>Home </Link>
                            <Link to={`/${link}`} className='text-decoration-none text-white'>{link} </Link>
                        </div>
                    </div>
                
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default CoverPage;