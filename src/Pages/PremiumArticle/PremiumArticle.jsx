import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const PremiumArticle = () => {
    const [premiumArticles, setPremiumArticles] = useState([]);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPremiumArticle = async () => {
            const res = await axiosSecure.get('/news');
            const premiumArticlesData = res.data.filter(articles => articles.isPremium === true);
            setPremiumArticles(premiumArticlesData)
        }

        fetchPremiumArticle();
    }, [axiosSecure])
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center py-8">Premium Articles</h1>
            {premiumArticles.length === 0 ? (
                <p>No premium articles available.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {premiumArticles.map((article) => (
                        <div key={article._id} className="border rounded-lg p-4">
                            <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold">{article.title}</h2>
                            <p className="text-sm text-gray-500">{article.publisher}</p>
                            <p className="text-gray-700 mt-2">{article.description.substring(0, 150)}...</p>
                            <button
                                onClick={() => navigate(`/news/${article._id}`)} 
                                className="mt-4 text-blue-500 hover:underline"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PremiumArticle;