import Marquee from "react-fast-marquee";

const NewsCategory = () => {
    return (
        <div>
            <Marquee autoFill={true} className="pt-12">
                <h3 className="font-semibold mr-4 w-36 text-center px-4">International</h3>
                <h3 className="font-semibold mr-4 w-36 text-center px-4">Business</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Politics</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Fashion</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Medical</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Sports</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Entertainments</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Life & Living</h3>
                <h3 className="font-semibold mr-4 w-36 px-4 text-center">Media</h3>
            </Marquee>
        </div>
    );
};

export default NewsCategory;