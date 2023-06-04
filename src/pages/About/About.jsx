import { Helmet } from "react-helmet-async";
import CoverPage from "../Shared/CoverPage/CoverPage";

import img2 from '../../assets/images/offer/image.jpg'
import Cover from "../Home/Cover/Cover";
import AboutUs from "../Home/AboutUs/AboutUs";
import Summary from "../Home/Summary/Summary";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Fox | About</title>
            </Helmet>
            <CoverPage title="About Us" link="about"></CoverPage>
            <div className='container'>
                <div className="row ">
                    <div className='col-md-8'>
                        <h1 className='mb-5 mt-5'>Fox University Stablished Since 1960</h1>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.

                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word  and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
                      
                    </div>
                    <div className='col-md-4'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <Cover></Cover>
            <AboutUs></AboutUs>
            <Summary></Summary>
        </div>
    );
};

export default About;