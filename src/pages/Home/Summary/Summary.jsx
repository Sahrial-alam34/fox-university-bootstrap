import { Card } from "react-bootstrap";

import img1 from '../../../assets/images/banner/img1.jpg'
const Summary = () => {
    return (
        <div className="d-flex">
            <Card className='border rounded-0' >
                <Card.Img variant="top"  src={img1}
                />
    
            </Card>
            <Card className='border rounded-0' >
                <Card.Img variant="top"  src={img1}
                />
    
            </Card>
            <Card className='border rounded-0'>
                <Card.Img variant="top"  src={img1}
                />
    
            </Card>
            <Card className='border rounded-0' >
                <Card.Img variant="top"  src={img1}
                />
    
            </Card>
        </div>
    );
};

export default Summary;