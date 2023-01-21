import React from "react";
import "./../styles/views/Wishlist.scss";

function Wishlist() {
  return (
    <div className="view">
      <div className="view-header">
        <div className="view-header-row">
          <h1 className="view-header-row-title">Wishlist</h1>
          <input type="text" className="view-header-search-input input" />
          <button className="input">Filters</button>
          <button className="view-header-button primary-button">
            Add a movie
          </button>
          <div className="view-header-switch-button switch-button">
            <button>Grid</button>
            <button>List</button>
          </div>
        </div>
        <div className="view-header-row">
          <div className="view-header-row-label">All</div>
        </div>
      </div>

      <div className="view-subheader">
        <h2 className="view-subheader-title">Titles</h2>
        <button className="view-subheader-delete-button dangerous-action-button">Delete selection</button>
      </div>
    </div>
  );
}

export default Wishlist;
