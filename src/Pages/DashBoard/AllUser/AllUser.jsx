/* eslint-disable react/jsx-key */
import { QueryClient, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = async (userId) => {
        try {
            await axiosSecure.patch(`/users/${userId}/make-admin`);
            toast("User successfully made an admin!");
            QueryClient.invalidateQueries({queryKey: ['users']})
        } 
        catch (error) {
            console.error("Error making user admin:", error);
        }
    }
    return (
        <div>
            <h2 className='text-5xl text-center underline my-12'>Manage All Users</h2>
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div>
                
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                {
                                    users.map(user => 
                                        <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user.photoURL}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                        {user.role === "admin" ? (
                                        <span className="text-emerald-600 font-semibold btn-ghost px-8 py-2 rounded-lg">Admin</span>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user._id)}
                                            className="btn bg-emerald-600 text-sm text-white btn-sm"
                                            value={user.role}
                                        >
                                            Make Admin
                                        </button>
                                    )}
                                        </td>
                                    </tr>

                                </tbody>
                                    )
                                }
                                
                            </table>
                        </div>
                    
                


            </div>
        </div>
    );
};

export default AllUser;