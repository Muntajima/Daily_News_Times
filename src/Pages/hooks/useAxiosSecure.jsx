import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://news-times-server.vercel.app'
})

const useAxiosSecure = () => {
    const {userLogout} = useContext(AuthContext);
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        console.log("status error in interceptor", status);
        if(status === 401 || status === 403){
            await userLogout();
            navigate('/signin');
        }
        return Promise.reject(error);
    })
        return axiosSecure;
};

export default useAxiosSecure;