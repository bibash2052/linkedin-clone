import React from "react";
import "./Header.css";
import LinkedinLogo from "./assets/logo.svg";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisiorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import HeaderOptions from "./HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedinLogo} alt="Linkedin Logo" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisiorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationIcon} title="Notifications" />
        <HeaderOptions
          avatar="https://www.gravatar.com/avatar/32b812bfe79b11112df78fdfe2d11888.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
