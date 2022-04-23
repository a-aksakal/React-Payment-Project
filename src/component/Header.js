import React, { useContext } from "react";
import logo from "../assets/img/ecozum.jpg";
import profile from "../assets/img/profile.png";
import LoginContext from "../store/LoginContext";

import "./Header.css";
function Header(props) {
  const { name } = useContext(LoginContext);

  return (
    <div className="header" style={props.style}>
      <div className="header-image">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div className="header-login">
          <img src={profile} alt="profile"></img>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
