/* eslint-disable react/jsx-key */
import { QueryClient, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
// import {
//     Pagination,
//     PaginationContent,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
//   } from "@/components/ui/pagination"

import { useState } from "react";


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
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
            QueryClient.invalidateQueries({ queryKey: ['users'] })
        }
        catch (error) {
            console.error("Error making user admin:", error);
        }
    }

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                            currentUsers.map(user =>
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
                                                            alt="" />
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
{/* 
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                />
                            </PaginationItem>
                            {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, index) => (
                                <PaginationItem key={index + 1}>
                                    <PaginationLink
                                        href="#"
                                        onClick={() => paginate(index + 1)}
                                        className={currentPage === index + 1 ? "bg-blue-500 text-white" : ""}
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination> */}
                </div>




            </div>
        </div>
    );
};

export default AllUser;