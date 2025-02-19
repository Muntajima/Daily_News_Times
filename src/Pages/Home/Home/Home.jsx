
//import { useEffect, useState } from "react";
import HomePage from "../../HomePage/HomePage";
import HomeNewsCard from "../AllNews/HomeNewsCard";
import NewsCategory from "../NewsCategory/NewsCategory";
import Newsletter from "../Newsletter/Newsletter";
import NewsVideos from "../NewsVideos/NewsVideos";
import Plan from "../Plan/Plan";
//import { useNavigate } from "react-router-dom";


const Home = () => {
 

    return (
        <div>
            <HomePage/>
            <NewsCategory/>
            <HomeNewsCard/>
             <Plan/>
             <NewsVideos/>   
             <Newsletter/>
        </div>
    );
};

export default Home;