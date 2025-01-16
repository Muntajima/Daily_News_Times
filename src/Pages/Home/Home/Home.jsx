
import HomeNewsCard from "../AllNews/HomeNewsCard";
import NewsCategory from "../NewsCategory/NewsCategory";
import Plan from "../Plan/Plan";


const Home = () => {
    return (
        <div>
            <NewsCategory/>
            <HomeNewsCard/>
             <Plan/>   
        </div>
    );
};

export default Home;