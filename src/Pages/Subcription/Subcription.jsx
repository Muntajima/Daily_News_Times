import { useState } from 'react';
import sub1 from '../../assets/Images/sub1.webp';
import sub2 from '../../assets/Images/sub2.jpeg';
import sub3 from '../../assets/Images/sub4.jpg';
import { useNavigate } from 'react-router-dom';

const Subcription = () => {
    const navigate = useNavigate();

    const [selectedPlan, setSelectedPlan] = useState(null);
    const [subscriptionPeriod, setSubscriptionPeriod] = useState("1"); // Default to 1 minute
    console.log(selectedPlan);

    const handleSubscribe = (plan) => {
        setSelectedPlan(plan);
        // Simulate navigation to payment page
        navigate("/payment", {
            state: {
                plan,
                subscriptionPeriod,
            },
        });
    };

    const calculatePrice = () => {
        switch (subscriptionPeriod) {
            case "1":
                return "Free";
            case "5":
                return "$9.99 (5 Days)";
            case "10":
                return "$19.99 (10 Days)";
            default:
                return "$0.00";
        }
    };

    return (
        <div className="pt-24">
            <div className="bg-gradient-to-r from-blue-200 via-purple-400 to-pink-500 text-white text-center py-10 rounded-lg shadow-lg mb-8">
                <h1 className="text-5xl font-bold">Upgrade to Premium!</h1>
                <p className="mt-4 text-lg">Enjoy uninterrupted music and exclusive benefits.</p>
            </div>
            <h2 className="text-center text-4xl font-bold mb-8">Subcription Plans</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">

                <div
                    className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[80%] h-[400px]">
                    <div
                        className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                        {/* Front Side */}
                        <div
                            className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                            <img
                                src={sub1}
                                alt="animated_card"
                                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                            />
                            <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Premium Individual</h2>
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
                            <button className="text-sm bg-blue-300 px-4">Free For 1 Month</button>
                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4 mt-4">Premium Individual</h2>
                            <p className="text-gray-600"><ul className="list-disc">
                                <li>1 Premium account</li>
                                <li>Cancle anytime</li>
                                <li>15 hours/month of listening time from our audiobooks subscriber catalog</li>
                            </ul></p>
                            <a
                                className="inline-block mt-12 text-black px-8 rounded-full">
                                <select
                                    className="block w-full p-2 border rounded-lg"
                                    onChange={(e) => setSubscriptionPeriod(e.target.value)}
                                >
                                    <option value="1">1 Minute (Trial)</option>
                                    <option value="5">5 Days</option>
                                    <option value="10">10 Days</option>
                                </select>
                                <button
                                    className="mt-4 mb-8 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                                    onClick={() => handleSubscribe("Premium Individual")}
                                >
                                    Subscribe ({calculatePrice()})
                                </button></a>
                        </div>
                    </div>
                </div>



                <div
                    className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[80%] h-[400px]">
                    <div
                        className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                        {/* Front Side */}
                        <div
                            className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                            <img
                                src={sub2}
                                alt="animated_card"
                                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                            />
                            <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Premium Duo</h2>
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
                            <button className="text-sm bg-yellow-200 px-4">$14.99 Per Month</button>

                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4 mt-4">Premium Duo</h2>
                            <p className="text-gray-600"><ul className="list-disc">
                                <li>2 Premium account</li>
                                <li>Cancle anytime</li>
                                <li>35 hours/month of listening time from our audiobooks subscriber catalog</li>
                            </ul></p>
                            <a
                                className="inline-block mt-12 text-black px-8 rounded-full"><select
                                    className="block w-full p-2 border rounded-lg"
                                    onChange={(e) => setSubscriptionPeriod(e.target.value)}
                                >
                                    <option value="1">1 Minute (Trial)</option>
                                    <option value="5">5 Days</option>
                                    <option value="10">10 Days</option>
                                </select>
                                <button
                                    className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
                                    onClick={() => handleSubscribe("Premium Duo")}
                                >
                                    Subscribe ({calculatePrice()})
                                </button></a>
                        </div>
                    </div>
                </div>




                <div
                    className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[80%] h-[400px]">
                    <div
                        className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                        {/* Front Side */}
                        <div
                            className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                            <img
                                src={sub3}
                                alt="animated_card"
                                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                            />
                            <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Premium Family</h2>
                        </div>

                        {/* Back Side */}
                        <div
                            className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
                            <button className="text-sm bg-pink-300 px-4">$16.99 Per Month</button>
                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-2 mt-4">Premium Family</h2>
                            <p className="text-gray-600"><ul className="list-disc">
                                <li>Up to 6 Premium or Kids account</li>
                                <li>Block explicit music</li>
                                <li>Access to Spotify Kids</li>
                                <li>Cancle anytime</li>
                                <li>35 hours/month of listening time from our audiobooks subscriber catalog</li>
                            </ul></p>
                            <a
                                className="inline-block mt-12 text-black px-8 rounded-full"><select
                                    className="block w-full p-2 border rounded-lg"
                                    onChange={(e) => setSubscriptionPeriod(e.target.value)}
                                >
                                    <option value="1">1 Minute (Trial)</option>
                                    <option value="5">5 Days</option>
                                    <option value="10">10 Days</option>
                                </select>
                                <button
                                    className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
                                    onClick={() => handleSubscribe("Premium Family")}
                                >
                                    Subscribe ({calculatePrice()})
                                </button></a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Subcription;