import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timer fired!'); 
            setShowModal(true);
        }, 1000);

        document.body.style.overflow = showModal ? 'hidden' : 'auto';
        return () => clearTimeout(timer);
    }, []);

    const handleSubscription = () => {
        navigate('/subcription');
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div>
            <div>
            {console.log('showModal:', showModal)}
                {/* Modal */}
                {showModal && (
                    
                    <div
                    className="modal modal-bottom sm:modal-middle"
                    onClick={closeModal} // Close modal when clicking outside
                >
                    <div
                        className="modal-content p-6 bg-white rounded-lg w-96"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                    >
                        <h2 className="text-xl font-bold mb-4">Exclusive Offer Just for You!</h2>
                        <p className="mb-4">Sign up for our subscription plan and enjoy amazing benefits!</p>
                        <button
                            onClick={handleSubscription}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Go to Subscription Page
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div >
    );
};

export default HomePage;