import { Helmet } from "react-helmet-async";
import CoverPage from "../Shared/CoverPage/CoverPage";


const About = () => {
    return (
        <div>
                  <Helmet>
                <title>Fox | About</title>
            </Helmet>
            <CoverPage title="About Us" link="About"></CoverPage>
            
        </div>
    );
};

export default About;