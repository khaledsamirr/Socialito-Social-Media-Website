import { useRef } from "react";
import "./login.css"

export default function Login() {
    const email=useRef();
    const password=useRef();
    const handleClick=(e)=>{
        e.preventDefault();

    }
    return (
        <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Socialito</h3>
                <span className="loginDesc">
                    Connect with the world around you on Socialito. 
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" required className="loginInput" ref={email}/>
                    <input placeholder="Password" required minLength="6" type="password" className="loginInput" ref={password}/>
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>

            </div>
        </div>
        
    </div>
    )
}
