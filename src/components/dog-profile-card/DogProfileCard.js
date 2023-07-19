import React from "react";
import "./DogProfileCard.css";

const DogProfileCard = (props) => {
  return (
    <container className="dog-profile-card-container">
      <aside className="dpc-profile">
        <div className="dcp-profile-pic"></div>
      </aside>
      <aside className="dpc-information-section">
        <section className="dpc-main-information">
          <h1>{props.name}</h1>
          <h3>{props.nickname}</h3>
        </section>
        <section className="dpc-all-other-links-section">
          <container className="dpc-all-other-links-container">
            <div className="dpc-link-div">
              <a href="#" className="dpc-link">
                age
              </a>
            </div>
            <div className="dpc-link-div">
              <a href="#" onclick="return false;" className="dpc-link">
                breed info
              </a>
            </div>
            <div className="dpc-link-div">
              <a href="#" onclick="return false;" className="dpc-link">
                files
              </a>
            </div>
            <div className="dpc-link-div">
              <a href="#" onclick="return false;" className="dpc-link">
                pictures
              </a>
            </div>
            <div className="dpc-link-div">
              <a href="#" onclick="return false;" className="dpc-link">
                meds
              </a>
            </div>
            <div className="dpc-link-div">
              <a href="#" onclick="return false;" className="dpc-link">
                dates
              </a>
            </div>
          </container>
        </section>
      </aside>
    </container>
  );
};

export default DogProfileCard;
