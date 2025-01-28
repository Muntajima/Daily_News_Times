import { Parallax } from "react-parallax";
import HomeNewsCard from "../AllNews/HomeNewsCard";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Plan = () => {
    return (
        <div className="ml-4">
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">Your Favourite Plans</h2>
            <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={"https://i.ibb.co.com/TMz8GTt/bg.jpg"}
        bgImageAlt="the dog"
        strength={-200}
    >
                <div className="hero h-[300px]">
                    <div className="text-left">
                        <div className="max-w-md text-zinc-700">
                            <h1 className="text-3xl font-bold pb-2">Choose a best option</h1>
                            <ul className="list-disc">
                                <Slide direction="left"><li>Access to a few articles per month </li></Slide>

                                <Slide direction="left" delay={1000}><li>Unlimited access to daily news articles.</li></Slide>

                                <Slide direction="left" delay={1300}><li>Ad-free experience.</li></Slide>

                                <Slide direction="left" delay={1600}><li>Early access to breaking news.</li></Slide>

                                <Slide direction="left" delay={1900}><li>E-newspaper download (PDF version of the print).</li></Slide>
                            </ul>
                            <Link to='/subcription'><button className="btn bg-white mt-4 btn-ghost">Start Your Plan</button></Link>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div >
    );
};

export default Plan;