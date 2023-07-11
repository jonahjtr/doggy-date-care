import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="Landing-page">
      <ul>
        <li>
          {" "}
          <Link to="/login">Login</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/create-account">create account</Link>
        </li>
        <li> </li>
      </ul>
    </div>
  );
}

export default LandingPage;
