import PopularInstractors from "./Instructors/PopularInstractors";
import PopularClasses from "./PopularClasses/PopularClasses";
import Slider from "./slider/Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstractors></PopularInstractors>
        </div>
    );
};

export default Home;