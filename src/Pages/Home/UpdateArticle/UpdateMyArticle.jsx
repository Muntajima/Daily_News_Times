import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";

const UpdateMyArticle = () => {
    const { id } = useParams(); // Get the article ID from the URL
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { user, setLoading } = useContext(AuthContext);
    const [article, setArticle] = useState({
        title: "",
        description: "",
        isPremium: false,
    });

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                //setLoading(true)
                const response = await axiosPublic.get(`/news/${id}`);
                setArticle(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch article:", err);
                //setLoading(false);
            }
        };

        fetchArticle();
    }, [id, axiosPublic, setLoading]);

    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value, type, checked } = e.target;
        setArticle({
            ...article,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axiosPublic.put(`/news/${id}`, {
                ...article,
                authorEmail: user.email, 
            });
            alert("Article updated successfully!");
            navigate("/my-article"); 
        } catch (err) {
            console.error("Failed to update article:", err);
            alert("Failed to update the article. Please try again.");
        }
    };

    return (
        <div className="pt-24">
            <div className="container mx-auto p-4 pt-24">
            <h1 className="text-2xl font-bold mb-4">Update Article</h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label className="block font-medium mb-2">Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={article.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-2">Content</label>
                    <textarea
                        name="content"
                        defaultValue={article.description}
                        onChange={handleInputChange}
                        rows="8"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    ></textarea>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="isPremium"
                        checked={article.isPremium}
                        onChange={handleInputChange}
                        className="mr-2"
                    />
                    <label className="font-medium">Is Premium</label>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Update Article
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateMyArticle;