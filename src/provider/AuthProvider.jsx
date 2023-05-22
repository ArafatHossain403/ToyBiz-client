import { createContext} from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


 export const AuthContext = createContext(null);
const auth =getAuth(app);

const AuthProvider = ({children}) => {
    const user =null;
    // const [user,setUser] = useState(null);
    const createUser=(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // useEffect(()=>{
    //     onAuthStateChanged(auth, loggedUser => {
    //      console.log('logged in user', loggedUser);
    //      setUser(loggedUser);
    //     }) 
    // },[])

    const authInfo = {
        user,
        createUser,
        signIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;