

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
                                src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
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
                                src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
                                alt="animated_card"
                                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                            />
                            <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Premium Duo</h2>
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
                                src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
                                alt="animated_card"
                                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                            />
                            <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Premium Family</h2>
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


            </div>
        </div>
    );
};

export default Subcription;