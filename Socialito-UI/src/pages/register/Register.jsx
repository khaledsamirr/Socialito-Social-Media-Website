import "./register.css"

export default function Register() {
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
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
             
                    <button className="loginRegisterButton">Log Into Account</button>
                </div>

            </div>
        </div>
        
    </div>
    )
}
