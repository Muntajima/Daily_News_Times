import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import AuthContext from "../../../Context/AuthContext";

const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    const [publishers, setPublishers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPublisher, setSelectedPublisher] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext); // Access current user info

    // Options for tags filter
    const tagsOptions = [
        { value: "Technology", label: "Technology" },
        { value: "Medical", label: "Medical" },
        { value: "International", label: "International" },
        { value: "Sports", label: "Sports" },
        { value: "Education", label: "Education" },
        { value: "Business", label: "Business" },
        { value: "Politics", label: "Politics" },
        { value: "Environment", label: "Environment" },
        { value: "Movies", label: "Movies" },
        { value: "Life and Living", label: "Life & Living" },
    ];

    // Fetch publishers from the backend
    useEffect(() => {
        axiosPublic
            .get("/publishers")
            .then((res) => setPublishers(res.data))
            .catch((err) => console.error("Error fetching publishers:", err));
    }, []);

    // Fetch articles based on filters
    const fetchArticles = () => {
        const tags = selectedTags.map((tag) => tag.value).join(",");
        const params = new URLSearchParams({
            search: searchTerm,
            publisher: selectedPublisher,
            tags,
        });
        console.log(params)

        axiosPublic
            .get(`/news?${params}`)
            .then((res) => {setArticles(res.data)
                console.log(res.data)
            })
            .catch((err) => console.error("Error fetching articles:", err));
    };

    // Trigger article fetch when filters change
    useEffect(() => {
        fetchArticles();
    }, [searchTerm, selectedPublisher, selectedTags]);

    return (
        <div className="pt-20">
            {/* Header Section */}
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">All Articles</h2>

                {/* Filters Section */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by title"
                        className="input input-bordered w-full md:w-1/3"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    {/* Publisher Dropdown */}
                    <select
                        className="select select-bordered w-full md:w-1/3"
                        value={selectedPublisher}
                        onChange={(e) => setSelectedPublisher(e.target.value)}
                    >
                        <option value="">All Publishers</option>
                        {publishers.map((publisher) => (
                            <option key={publisher._id} value={publisher.name}>
                                {publisher.name}
                            </option>
                        ))}
                    </select>

                    {/* Tags Multi-Select */}
                    <Select
                        isMulti
                        options={tagsOptions}
                        className="basic-multi-select w-full md:w-1/3"
                        classNamePrefix="select"
                        value={selectedTags}
                        onChange={(selected) => setSelectedTags(selected)}
                        placeholder="Filter by tags"
                    />
                </div>

                {/* Articles Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div
                            key={article._id}
                            className={`card shadow-lg p-4 ${
                                article.isPremium
                                    ? "bg-yellow-100 border border-yellow-400"
                                    : "bg-white"
                            }`}
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover rounded mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{article.publisher}</p>
                            <p className="text-sm text-gray-700 mb-4">{article.description}</p>

                            {/* Details Button */}
                            <button
                                className="btn btn-primary w-full"
                                disabled={article.isPremium && !user?.hasSubscription}
                            >
                                {article.isPremium && !user?.hasSubscription ? (
                                    "Premium (Subscribe)"
                                ) : (
                                    <Link to={`/news/${article._id}`}>Details</Link>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllArticles;
