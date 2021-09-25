import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

function MainNavigation(props) {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    function drawerOpen(){
        setDrawerIsOpen(!drawerIsOpen);
    }
  return (
      <React.Fragment>
      {drawerIsOpen ?
      <SideDrawer>
          <nav className="main-navigation__drawer-nav">
              <NavLinks/>
          </nav>
      </SideDrawer> : 
      <MainHeader>
      <button className="main-navigation__menu-btn" onClick={drawerOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      </MainHeader>
      }
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={drawerOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className="main-navigation__title">
        <Link>Your Places</Link>
      </h1>
      <nav className="main-navigation__header-nav">
          <NavLinks/>
      </nav>
    </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
