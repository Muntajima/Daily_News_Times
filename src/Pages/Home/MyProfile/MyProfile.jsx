import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../Context/AuthContext";
import { imageUpload } from "../../APIs/utils";
import { toast } from "react-toastify";

const MyProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    console.log(user)
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleUpdateProfile = async () => {
        if (!user) return;

        let imageUrl = user.photoURL;
        if (photoURL instanceof File) {
            try {
                imageUrl = await imageUpload(photoURL); // Upload the image and get the URL
                setPhotoURL(imageUrl)
            } catch (error) {
                toast.error("Image upload failed. Please try again.", error);
                return;
            }
        }


        if (displayName === user.displayName && imageUrl === user.photoURL) {
            toast.info("No changes to save.");
            return;
        }
        try {
            await updateUserProfile(displayName, imageUrl);

            toast.success("Profile updated successfully!");
            console.log(displayName, photoURL)
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }

        const profileResponse = await fetch("https://news-times-server.vercel.app/users", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: user._id, // Replace with the user's ID
                displayName,
                photoURL: imageUrl,
            }),
        });

        const profileData = await profileResponse.json();
        console.log("Updated profile:", profileData);
    }

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            //setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    return (
        <div className="pt-16">
            <div className="bg-green-300 flex justify-between px-4">
                <h2 className="text-3xl pl-8 pt-8">
                    <span>Hi, Welcome </span>
                    {
                        user?.displayName ? user.displayName : "Back"
                    }
                </h2>
                <div className="flex gap-4 justify-center items-center">
                    <img src={user.photoURL} className="w-28 h-28 my-4 rounded-full" />
                    <div className="font-semibold">
                        <h3>{user.displayName}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10 px-5 bg-gray-100 min-h-screen">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-4">My Profile</h2>

                    {user?.photoURL && (
                        <div className="flex justify-center mb-4">
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
                            />
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            value={user?.email || ""}
                            disabled
                            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
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
                            onChange={(e) => setPhotoURL(e.target.files[0])} // Set the File object
                            required
                        />
                    </div>

                    <button
                        onClick={handleUpdateProfile}
                        className="btn bg-green-300 w-full mt-4"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;