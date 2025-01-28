import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import useAxiosPublic from "../hooks/useAxiosPublic";
import AuthContext from "../../Context/AuthContext";
//import { useQuery } from "@tanstack/react-query";
import { auth } from "../../firebase/firebase.init";

const Payment = () => {
    const { state } = useLocation(); // Data from the Subscription component
    const { plan, subscriptionPeriod } = state || {};
    const navigate = useNavigate();
    //const axiosPublic = useAxiosPublic();
    //const [loading, setLoading] = useState(false);
    const { loading, setLoading } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    //const { user } = useContext(AuthContext);

    const user = auth.currentUser;
    console.log(user);

    const [userId, setUserId] = useState('');

    // const { data: userDetails = {}, isLoading: userLoading } = useQuery({
    //     queryKey: ['users', user?.email],
    //     queryFn: async () => {
    //       const res = await axiosPublic.get(`/users?email=${user.email}`);
    //       return res.data; // Assuming res.data contains a single user object
    //     },
    //     enabled: !!user?.email, // Only run the query if the email exists
    //   });

    useEffect(() => {
        if (user) {
            setUserId(user.uid); // Set userId from Firebase user UID
        }
    }, [user]);

    console.log(userId)
    const handlePayment = async () => {

        setLoading(true);
        setError("");

        try {
            const response = await fetch(`https://news-times-server.vercel.app/users/${userId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firebaseUid: userId,
                    subscriptionType: plan,
                    period: subscriptionPeriod, // Fallback if state data is unavailable
                }),
            });
            console.log(response)
            const data = await response.json();
            console.log(data)
            if (data.success) {
                console.log("Payment successful");
                setSuccess(true);
                setTimeout(() => navigate("/dashboard"), 2000); // Redirect to dashboard
            } else {
                console.error("Payment failed:", data.message);
                setError(data.message || "Payment failed. Try again!");
            }
        } catch (err) {
            setError(err.message || "An unexpected error occurred!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-24">
            <div className="bg-gradient-to-r from-blue-200 via-purple-400 to-pink-500 text-white text-center py-10 rounded-lg shadow-lg mb-8">
                <h1 className="text-5xl font-bold">Upgrade to {plan}!</h1>
                <p className="mt-4 text-lg">Enjoy uninterrupted music and exclusive benefits.</p>
            </div>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Payment for {plan}</h1>
                <p className="text-gray-600 mb-4">
                    Subscription Period: {subscriptionPeriod}{" "}
                    {subscriptionPeriod === "1" ? "Minute" : "Days"}
                </p>
                <p className="text-gray-600 mb-6">
                    Price:{" "}
                    {subscriptionPeriod === "1"
                        ? "Free"
                        : subscriptionPeriod === "5"
                            ? "$9.99"
                            : "$19.99"}
                </p>

                {error && <p className="text-red-500 mb-4">{error}</p>}
                {success && <p className="text-green-500 mb-4">Payment Successful! Redirecting...</p>}

                <button
                    onClick={handlePayment}
                    disabled={loading || success}
                    className={`w-full py-2 px-4 rounded-lg ${loading ? "bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                >
                    {loading ? "Processing..." : "Confirm Payment"}
                </button>
            </div>

        </div>
    );
};

export default Payment;
