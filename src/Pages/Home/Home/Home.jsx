
//import { useEffect, useState } from "react";
import HomePage from "../../HomePage/HomePage";
import HomeNewsCard from "../AllNews/HomeNewsCard";
import NewsCategory from "../NewsCategory/NewsCategory";
import Plan from "../Plan/Plan";
//import { useNavigate } from "react-router-dom";


const Home = () => {
 

    return (
        <div>
            <HomePage/>
            <NewsCategory/>
            <HomeNewsCard/>
             <Plan/>   
        </div>
    );
};

export default Home;