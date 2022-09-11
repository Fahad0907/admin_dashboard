import React from "react";
import { Section } from "./DashboardStyle";
import Navbar from "../Navbar/Navbar";
import Analytics from "../Analytics/Analytics";
import FAQ from "../FAQ/FAQ";
import Earning from "../Earning/Earning";
import Transfer from "../Transfer/Transfer";
import Profile from "../Profile/Profile";
import { Fade } from "react-reveal";
const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <Fade bottom>
          <div className="row__two">
            <Earning />
            <Transfer />
            <Profile />
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default Dashboard;
