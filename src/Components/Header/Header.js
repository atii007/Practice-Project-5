import React from "react";
import classes from "./Header.module.css";
import logo1 from "../../assets/img/logo/logo1.png";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div className={classes["main-container"]}>
      <div className={classes["main-header"]}>
        <Topbar />
      </div>
      <div className={classes.header1}>
        <div className={classes["header1-container"]}>
          <a>
            <img className={classes["header-img"]} alt="logo" src={logo1} />
          </a>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
