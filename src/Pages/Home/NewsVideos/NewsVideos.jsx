
const NewsVideos = () => {
    return (
        <div>
            <div className="text-center font-bold">
                <h2 className="text-3xl p-4">Latest News Videos</h2>
                <p className="text-gray-700">Find out our latest articles, analyses, and reports of international affairs.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2 pt-4">
            <div className="card bg-base-100 w-310 shadow-xl">
                <figure>
                    <iframe width="310" height="174" src="https://www.youtube.com/embed/oqcCQjPNGBE" title="জুলাই হত্যাকাণ্ড: ভয়ংকর তথ্য উঠে এলো জাতিসংঘের প্রতিবেদনে" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">July killings: UN report reveals shocking findings</h2>
                    <p>UN rights commission also finds systematic abuse by former ministers, Awami League leaders, and law enforcement agencies.</p>
                    
                </div>
            </div>
            <div className="card bg-base-100 w-310 shadow-xl">
                <figure>
                    <iframe width="310" height="174" src="https://www.youtube.com/embed/jh2q0ejXDxg" title="দিনভর ‘আয়নাঘর’ নিয়ে যা যা হলো, জানা গেল সরকারের পরিকল্পনা" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Aynaghar' finally uncovered, but what now?</h2>
                    <p>After much discussion and criticism, Yunus visited the Aynaghars or torture cells</p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-310 shadow-xl">
                <figure>
                    <iframe width="310" height="174" src="https://www.youtube.com/embed/0PutIYTR54M" title="গাজীপুরে বৈষম্যবিরোধী ছাত্রদের সমাবেশ থেকে আওয়ামী লীগ নেতাদের সম্পত্তি জব্দ করার দাবি" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">We must eliminate criminals from Bangladesh: Sarjis</h2>
                    <p>Sarjis Alam, a key coordinator of Anti-Discrimination Student Movement, today called for a crackdown on terrorism in the country.</p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-310 shadow-xl">
                <figure>
                    <iframe width="310" height="174" src="https://www.youtube.com/embed/cCLpDHZjfMk" title="ডিপসিক কি ওপেনএআই এর বড় প্রতিদ্বন্দ্বী হয়ে উঠবে?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Will DeepSeek become a major competitor to OpenAI?</h2>
                    <p>The competition in the world of artificial intelligence, or AI, is getting more intense day by day.</p>
                    
                </div>
            </div>

        </div>
        </div>
    );
};

export default NewsVideos;