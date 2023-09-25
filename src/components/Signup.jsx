import React, {useState} from "react";
import "./Login.css";

const Signup = () => {
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"), 3000)
    }
    return (
        <div className = "cover">
            <h1>Signup</h1>
            <input type = "text" placeholder = "username" />
            <input type = "text" placeholder = "email" />
            <input type = "password" placeholder = "password" />

            <div className = "login-btn" onClick = {popup}>Signup</div>
            <p className = "text"> or signup using</p>
            <div className = "alt-login">
                <div className = "facebook"></div>
                <div className = "google"></div>
            </div>

            <div className = {popupStyle}>
                <h3>Login failed</h3>
                <p>Username or Password incorrect</p>
            </div>

        </div>
    )
}

export default Signup;