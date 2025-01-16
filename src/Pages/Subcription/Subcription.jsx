import sub1 from '../../assets/Images/sub1.webp';
import sub2 from '../../assets/Images/sub2.jpeg';
import sub3 from '../../assets/Images/sub4.jpg';

const Subcription = () => {
    return (
        <div className="pt-24">
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
                            <a href="https://zenui.net"
                                className="inline-block mt-12 text-black hover:underline bg-blue-300 px-8 rounded-full">Try Free For 1 Month</a>
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
                            <a href="https://zenui.net"
                                className="inline-block mt-12 text-black hover:underline bg-yellow-200 px-8 rounded-full">Get Premium Duo</a>
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
                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4 mt-4">Premium Family</h2>
                            <p className="text-gray-600"><ul className="list-disc">
                                <li>Up to 6 Premium or Kids account</li>
                                <li>Block explicit music</li>
                                <li>Access to Spotify Kids</li>
                                <li>Cancle anytime</li>
                                <li>35 hours/month of listening time from our audiobooks subscriber catalog</li>
                                </ul></p>
                            <a href="https://zenui.net"
                                className="inline-block mt-12 text-black hover:underline bg-pink-300 px-8 rounded-full">Get Premium Family</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Subcription;