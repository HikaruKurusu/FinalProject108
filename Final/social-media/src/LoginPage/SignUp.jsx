import React, { useReducer, useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { auth, provider} from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";



const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [displayName, setDisplayName] = useState('');
     const signUp = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential);
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: displayName,
      });
    
    }catch (error){
        console.error('Error signing up', error.message)

    }
};
  return (
    <div className="SignUp">
      <h1>Create Account</h1>
      <form onSubmit={signUp}>
        <div classname="form-group">
            <label className="label">Display Name</label>
            <input
                className="textInput"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />
        </div>
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
        <button className="signInButton" type="submit">Create Account</button>
      </form> 
    </div>
    
  );
};
export default SignUp;
