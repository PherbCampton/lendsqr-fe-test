// NavMenu.js
import { useState } from "react";
import {
  AVATAR,
  LOGO,
  NOTIFICATION,
  PROFILEDROP,
  SEARCHBAR,
} from "../../constants/assets";
import "./NavBar.scss";

export const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="nav-bar">
      <div className="nav-bar-wrapper">
        <div className="logo-search">
          <img height={"30px"} src={LOGO} alt="Company Logo" />
          <div className="search">
            <input
              type="text"
              className="input"
              value={searchValue}
              placeholder="Search for anything"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="search-bar">
              <img src={SEARCHBAR} alt="" />
            </div>
          </div>
        </div>
        <div className="personal">
          <div className="flex gap-3">
            <p className="doc">Docs</p>
            <img src={NOTIFICATION} />
          </div>
          <div className="flex gap-2">
            <img className="avatar" width="50px" height="50px" src={AVATAR} />
            <p className="profile-name">Adedeji</p>
            <img src={PROFILEDROP} />
          </div>
        </div>
      </div>
    </div>
  );
};
