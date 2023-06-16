// import { useContext } from "react";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../../firebase/firebase.config";



const SocialLogin = () => {
    // const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const auth =getAuth(app);
    const provider =new GoogleAuthProvider();

    const from = location.state?.from?.pathname || "/";
   
    
    const handleGoogleSignIn =()=> {
        signInWithPopup(auth, provider)
        .then(result =>{
            const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://toybiz-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
            
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
        })
        .catch(error=>{
            console.log(error.message)
        })


    }

    return (
        <div>
            <div className="divider"></div>
            <div className=" text-center my-3">
             
                <button onClick={handleGoogleSignIn} to={'/'} className="btn btn-warning w-1/2 text-green-700 font-extrabold"> <FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;