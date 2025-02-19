import Marquee from "react-fast-marquee";

const NewsCategory = () => {
    return (
        <div>
            <Marquee autoFill={true} className="pt-12">
                <h3 className="mr-12 border-2 border-black w-44 text-center px-8 py-2">International</h3>
                <h3 className="mr-12 border-2 border-black w-44 text-center py-2">Business</h3>
                <h3 className="mr-12 border-2 border-black w-44 px-8 py-2 text-center">Politics</h3>
                <h3 className="mr-12 border-2 border-black w-44 px-8 py-2 text-center">Fashion</h3>
                <h3 className="mr-12 border-2 border-black  w-44 px-8 py-2 text-center">Medical</h3>
                <h3 className="mr-12 border-2 border-black w-44 px-8 py-2 text-center">Sports</h3>
                <h3 className="mr-12 border-2 border-black w-44 px-8 py-2 text-center">Entertainments</h3>
                <h3 className="mr-12 border-2 border-black w-44 px-8 py-2 text-center">Life & Living</h3>
                <h3 className="mr-12 border-2 border-black w-44 px-8 py-2 text-center">Media</h3>
            </Marquee>
        </div>
    );
};

export default NewsCategory;