import Card from 'react-bootstrap/Card';
import img1 from '../../../assets/images/intro/avatar1.png'
import img2 from '../../../assets/images/intro/reading2.png'
import img3 from '../../../assets/images/intro/books.png'
import img4 from '../../../assets/images/intro/certificate.png'
const Intro = () => {
    return (
        <div className='d-lg-flex '>
            <Card className='bg-warning text-white p-5 border rounded-0'>
                <div className='h-50 mx-auto'>
                    <Card.Img style={{ width: '100px' }} className='text-white ' variant="top" src={img1} />
                </div>

                <Card.Body className='text-center'>
                    <Card.Title>Certified Teachers</Card.Title>
                    <Card.Text>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='bg-black text-white p-5 border rounded-0'>
                <div className='h-50 mx-auto'>
                    <Card.Img style={{ width: '100px' }} className='text-white ' variant="top" src={img2} />
                </div>

                <Card.Body className='text-center '>
                    <Card.Title>Certified Teachers</Card.Title>
                    <Card.Text>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='bg-warning text-white p-5 border rounded-0'>
                <div className='h-50 mx-auto'>
                    <Card.Img style={{ width: '100px' }} className='text-white ' variant="top" src={img3} />
                </div>

                <Card.Body className='text-center'>
                    <Card.Title>Certified Teachers</Card.Title>
                    <Card.Text>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className='bg-black text-white p-5 border rounded-0'>
                <div className='h-50 mx-auto'>
                    <Card.Img style={{ width: '100px' }} className='text-white ' variant="top" src={img4} />
                </div>

                <Card.Body className='text-center'>
                    <Card.Title>Certified Teachers</Card.Title>
                    <Card.Text>
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Intro;