import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timer fired!'); 
            setShowModal(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubscription = () => {
        setShowModal(false);
        navigate('/subcription');
    };
    
    return (
        <div>
            <div className='relative'>
            {console.log('showModal:', showModal)}
                {/* Modal */}
                {showModal && (
                    
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-[1000]">
                    <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Exclusive Offer Just for You!</h2>
                        <p className="mb-4">Sign up for our subscription plan and enjoy amazing benefits!</p>
                        <button
                            onClick={handleSubscription}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Go to Subscription Page
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="block mt-4 text-white hover:text-black"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div >
    );
};

export default HomePage;