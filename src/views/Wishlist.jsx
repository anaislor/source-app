import React from "react";
import GridContainer from "../components/GridContainer";
import data from "./../tvshows.json";
import "./../styles/views/Wishlist.scss";
import { useState } from "react";

function Wishlist() {
  const [shows, setShows] = useState(data.tvshows);
  const [selectedShow, setselectedShow] = useState(null);

  const selectShow = (showId) => {
    setselectedShow(selectedShow === showId ? null : showId);
  };

  const deleteShow = ()=>{
    const filterShows = shows.filter(show => show.id !== selectedShow)
    setShows(filterShows)
  }

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
        <h2 className="view-subheader-title">Titles ({shows.length})</h2>
        <button className="view-subheader-delete-button dangerous-action-button" onClick={deleteShow}>
          Delete selection
        </button>
      </div>

      <GridContainer
        shows={shows}
        selectShow={selectShow}
        selectedShow={selectedShow}
      />
    </div>
  );
}

export default Wishlist;
