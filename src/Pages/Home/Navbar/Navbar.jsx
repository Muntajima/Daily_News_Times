import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/Images/logonews.jpg'
import name from '../../../assets/Images/DailyNewsTimes.png'
import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import AuthContext from "../../../Context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);
    const [theme, setTheme] = useState('light')
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme)
    }, [theme])

    const handleLogout = () => {
        userLogout()
            .then(() => {
                toast.success("Successfully sign out.");
            })
            .catch(error => {
                toast("Failed to logout. Stay with us.")
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to='/' className='btn mr-2'>Home</NavLink></li>
        <li><NavLink to='/add-article' className='btn mr-2'>Add Articles</NavLink></li>
        <NavLink to={'/allnews'} className='btn mr-2'>All Articles</NavLink>
        <NavLink to={'/category'} className='btn mr-2'>Subcription</NavLink>
        <NavLink to={'/dashboard'} className='btn mr-2'>Dashboard</NavLink>
        {
            user && <>
            <li><NavLink to='/premium-article' className='btn mr-2'>Premium Article</NavLink></li>
            <li><NavLink to='/my-profile' className='btn mr-2'>MyProfile</NavLink></li>
            </> 
            
           

        }
    </>

    return (
        <div>
            <div className="max-w-7xl mx-auto navbar bg-base-100 fixed z-10 top-0">
                <div className="navbar-start">
                    <ul className="flex gap-2">
                        <li><a href=""><FaFacebook /></a></li>
                        <li><a href=""><FaGithub /></a></li>
                        <li><a href=""><FaLinkedin /></a></li>
                    </ul>

                </div>
                <div className="navbar-center">
                    <img src={name} className="w-72" />
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <Link to='/contact-us'><FaPhone /></Link>
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto navbar bg-base-100 border-b fixed z-10 top-16 start-">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src={logo} className="w-12 h-9" />
                        <Link to='/'>
                            <a className="btn btn-ghost text-2xl">Daily News Times</a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                    {user &&
          <div className="text-black pr-2 relative group">
            <img
              src={user?.photoURL}
              className='w-10 h-10 rounded-full cursor-pointer'
              
            />
            <div className="absolute bottom-1 right-12 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {user?.name || "No Display Name"}
            </div>

          </div>
        }
                    </div>
                    

                    {
                        user ? <>
                            <button onClick={handleLogout} className="btn mr-6">Logout</button>
                        </>
                            :
                            <>
                                <Link to='/signin'>
                                    <button className="btn mr-8">SignIn</button>
                                </Link>
                                <Link to='/signup'><button className="btn btn-ghost">SignUp</button></Link>
                            </>
                    }

                    <div>
                        <input onClick={handleTheme} type="checkbox" className="toggle mr-8" defaultChecked />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;