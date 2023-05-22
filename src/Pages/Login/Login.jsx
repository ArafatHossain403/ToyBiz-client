// import { Link } from "react-router-dom";
// import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import app from "../../firebase/firebase.config";
// // import { useState } from "react";

import { Link } from "react-router-dom";

 const Login = () => {
      
//     const auth =getAuth(app);
//     const provider =new GoogleAuthProvider();

//     const handleGoogleSignIn =()=> {
//         signInWithPopup(auth, provider)
//         .then(result =>{
//             const user = result.user;
//             console.log(user)
//         })
//         .catch(error=>{
//             console.log(error.message)
//         })


//     }

//     // const [regError, setError]=  useState('');
//     // const [success, setSuccess]=  useState('');
//     const handleSignIn = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signInWithEmailAndPassword(auth, email, password)
//         .then(result =>{
//             const loggedUser = result.user;
//             // setSuccess('user login successful');
//             // setError('');
//             event.target.reset();
//             console.log(loggedUser);

//         })
//         .catch(error=>{
//             console.log(error)
//             // setError(error.message)
//         })
         
//     } onSubmit={handleSignIn}


  return (
    
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center mt-4 text-green">Login now</h1>
              <form action="" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-accent" type="button" value="Login" />
              </div>
              </form>
              <div>
                  Do not have an account?{" "}
                  <Link className="text-blue-600" to="/signUp">
                    SignUp
                  </Link>
                </div>
              
              <div className="form-control mt-6">
                <button  className="btn btn-warning">Login With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Login;
