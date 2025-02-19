import { Link } from "react-router-dom";

const Newsletter = () => {
    return (
        <div className="bg-gradient-to-r from-blue-300 via-blue-600 to-gray-800 text-white text-center py-24 rounded-lg shadow-lg my-4">
            <h2 className="text-4xl font-bold">Join our newsletter to stay up to date on the latest news.</h2>
            <Link to='/up-to-date'><button className="btn bg-blue-200 text-gray-700 mt-4 btn-ghost">Subscribe</button></Link>
        </div>
        // link of detail--https://www.sita.aero/pressroom/news-releases/managing-lost-items-on-aircraft-no-longer-a-million-dollar-headache-with-worldtracer-lost-and-found-property/
    );
};

export default Newsletter;