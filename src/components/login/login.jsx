import React from "react";
import "./login.css";
import Logo from "../../Images/Logo.png";
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
      <section className="login">
        <form className="login-form">
          <div className="img-container">
            <h2 className="title-logo">Informed Perspective - Login</h2>
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          <div className="form-details">
            <div className="email-details">
              <label className="email-lbl">Email</label>
              <input
                type="email"
                className="email-input"
                required
                placeholder="enter your email"
              />
            </div>

            <div className="email-details">
              <label className="email-lbl">Password</label>

              <input
                type="password"
                className="email-input"
                required
                placeholder="enter your password"
              />
            </div>

            <div className="button-div">
              <Link to='/dashboard'><button className="login-btn">Login</button></Link>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
