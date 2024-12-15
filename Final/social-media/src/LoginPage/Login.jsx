import React, { useReducer, useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { auth, provider} from "../config/firebase";
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
     const login = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate("/feed")
        })
        .catch((error) => {
          console.log(error);
        });
     }
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <div className="form-group">
          <label className="label">Email:</label>
          <input 
            className="textInput" 
            name="username" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input 
            className="passwordInput" 
            type="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button className="signInButton" type="submit">Sign In</button>
      </form> 
    </div>
    
  );
};
export default Login;
