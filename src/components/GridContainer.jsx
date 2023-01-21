import React from "react";
import "./../styles/components/GridContainer.scss";

function GridContainer({ shows, selectShow, selectedShow, search }) {
  return (
    <ul className="gird-container">
      {shows
        .filter((show) =>
          show.name.toUpperCase().includes(search.toUpperCase())
        )
        .map((show) => (
          <li
            key={show.id}
            className={`grid-container-item ${
              selectedShow === show.id ? "selected" : ""
            }`}
            onClick={() => selectShow(show.id)}
          >
            <input
              type="checkbox"
              checked={selectedShow === show.id}
              className="grid-container-item-checkbox checkbox-input"
              onChange={() => selectShow(show.id)}
            />
            {show.newShow && (
              <div className="grid-container-item-new-tag">New</div>
            )}
            <div className="grid-container-item-image-container">
              <img src="/assets/netflix-poster.jpeg" alt={show.name} />
            </div>
            <div className="grid-container-item-detail">
              <h3>
                {show.season} {show.name}
              </h3>
              {show.category && (
                <div className="grid-container-item-detail-tag">
                  {show.category}
                </div>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}

export default GridContainer;
