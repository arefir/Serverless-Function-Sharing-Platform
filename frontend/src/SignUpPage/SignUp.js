import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Signing up with:', { name, email, password });
      navigate('/');
    };

    return (
       <header className="page-signup">
        <div className="signup-content">
            <form onSubmit={handleSubmit} className="signup-form">
            <h2>Create an Account</h2>
           
            <p>Name</p>
            <input 
            type="Name" 
            placeholder="Name" 
            value={name} 
            onChange={handleNameChange} 
            required 
            />
            
            <p>Email</p>
            <input 
            type="email" 
            placeholder="mail@abc.com" 
            value={email} 
            onChange={handleEmailChange} 
            required 
            />
            
            <p>Password</p>
            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
            />

            <button type="submit" className="signup-button">Sign Up</button>
            <div className="log-in">
              Already have an account? <a href="/">Log In</a>
            </div>

           </form>
        </div>
      </header>
    );
}

export default SignUp;