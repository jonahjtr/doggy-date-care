import { useState } from "react";
import "./CreateAccount.CSS";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [saveLoginInfo, setSaveLoginInfo] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using email and password values
    console.log("Submitted:");
  };
  return (
    <div className="create-account-page">
      <div className="create-account-card">
        <div className="title">Create account here!</div>
        <div className="form portion">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first name">first name:</label>
              <input
                type="text"
                id="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last name">last name:</label>
              <input
                type="text"
                id="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm password">confirm password:</label>
              <input
                type="password"
                id="confirm password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
              <div className="button-area">
                <button type="submit">CreateAccount</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
