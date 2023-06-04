import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../../../assets/images/courses/image.jpg'
const AboutUs = () => {
    return (
        <div className="container">
               <div className="mb-5  text-center ">
                    <h1 className='mb-5 mt-5'>Student Says About Us</h1>
                    <p>Separated they live in. A small river named Duden flows by their place and <br />supplies it with the necessary regelialia. It is a  paradisematic country</p>
                </div>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="d-lg-flex justify-content-center align-items-center">
                    <div className=" d-lg-flex gap-5 m-5">
                   
                            <img className="rounded-circle" style={{ width: '150px' }} src={img1} alt="" />
                  
                        <div>
                            
                            <p>Far far away, behind the word mountains, <br /> far from the countries <br />
                            Vokalia.There live the blind text</p>
                            <h3 className="text-White">Henry Wal</h3>
                            <p className="text-warning">mother</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="md:d-flex justify-content-center align-items-center">
                    <div className=" md:d-flex gap-5 m-5">
                   
                            <img className="rounded-circle" style={{ width: '150px' }} src={img1} alt="" />
                  
                        <div>
                            
                            <p>Far far away, behind the word mountains, <br /> far from the countries <br />
                            Vokalia.There live the blind text</p>
                            <h3 className="text-White">Henry Wal</h3>
                            <p className="text-warning">mother</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="md:d-flex justify-content-center align-items-center">
                    <div className=" md:d-flex gap-5 m-5">
                   
                            <img className="rounded-circle" style={{ width: '150px' }} src={img1} alt="" />
                  
                        <div>
                            
                            <p>Far far away, behind the word mountains, <br /> far from the countries <br />
                            Vokalia.There live the blind text</p>
                            <h3 className="text-White">Henry Wal</h3>
                            <p className="text-warning">mother</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default AboutUs;