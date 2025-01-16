import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TrandingPost from "../TrandingPost/TrandingPost";

const HomeNewsCard = () => {
    // const {_id, title, category, description, image, date, author} = items;

    return (
        <div>
            <div className="flex gap-4 h-[650px]">
            <Carousel autoPlay={true} className="pt-12">
                {/* //slide 1       */}
                <div
                    className="sm:w-[80%] lg:w-[100%] h-[450px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="https://i.ibb.co.com/WzhZXws/inter1.webp"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Global Leaders Meet to Address Climate Change</h1>
                        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">World leaders gathered for a summit to discuss urgent climate policies.</p>
                        <button
                            className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                {/* //slide 2       */}
                <div
                    className="w-full sm:w-[80%] lg:w-[100%] h-[450px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="https://i.ibb.co.com/YWYXtc9/inter2.jpg"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Breakthrough in Peace Talks Between Nations.</h1>
                        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">After years of tension, two nations reached a significant agreement.</p>
                        <button
                            className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                {/* //slide 3      */}
                <div
                    className="w-full sm:w-[80%] lg:w-[100%] h-[450px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="https://i.ibb.co.com/zVqZN58/busi1.webp"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Tech Giant Acquires Start-Up in Billion-Dollar Deal</h1>
                        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">The acquisition is set to revolutionize the industry.</p>
                        <button
                            className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                {/* //slide 4     */}
                <div
                    className="w-full sm:w-[80%] lg:w-[100%] h-[450px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="https://i.ibb.co.com/qJSMc1y/politc2.jpg"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Election Campaigns Heat Up as Polls Near</h1>
                        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">Candidates are ramping up their efforts to win public support.</p>
                        <button
                            className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                {/* //slide 5     */}
                <div
                    className="w-full sm:w-[80%] lg:w-[100%] h-[450px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="https://i.ibb.co.com/3s3K8L0/banner-Env.webp"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Rising Sea Levels Threaten Coastal Cities</h1>
                        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">Scientists warn of urgent action to address climate risks.</p>
                        <button
                            className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                {/* //slide 6     */}
                <div
                    className="w-full sm:w-[80%] lg:w-[100%] h-[450px] relative overflow-hidden group cursor-pointer rounded-md">

                    {/*  image  */}
                    <img
                        src="https://i.ibb.co.com/gPZZLGB/sport2.jpg"
                        className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700" />

                    {/*  text  */}
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">Upcoming Olympics Expected to Break Records</h1>
                        <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">Athletes worldwide prepare for the biggest stage in sports.</p>
                        <button
                            className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                            Details
                        </button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>



            </Carousel>
            <div className="hidden lg:block">
                <TrandingPost />
            </div>

        </div>
        <div className="divider my-0 py-0"></div>
        </div>
    );
};

export default HomeNewsCard;