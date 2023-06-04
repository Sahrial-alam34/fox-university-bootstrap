import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Intro from "../Intro/Intro";
import Cover from "../Cover/Cover";
import Offer from "../Offer/Offer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Fox | Home</title>
            </Helmet>
            <Banner></Banner>
            <Intro></Intro>
            <Offer></Offer>
            <Cover></Cover>
        </div>
    );
};

export default Home;