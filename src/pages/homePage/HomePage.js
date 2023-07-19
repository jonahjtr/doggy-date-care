import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-navbar">
        <NavBar />
      </header>
      <body className="homepage-body">
        <aside className="left-homepage"> left</aside>
        <main className="middle-homepage">main</main>
        <aside className="right-homepage">right</aside>
      </body>
    </div>
  );
};

export default HomePage;
