import { useState } from "react";
import { imageUpload } from "../../../APIs/utils";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

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
    const photoURL = await  imageUpload(publisherLogo);
    console.log(publisherName, photoURL);
    if (!photoURL) {
        alert("Image upload failed. Please try again.");
        return;
      }

    const newPublisher = {
        name: publisherName,
        logo: publisherLogo
    }
    axiosPublic.post('/publishers', newPublisher)
                            .then(res =>{
                                if(res.data.insertedId){
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

    return (
        <div>
            <h2 className="text-5xl text-center my-12">All publishers</h2>
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
    );
};

export default AllPublishers;