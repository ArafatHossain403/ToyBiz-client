import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        const photoUrl =form.photoUrl.value;

        console.log(name,email, photoUrl)

        createUser (email, password, )
        .then(result => {
            const user = result.user;
            console.log(user)

        })
        .catch(error => console.log(error))
        



    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center mt-4">Sign Up</h1>
              <form onSubmit={handleSignUp} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
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
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-accent" type="button" value="Sign Up" />
              </div>
              </form>
              <div>
                  Have an account?{" "}
                  <Link className="text-blue-600" to="/login">
                    Login
                  </Link>
                </div>
              
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;