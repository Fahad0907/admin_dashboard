import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { Section } from "./FAQstyle";
import { Fade } from "react-reveal";
const FAQ = () => {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and get good marks for trips",
    },
    {
      icon: <MdTimelapse />,
      text: "How to regulate transactions over time",
    },
    {
      icon: <IoMdCash />,
      text: "Withdrawing money through an ATM",
    },
  ];
  return (
    <Fade bottom>
      <Section>
        <div className="title">
          <h2>Tips and Tricks for Drivers</h2>
        </div>
        <div className="faqs">
          {faqs.map((faq, i) => {
            return (
              <div className="faq">
                <div className="info">
                  {faq.icon}
                  <h4>{faq.text}</h4>
                </div>
                <IoIosArrowForward />
              </div>
            );
          })}
        </div>
      </Section>
    </Fade>
  );
};

export default FAQ;
