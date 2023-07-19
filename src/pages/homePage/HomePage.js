import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar";
import DogProfileCard from "../../components/dog-profile-card/DogProfileCard";
import sampleData from "../../files/files.js";
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-navbar">
        <NavBar />
      </header>
      <body className="homepage-body">
        <aside className="left-homepage"> </aside>
        <main className="middle-homepage">
          {sampleData.map((item) => (
            <DogProfileCard name={item.name} nickname={item.nickname} />
          ))}
        </main>
        <aside className="right-homepage"></aside>
      </body>
    </div>
  );
};

export default HomePage;
