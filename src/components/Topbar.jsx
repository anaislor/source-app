import React from "react";
import "./../styles/components/Topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-logo">N</div>
      <div className="topbar-profil">
        <div className="topbar-profil-picture"></div>
        <p>Sources</p>
        <button className="topbar-profil-button primary-button">3</button>
      </div>
    </div>
  );
}

export default Topbar;
