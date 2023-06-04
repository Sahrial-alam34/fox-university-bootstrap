
import img1 from '../../../assets/images/intro/avatar1.png'
import img2 from '../../../assets/images/offer/image.jpg'

const Offer = () => {
    return (
    <div className='container'>
            <div className="row ">
            <div className='col-md-8'>
                <h1 className='mb-5 mt-5'>What We Offer</h1>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                <div className="row mt-5">
                    <div className="col-md-6 d-flex gap-5">
                        <div style={{ width: '150px', height:'70px' }} className='rounded-circle bg-warning d-flex justify-content-center align-items-center'>
                            <img  style={{ width: '50px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex gap-5">
                        <div style={{ width: '150px', height:'70px' }} className='rounded-circle bg-warning d-flex justify-content-center align-items-center'>
                            <img  style={{ width: '50px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex gap-5">
                        <div style={{ width: '150px', height:'70px' }} className='rounded-circle bg-warning d-flex justify-content-center align-items-center'>
                            <img  style={{ width: '50px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex gap-5">
                        <div style={{ width: '150px', height:'70px' }} className='rounded-circle bg-warning d-flex justify-content-center align-items-center'>
                            <img  style={{ width: '50px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex gap-5">
                        <div style={{ width: '150px', height:'70px' }} className='rounded-circle bg-warning d-flex justify-content-center align-items-center'>
                            <img  style={{ width: '50px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex gap-5">
                        <div style={{ width: '150px', height:'70px' }} className='rounded-circle bg-warning d-flex justify-content-center align-items-center'>
                            <img  style={{ width: '50px' }} src={img1} alt="" />
                        </div>
                        <div>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <img src={img2} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Offer;