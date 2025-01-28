import { useState } from "react";
import { imageUpload } from "../../../APIs/utils";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const AllPublishers = () => {
    const [publisherName, setPublisherName] = useState("");
    const [publisherLogo, setPublisherLogo] = useState(null);
    const axiosPublic = useAxiosPublic();

    //const photoURL = await  imageUpload(image);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!publisherName || !publisherLogo) {
            alert("Please fill in all fields");
            return;
        }
        let imageUrl = "";

        if (publisherLogo instanceof File) {
            try {
                const response = await imageUpload(publisherLogo);
                console.log(response.url)
                imageUrl = response.url;
                setPublisherLogo(imageUrl);
                console.log(publisherLogo)
            } catch (error) {
                toast.error("Image upload failed. Please try again.");
                console.error(error);
                return;
            }
        }
        // const photoURL = await imageUpload(publisherLogo);
        // console.log(publisherName, photoURL);
        // if (!photoURL) {
        //     alert("Image upload failed. Please try again.");
        //     return;
        // }

        const newPublisher = {
            name: publisherName,
            logo: imageUrl
        }
        console.log(newPublisher)
        axiosPublic.post('/publishers', newPublisher)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Publisher added successfully.",
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    setPublisherName("");
                    setPublisherLogo(null);
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while adding the publisher.",
                    icon: "error",
                    confirmButtonText: "Retry",
                });
            })
    }
    // Fetch all publishers
    const { data: allPublishers = [] } = useQuery({
        queryKey: ['publishers'],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/publishers");
            return data;
        },
    });

    return (

        <div>
            <h2 className="text-5xl text-center my-4">All publishers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                        <h2 className="text-4xl font-bold text-center mb-8">Add Publisher</h2>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg"
                        >
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Publisher Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter publisher name"
                                    className="input input-bordered w-full"
                                    value={publisherName}
                                    onChange={(e) => setPublisherName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Publisher Logo</span>
                                </label>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                    accept="image/*"
                                    onChange={(e) => setPublisherLogo(e.target.files[0])}
                                    required
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary w-full">
                                    Add Publisher
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="min-h-screen bg-gray-100">
                    <h2 className="text-4xl text-center font-bold my-12">Publisher List</h2>
                    <div>
                        {
                            allPublishers.map(publisher => <div key={publisher._id}>
                                <div className="shadow bg-gradient-to-r from-blue-100 via-purple-200 to-pink-300 text-white w-[240px] mb-4 lg:ml-48 rounded-lg">
                                    <div className="stat text-center flex">
                                        <div className="stat-title flex justify-center items-center text-white font-bold text-xl">{publisher.name || 0}
                                        </div>
                                        <p>{publisher.logo && (
                                            <img
                                                src={publisher.logo}
                                                alt={`${publisher.name} logo`}
                                                className="w-10 h-10 mx-auto rounded-full object-cover"
                                            />
                                        )}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPublishers;