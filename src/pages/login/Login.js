import { Link } from "react-router-dom";
import doggy from "../../media/landing-page-picture.jpg";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="landing-page">
        <div className="left-side">
          <img className="left-side-photo" src={doggy} alt="doggo" />
        </div>
        <div className="right-side">
          <div className="logo"> logo goes here</div>
          <div className="form">
            <div>Log in!</div>
            <form>
              <label>Email:</label>
              <input type="text" />
              <label>Password:</label>
              <input type="text" />
              <button>Login</button>
            </form>
          </div>
          <div className="login-link">
            Dont have an account? <Link to={"/login"}>CreateAccount</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
