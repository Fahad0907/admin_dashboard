import React from "react";
import { Section } from "./AnalyticsStyle";
import { BsCalendar2Week } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { Fade } from "react-reveal";
const Analytics = () => {
  return (
    <Fade bottom>
      <Section>
        <div className="analytics">
          <div className="content">
            <h5>Spent this month</h5>
            <h2>$1050.50</h2>
          </div>
          <div className="logo">
            <BsCalendar2Week />
          </div>
        </div>
        <div className="analytics">
          <div className="logo">
            <IoStatsChart />
          </div>
          <div className="content">
            <h5>Earnings</h5>
            <h2>$560.30</h2>
          </div>
        </div>

        <div className="analytics">
          <div className="logo">
            <IoPeopleOutline />
          </div>
          <div className="content">
            <h5>New Clients</h5>
            <h2>201</h2>
          </div>
        </div>

        <div className="analytics">
          <div className="content">
            <h5>Activity</h5>
            <h2>$406.80</h2>
          </div>
          <div className="logo">
            <FiActivity />
          </div>
        </div>
      </Section>
    </Fade>
  );
};

export default Analytics;
