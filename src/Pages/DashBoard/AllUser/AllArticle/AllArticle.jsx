import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AuthContext from "../../../../Context/AuthContext";

const AllArticle = () => {
    const queryClient = useQueryClient();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [declineReason, setDeclineReason] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  

  // Fetch all articles
  const { data: news = [] } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
        const { data } = await axiosPublic.get("/news");
        return data;
  }, 
  });

  // Approve an article
  const approveArticle = async (id) => {
    await axiosSecure.patch(`/news/${id}/approve`);
    Swal.fire("Success", "Article approved successfully!", "success");
    queryClient.invalidateQueries(["news"]);
  };

  // Decline an article with reason
  const declineArticle = async () => {
    if (!declineReason.trim()) {
      Swal.fire("Error", "Please provide a reason for declining the article!", "error");
      return;
    }
    await axiosPublic.patch(`/news/${selectedArticle}/decline`, { reason: declineReason });
    Swal.fire("Success", "Article declined successfully!", "success");
    setSelectedArticle(null);
    setDeclineReason("");
    queryClient.invalidateQueries("news");
  };

  // Delete an article
  const deleteArticle = async (id) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
      await axiosSecure.delete(`/news/${id}`);
      Swal.fire("Deleted!", "Article has been deleted.", "success");
      queryClient.invalidateQueries("news");
    }
  };

  // Make article premium
  const makePremium = async (id) => {
    await axiosSecure.patch(`/news/${id}/premium`);
    Swal.fire("Success", "Article is now premium!", "success");
    queryClient.invalidateQueries("news");
  };
    return (
        <div>
            <div className="p-8">
      <h2 className="text-4xl text-center mb-8">Manage All Articles</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Posted Date</th>
              <th>Status</th>
              <th>Publisher</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((article, index) => (
              <tr key={article._id}>
                <td>{index + 1}</td>
                <td>{article.title}</td>
                <td>{article.authorName}</td>
                <td>{article.authorEmail}</td>
                <td>
                  <img src={user?.photoURL} alt="Author" className="w-12 h-12 rounded-full" />
                </td>
                <td>{new Date(article.postedDate).toLocaleDateString()}</td>
                <td>{article.status}</td>
                <td>{article.publisher}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => approveArticle(article._id)}
                    className="btn btn-success btn-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setSelectedArticle(article._id)}
                    className="btn btn-warning btn-sm"
                  >
                    Decline
                  </button>
                  <button
                    onClick={() => deleteArticle(article._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => makePremium(article._id)}
                    className="btn btn-primary btn-sm"
                  >
                    Make Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Decline Modal */}
      {selectedArticle && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Decline Article</h3>
            <textarea
              className="textarea textarea-bordered w-full my-4"
              placeholder="Write the reason for declining the article"
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
            ></textarea>
            <div className="modal-action">
              <button
                onClick={declineArticle}
                className="btn btn-warning"
              >
                Submit
              </button>
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
        </div>
    );
};

export default AllArticle;