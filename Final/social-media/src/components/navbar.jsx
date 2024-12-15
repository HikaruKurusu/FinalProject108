import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user]= useAuthState(auth);
    const signUserOut = async () =>{
        await signOut(auth);
    };
    return( 
    <div>
        <Link to="/feed"> Feed </Link>
        <Link to="/"> Login</Link>
        <Link to="/signUp"> SignUp</Link>
        <div>
            <p>{user?.displayName}</p>
            <button onClick={signUserOut}> Log Out </button>
        </div>
    </div>
    );
};