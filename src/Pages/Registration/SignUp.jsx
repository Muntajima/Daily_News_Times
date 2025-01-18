import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import registerLottie from '../../assets/Lotties/register.json'
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import ErrorPage from "../Error/ErrorPage";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SignUp = () => {
    const style = {
        height: 500,
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const axiosPublic = useAxiosPublic();
    const {
        createUser,
        googleLogin,
        setUser,
        updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!passwordRegex.test(password)) {
            //setError(false);
            toast.error("Must have an uppercase, a lowercase, and atleast six characters.")
            return;
        }
        else {
            Swal.fire({
                title: "Ragistration!",
                text: "Successful",
                icon: "success"
            });
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(result.user);

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        const userInfo = {
                            name: name,
                            email: email,
                            photoURL: photo,
                            password: password
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res =>{
                            if(res.data.insertedId){
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Successfully registered',
                                    icon: 'success',
                                    confirmButtonText: 'Cool',
                                });
                            }
                        })
                        navigate('/');
                    })
            })
            .catch(error => {
                console.log(error);
                <ErrorPage />
            })
        //const newUser = { name, email, photo, password };

        //send user to db
        // fetch('http://localhost:5000/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Successfully registered',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool',
        //             });
        //         }
        //     })
        //     .catch(error => {
        //         console.log('ERROR', error);
        //     })


    }
    return (
        <div className="hero bg-base-200 min-h-screen pt-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <p className="py-6">
                        <Lottie
                            animationData={registerLottie}
                            style={style}
                            loop={false}
                        ></Lottie>
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-14 mt-12 text-5xl font-bold">Register now!</h1>
                    <Link
                        onClick={googleLogin}
                        className='btn btn-outline w-2/3 bg-rose-900 text-white w-36 mx-auto my-8 font-semibold'><FcGoogle /> Google only</Link>
                    <p className="underline w-full font-semibold text-center">Or Continue with</p>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="your name"
                                name='name'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="email"
                                name='email'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="photo-url"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="password"
                                name='password'
                                className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold mb-4">
                        Already Have An Account ?{" "}
                        <Link className="text-red-800" to="/login">
                            Login
                        </Link>
                    </p>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;