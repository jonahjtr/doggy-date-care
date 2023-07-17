import { useState } from "react";
import "./CreateAccount.css";
import dog from "../../media/create-account-page-picture.jpg";

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

    console.log("Submitted:");
  };
  return (
    <div className="create-account-page">
      <div className="create-account-left-side">
        <header className="logo-create-account">logo here</header>
        <main className="form-create-account-card">
          <div className="create-account-title">Create account here!</div>
          <form className="form-create-account" onSubmit={handleSubmit}>
            <div className="input-create-account">
              <label htmlFor="first-name">First name:</label>
              <input
                type="text"
                id="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-create-account">
              <label htmlFor="last-name">Last name:</label>
              <input
                type="text"
                id="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-create-account">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-create-account">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-create-account">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-create-account">
              <label htmlFor="confirm password">Confirm password:</label>
              <input
                type="password"
                id=" confirm password"
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
              />
              <div className="input-create-account-button-checkbox">
                <input
                  type="checkbox"
                  id="saveLoginInfo"
                  checked={saveLoginInfo}
                  onChange={(e) => setSaveLoginInfo(e.target.checked)}
                />
                <label htmlFor="saveLoginInfo">Save my login info</label>
              </div>
            </div>
            <div className="input-create-account-button-submit">
              <button classname="submit-button" type="submit">
                CreateAccount
              </button>
            </div>
          </form>
        </main>
      </div>
      <section className="right-side-create-account">
        <img className="imgimg" src={dog} alt="dog" />
      </section>
    </div>
  );
}
export default CreateAccount;
