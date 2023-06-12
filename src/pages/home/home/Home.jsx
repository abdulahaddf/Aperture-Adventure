import { Helmet } from "react-helmet-async";
import PopularInstractors from "./Instructors/PopularInstractors";
import PopularClasses from "./PopularClasses/PopularClasses";
import Slider from "./slider/Slider";
import Review from "./slider/review/Review";






const Home = () => {
    
    return (
        <div>
             <Helmet>
                <title>Aperture Adventure | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstractors></PopularInstractors>
            <Review></Review>
        </div>
    );
};

export default Home;