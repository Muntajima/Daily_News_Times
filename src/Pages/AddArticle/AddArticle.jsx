import { useState, useEffect } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { imageUpload } from "../APIs/utils";


const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [publishers, setPublishers] = useState([]);
    const [selectedPublisher, setSelectedPublisher] = useState(null);
    const [selectedTags, setSelectedTags] = useState([]);
    const axiosPublic = useAxiosPublic();

    const tagsOptions = [
        { value: "Technology", label: "Technology" },
        { value: "Health", label: "Health" },
        { value: "Sports", label: "Sports" },
        { value: "Education", label: "Education" },
    ];

    // Fetch all publishers added by admin
    useEffect(() => {
        axiosPublic.get("/publishers")
            .then((res) => setPublishers(res.data))
            .catch((error) => console.error("Error fetching publishers", error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !image || !selectedPublisher || !description) {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all required fields.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        try {
            const imageUrl = await imageUpload(image); // Upload image and get URL

            const newArticle = {
                title,
                image: imageUrl,
                publisher: selectedPublisher,
                tags: selectedTags.map(tag => tag.value),
                description,
                status: "pending", // Default status for admin approval
                date: new Date().toISOString(),
            };

            // Post the new article
            axiosPublic.post("/articles", newArticle)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Article submitted successfully. Awaiting admin approval.",
                            icon: "success",
                            confirmButtonText: "Cool",
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error submitting article", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong while submitting the article.",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                });
        } catch (error) {
            console.error("Error uploading image", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to upload the image.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="pt-20">
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-8">Add Article</h2>
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
                >
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Article Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter article title"
                            className="input input-bordered w-full"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Publisher</span>
                        </label>
                        <select
                            className="select select-bordered w-full"
                            value={selectedPublisher}
                            onChange={(e) => setSelectedPublisher(e.target.value)}
                            required
                        >
                            <option value="">Select Publisher</option>
                            {publishers.map((publisher) => (
                                <option key={publisher._id} value={publisher.name}>
                                    {publisher.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Tags</span>
                        </label>
                        <Select
                            isMulti
                            options={tagsOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={selectedTags}
                            onChange={(selected) => setSelectedTags(selected)}
                        />
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            placeholder="Write the article description here"
                            className="textarea textarea-bordered w-full"
                            rows="5"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary w-full">
                            Submit Article
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddArticle;