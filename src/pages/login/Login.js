import { Link } from "react-router-dom";
import doggy from "../../media/landing-page-picture.jpg";
import "./Login.css";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveLoginInfo, setSaveLoginInfo] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using email and password values
    console.log("Submitted:", email, password);
  };

  return (
    <div>
      <div className="landing-page">
        <div className="left-side">
          <img className="left-side-photo" src={doggy} alt="doggo" />
        </div>
        <div className="right-side">
          <div className="logo"> logo goes here</div>
          <div className="form-section">
            <div className="form-card-login">
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-title-login">Log in!</div>
                <div className="inputs">
                  <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-group-login checkbox-group">
                    <input
                      className="checkbox-input"
                      type="checkbox"
                      id="saveLoginInfo"
                      checked={saveLoginInfo}
                      onChange={(e) => setSaveLoginInfo(e.target.checked)}
                    />
                    <label htmlFor="saveLoginInfo">Save my login info</label>
                  </div>
                  <div className="input-group-login">
                    {" "}
                    <button className="submit-button" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="login-link">
            <h1>Dont have an account?</h1>
            <Link className="link" to={"/create-account"}>
              {" "}
              CreateAccount
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
