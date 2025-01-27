/* eslint-disable react/prop-types */
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRouter = ({ children }) => {
    const { user, loading, isAdmin } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRouter;