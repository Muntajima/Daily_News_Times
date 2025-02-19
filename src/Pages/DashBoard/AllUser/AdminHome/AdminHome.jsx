import { useContext } from "react";
import AuthContext from "../../../../Context/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaNewspaper, FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Statistic from "./Statistic";


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    
    const { refetch, data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
            
        }
    })
    refetch();
    return (
        <div>
            <div className="bg-green-300 flex justify-between px-4"> 
            <h2 className="text-3xl pl-8 pt-8">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : "Back"
                }
            </h2>
            <div className="flex gap-4 justify-center items-center">
                <img src={user.photoURL} className="w-28 h-28 my-4 rounded-full" />
                <div className="font-semibold">
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                </div>
            </div>
            </div>
            <div className="lg:flex justify-evenly pt-8">
                <div className="stats shadow bg-gradient-to-r from-blue-200 via-purple-400 to-pink-500 text-white w-[240px]">
                    <div className="stat text-center">
                        <div className="stat-title flex justify-center items-center gap-4 text-white font-bold text-xl">Total News <FaNewspaper/></div>
                        <div className="stat-value">{stats.news || 0}</div>
                        <div className="stat-desc text-white">42% more than last month</div>
                    </div>
                </div>

                <div className="stats shadow bg-gradient-to-r from-yellow-100 via-green-400 to-slate-700 text-white w-[240px]">
                    <div className="stat text-center">
                        <div className="stat-title flex justify-center items-center gap-4 font-bold text-xl text-white">Total Users <FaUser/></div>
                        <div className="stat-value">{stats.users || 0}</div>
                        <div className="stat-desc text-white">30% more than last month</div>
                    </div>
                </div>

                <div className="stats shadow bg-gradient-to-r from-yellow-200 via-orange-500 to-red-500 text-white">
                    <div className="stat text-center">
                        <div className="stat-title flex justify-center items-center gap-4 text-white font-bold text-xl">Total Publishers <FaPeopleGroup/></div>
                        <div className="stat-value">{stats.publishers || 0}</div>
                        <div className="stat-desc text-white">70% more than last month</div>
                    </div>
                </div>
            </div>
             <Statistic/>
            {/*<LineChart/> */}
        </div>
    );
};

export default AdminHome;