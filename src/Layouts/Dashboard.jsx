import { FaHome, FaNewspaper, FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-emerald-600">
                <ul className="menu p-4 text-white space-y-2">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home' className={({ isActive }) =>
                                isActive ? "text-emerald-300 font-bold" : ""
                            }><FaHome/> Home</NavLink></li>
                            <li><NavLink to='/dashboard/alluser' className={({ isActive }) =>
                                isActive ? "text-emerald-300 font-bold" : ""
                            }><FaUser></FaUser> All User</NavLink></li>
                            <li><NavLink to="/dashboard/all-articles" className={({ isActive }) =>
                                isActive ? "text-emerald-300 font-bold" : ""
                            }><FaNewspaper></FaNewspaper> All Article</NavLink></li>
                            <li><NavLink to='/dashboard/publishers' className={({ isActive }) =>
                                isActive ? "text-emerald-300 font-bold" : ""
                            }><FaPeopleGroup></FaPeopleGroup> All Publishers</NavLink></li>
                        </> :
                            <>
                            </>
                    }
                </ul>
            </div>


            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;