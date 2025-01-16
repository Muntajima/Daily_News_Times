import { useEffect, useState } from "react";
import AllNewsCard from "./AllNewsCard";
import HomeNewsCard from "./HomeNewsCard";

const AllNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => {
            setNews(data.slice(0, 6))
            //console.log(data)
        })
    }, [])
    return (
        <div>
            {
                news.map(items => <AllNewsCard key={items._id} items={items}/>)
            }
        </div>
    );
};

export default AllNews;