import { useContext, useRef } from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  
  const handleClick =(e) => {
    e.preventDefault();
    // console.log(email.current.value);
    loginCall({email: email.current.value ,password: password.current.value },
       dispatch
    );
  };
  console.log(user);
    return (
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Fawad Social</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on Fawadsocial.
                </span>
            </div>
            <form className="loginRight" onSubmit={handleClick}>
                <div className="loginBox">
                  <input placeholder="Email" type="email" required
                  className="loginInput" 
                   ref={email}/>

                  <input placeholder="Password" type="password" 
                  minLength={5} required
                  className="loginInput"
                   ref={password} />
                   <button className="loginButton">{isFetching ? "loading" :"Log In"}</button>
                   <span className="loginForgot">Forgot Password?</span>
                   <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </form>
          </div>
        </div>
    )
}


