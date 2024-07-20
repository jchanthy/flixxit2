import { Link } from "react-router-dom";
// import Header from "../header/Header.js";

const Signup =() => {
    return (
        <>
            {/* <Header /> */}
            {/* Login Block */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                                <Link to="/login" className="link link-hover">Login</Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </>
    
    );
}

export default Signup;