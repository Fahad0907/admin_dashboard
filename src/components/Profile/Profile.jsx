import React from "react";
import { Section } from "./ProfileStyle";
import avater from "../../assets/images/avater.jpg";
const Profile = () => {
  return (
    <Section>
      <div className="top">
        <div className="image">
          <img src={avater} alt="" />
        </div>
        <div className="title">
          <h1>Musafir Mohammad</h1>
          <h5>New York, USA</h5>
        </div>
        <div className="info">
          <div className="info_title">
            <h5>Days at work</h5>
            <h3>30</h3>
          </div>

          <div className="info_title">
            <h5>Rides</h5>
            <h3>560</h3>
          </div>

          <div className="info_title">
            <h5>Hours</h5>
            <h3>87</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Profile;
