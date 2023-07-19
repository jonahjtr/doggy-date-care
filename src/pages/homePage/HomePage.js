import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar";
import DogProfileCard from "../../components/dog-profile-card/DogProfileCard";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-navbar">
        <NavBar />
      </header>
      <body className="homepage-body">
        <aside className="left-homepage"> </aside>
        <main className="middle-homepage">
          <DogProfileCard name={"Courage Tillman"} nickName={`"Courage"`} />
          <DogProfileCard name={"Harley Tillman"} nickName={`"Harey"`} />
          <DogProfileCard name={"Random Dog"} nickName={`"dude"`} />
          <DogProfileCard />
          <DogProfileCard />
          <DogProfileCard />
          <DogProfileCard />
          <DogProfileCard />
          <DogProfileCard />
        </main>
        <aside className="right-homepage"></aside>
      </body>
    </div>
  );
};

export default HomePage;
