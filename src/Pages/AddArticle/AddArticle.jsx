import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";

const AddArticle = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddCampaign = event => {
        event.preventDefault();
    }

    return (
        <div className="pt-20">
            <h2 className='font-bold text-2xl text-center'>Add New Article</h2>
            <div>
                {
                    user ? <div>
                        <form onSubmit={handleAddCampaign}>
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Campaign Title</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="title" placeholder='campaign title' className='input input-bordered w-full' />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-8">
                        <label className="label">
                            <span className="label-text">Publisher</span>
                        </label>
                        <select
                            name="type"
                            className="select select-bordered w-full"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choose type
                            </option>
                            <option value="Medical">Prothom Aloo</option>
                            <option value="Business">The Daily News</option>
                            <option value="Environment">Dainik Amadershomoy</option>
                            <option value="Animal">Janakantha</option>
                        </select>
                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>tags</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="amount" placeholder='minimum amount' className='input input-bordered w-full' />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                    <label className='label'>
                            <span className='label-text'>Image</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="image" placeholder='photo url' className='input input-bordered w-full' />
                        </label>

                    </div>

                </div>

                <div className='mb-8'>
                    
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name="description" placeholder='description' className='input input-bordered w-full' />
                        </label>

                    </div>

                </div>

                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="name" placeholder='your name' 
                                defaultValue={user.displayName}
                                className='input input-bordered w-full' readOnly />
                        </label>

                    </div>
                    <div className='form-control md:w-1/2 ml-8'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <label className='input-group'>
                            <input type="text"
                                name="email" placeholder='email' 
                                defaultValue={user.email}
                                className='input input-bordered w-full'
                                readOnly />
                        </label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Add Article" className='btn btn-block bg-gray-700 text-white' />
                </div>
            </form>
                    </div> : 
                    <div><ErrorPage/></div>
                }
            </div>

        </div>
    );
};

export default AddArticle;