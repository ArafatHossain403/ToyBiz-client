import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Helmet } from "react-helmet";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
    
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const auth =getAuth(app);
    const provider =new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
                navigate(from, {state:{from: location}});
            })
    }

 

    return (
        <>
            <Helmet>
                <title>ToyBiz | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex">
                    <div className="text-center  lg:text-left">
                        <h1 className="text-4xl font-bold"> Please Login </h1>
                        
                    </div>
                    <div className="card  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                
                            </div>
                            
                            
                            <div className="form-control mt-6">
                                <input  className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center font-bold'><small>Do not have an account? <Link className='text-green-600' to="/signup"> Signup</Link> </small></p>
                       <SocialLogin  onClick={handleGoogleSignIn}></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;