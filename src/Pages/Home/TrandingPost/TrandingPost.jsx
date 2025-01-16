import { useEffect, useState } from 'react';

const TrandingPost = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data.slice(0, 3))
                //console.log(data)
            })
    }, [])
    return (
        <div className='pt-12 h-[900px]'>
            <h2 className='text-2xl font-bold text-center pb-4'>Tranding News</h2>
            {
                news.map(items => <div key={items._id} className='mb-2'>
                    <div
                        className="hero w-64 h-40"
                        style={{
                            backgroundImage: `url(${items.image})`,
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-xl font-bold">{items.title}</h1>
                                <button className="btn btn-ghost text-sm">View Detail</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <button className="btn btn-ghost text-sm">See All News</button>
        </div>
    );
};

export default TrandingPost;