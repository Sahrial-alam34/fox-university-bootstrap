import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Intro from "../Intro/Intro";
import Cover from "../Cover/Cover";
import Offer from "../Offer/Offer";
import Courses from "../Courses/Courses";
import Certified from "../Certified/Certified";
import AboutUs from "../AboutUs/AboutUs";
import Summary from "../Summary/Summary";
import Blog from "../Blog/Blog";

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
            <Courses></Courses>
            <Certified></Certified>
            <Blog></Blog>
            <AboutUs></AboutUs>
            <Summary></Summary>
        </div>
    );
};

export default Home;