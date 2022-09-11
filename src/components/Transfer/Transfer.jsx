import React from "react";
import { Section } from "./TransferStyle";
import { data } from "./TransferData";
import avater from "../../assets/images/avater.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
const Transfer = () => {
  return (
    <Section>
      <div className="title">
        <h1>Your Tranfer</h1>
      </div>
      <div className="transferInfo">
        {data.map((d, i) => {
          return (
            <div className="transfer_details">
              <div className="transfer_details_title">
                <img src={avater} alt="Avater" />
                <div className="heading">
                  <h3>{d.first}</h3>
                  <h6>{d.date}</h6>
                </div>
              </div>
              <div className="amount">
                <span>{d.ammount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="view">
        <h3>View all</h3>
        <HiArrowNarrowRight />
      </div>
    </Section>
  );
};

export default Transfer;
