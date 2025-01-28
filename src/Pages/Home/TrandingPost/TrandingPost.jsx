import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrandingPost = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://news-times-server.vercel.app/news')
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
                                <Link to={`/news/${items._id}`}><button className="btn btn-ghost text-sm">View Detail</button></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <Link to={'/allnews'}><button className="btn btn-ghost text-sm">See All News</button></Link>
        </div>
    );
};

export default TrandingPost;