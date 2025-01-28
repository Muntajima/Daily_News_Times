/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Details = () => {

  const { id } = useParams();
  console.log(id)
  const [news, setNews] = useState([]);
  const axiosSecure = useAxiosSecure();
  // const data = useLoaderData() || {};
  // console.log(data)

  useEffect(() => {
    const fetchArticleDetails = () => {
      try {
        axiosSecure.get(`/news/${id}`)
          .then(res => {
            console.log(res.data);
            setNews(res.data);
          })
      } catch (error) {
        console.error("Error fetching article details:", error);
      }
    };

     // Increment view count
     const incrementViewCount = async () => {
      try {
        await axiosSecure.patch(`/news/${id}/increment-views`);
        console.log("View count incremented successfully");
      } catch (error) {
        console.error("Error incrementing view count:", error);
      }
    };

    fetchArticleDetails();
    incrementViewCount();
  }, [id, axiosSecure]);

  

  if (!news) {
    return <p>Article not found.</p>;
  }
  return (
    <div className="pt-24">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={news.image}
            alt={news.tags} 
            className=""/>
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
          <div className="flex justify-between px-4">
            <h3><strong>Publisher:</strong> {news.publisher}</h3>
            <div><strong>Tags:</strong> {news.tags}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;