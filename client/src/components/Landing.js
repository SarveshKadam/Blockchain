import React from 'react'
import {Link} from "react-router-dom";
import './style/Form.css'
import logo from "../utils/img/logo.png";

function Landing() {

    return (
        <div className="wrapper">    
        <div className="form">
        <img src={logo} />
        <h1>Welcome to Blockchain</h1>
        <Link className="authbutton nav" to="/signup">New User</Link> <br />
        <Link className="authbutton nav" to="/login">Existing User</Link>
        </div>
    </div>
    )
}

export default Landing
