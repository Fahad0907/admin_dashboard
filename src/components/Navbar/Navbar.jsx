import React from "react";
import { Nav } from "./NavbarStyle";
import { BiSearch } from "react-icons/bi";
import { Fade } from "react-reveal";
const Navbar = () => {
  return (
    <Nav>
      <Fade bottom>
        <div className="title">
          <h4>Hi Musafir,</h4>
          <h1>
            Welcome to <span>MY TAXI DASHBOARD</span>
          </h1>
        </div>
        <div className="search">
          <BiSearch />
          <input type="text" placeholder="Search" />
        </div>
      </Fade>
    </Nav>
  );
};

export default Navbar;
