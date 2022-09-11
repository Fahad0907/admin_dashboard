import React, { useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Section, ResponsiveSection } from "./SlidebarStyle";
import { Fade } from "react-reveal";

const Slidebar = () => {
  const [currentLink, setCurrentLink] = useState(0);
  const [slider, setSlider] = useState(false);
  const changeSlider = () => setSlider(!slider);
  return (
    <>
      <Section>
        <Fade left>
          <div className="top">
            <div className="brand">
              <FaTaxi />
              <span>MY TAXI</span>
            </div>
            <div className="toggle"></div>
            <div className="links">
              <ul>
                <li
                  onClick={() => setCurrentLink(1)}
                  className={currentLink === 1 ? "active" : ""}
                >
                  <a href="#">
                    <MdSpaceDashboard /> <span> Dashboard</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(2)}
                  className={currentLink === 2 ? "active" : ""}
                >
                  <a href="#">
                    <RiDashboard2Fill /> <span> Riders</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(3)}
                  className={currentLink === 3 ? "active" : ""}
                >
                  <a href="#">
                    <FaAddressCard /> <span> Payment Details</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(4)}
                  className={currentLink === 4 ? "active" : ""}
                >
                  <a href="#">
                    <GiTwirlCenter /> <span> Learning center</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(5)}
                  className={currentLink === 5 ? "active" : ""}
                >
                  <a href="#">
                    <BsFillChatTextFill /> <span> FAQ</span>
                  </a>
                </li>
                <li
                  onClick={() => setCurrentLink(6)}
                  className={currentLink === 6 ? "active" : ""}
                >
                  <a href="#">
                    <IoSettings /> <span> Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="logout">
            <a href="#">
              <FiLogOut /> <span className="logout"> Logout</span>
            </a>
          </div>
        </Fade>
      </Section>
      <ResponsiveSection>
        <div className="brand">
          <div>
            <FaTaxi />
            <span>MY TAXI</span>
          </div>
          <GiHamburgerMenu onClick={changeSlider} />
        </div>
        <div className={slider ? "link active" : "link"}>
          <ul>
            <li
              onClick={() => setCurrentLink(1)}
              className={currentLink === 1 ? "active" : ""}
            >
              <a href="#">
                <MdSpaceDashboard /> <span> Dashboard</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(2)}
              className={currentLink === 2 ? "active" : ""}
            >
              <a href="#">
                <RiDashboard2Fill /> <span> Riders</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(3)}
              className={currentLink === 3 ? "active" : ""}
            >
              <a href="#">
                <FaAddressCard /> <span> Payment Details</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(4)}
              className={currentLink === 4 ? "active" : ""}
            >
              <a href="#">
                <GiTwirlCenter /> <span> Learning center</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(5)}
              className={currentLink === 5 ? "active" : ""}
            >
              <a href="#">
                <BsFillChatTextFill /> <span> FAQ</span>
              </a>
            </li>
            <li
              onClick={() => setCurrentLink(6)}
              className={currentLink === 6 ? "active" : ""}
            >
              <a href="#">
                <IoSettings /> <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveSection>
    </>
  );
};

export default Slidebar;
