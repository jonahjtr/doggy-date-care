import { Link } from "react-router-dom";
import doggy from "../../media/landing-page-picture.jpg";
import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="landing-page">
      <div className="left-side">
        <img className="left-side-photo" src={doggy} alt="doggo" />
      </div>
      <div className="right-side">
        <div className="logo"> logo goes here</div>
        <div className="form"> form goes here</div>
        <div className="login-link">
          already have an account? <Link to={"/login"}>login</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
