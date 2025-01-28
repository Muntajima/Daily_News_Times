import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const MyArticle = () => {
    const { user } = useContext(AuthContext); 
    const axiosPublic = useAxiosPublic();
    const [articles, setArticles] = useState([]);
    const [declineReason, setDeclineReason] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const response = await axiosPublic.get("/my-article", {
              params: { email: user.email },
            });
            setArticles(response.data);
          } catch (error) {
            console.error("Failed to fetch articles:", error);
          }
        };
    
        fetchArticles();
      }, [user.email, axiosPublic]);
      console.log(articles)

      const handleDelete = async (articleId) => {
        try {
          const response = await axiosPublic.delete(`/news/${articleId}`);
          if (response.data.deletedCount > 0) {
            setArticles(articles.filter(article => article._id !== articleId));
            alert("Article deleted successfully.");
          }
        } catch (error) {
          console.error("Failed to delete article:", error);
        }
      };

      const fetchDeclineReason = async (articleId) => {
        const article = articles.find(a => a._id === articleId);
        if (article?.declineReason) {
          setDeclineReason(article.declineReason);
          setSelectedArticle(article);
        }
      };

    return (
        <div className="container mx-auto p-4 pt-24">
      <h1 className="text-2xl font-bold mb-4">My Articles</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Is Premium</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr key={article._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{article.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.status === "approved" && (
                    <span className="text-green-600 font-bold">Approved</span>
                  )}
                  {article.status === "pending" && (
                    <span className="text-yellow-600 font-bold">Pending</span>
                  )}
                  {article.status === "declined" && (
                    <div>
                      <span className="text-red-600 font-bold">Declined</span>
                      <button
                        onClick={() => fetchDeclineReason(article._id)}
                        className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded"
                      >
                        Reason
                      </button>
                    </div>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {article.isPremium ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/news/${article._id}`}><button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Details
                  </button></Link>
                  <Link to={`/update-article/${article._id}`}>
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Update
                  </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(article._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Decline Reason Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg w-1/3">
            <h2 className="text-lg font-bold mb-4">Decline Reason</h2>
            <p>{declineReason}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default MyArticle;