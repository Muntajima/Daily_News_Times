/* eslint-disable react/prop-types */
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;