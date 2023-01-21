import React from "react";
import "./../styles/components/GridContainer.scss";

function GridContainer({ shows }) {
  return (
    <ul className="gird-container">
      {shows.map((show) => (
        <li key={show.id} className="grid-container-item">
          <div className="grid-container-item-image-container">
            <img src="/assets/netflix-poster.jpeg" alt={show.name} />
          </div>

          <h3>{show.season} {show.name}</h3>
        </li>
      ))}
    </ul>
  );
}

export default GridContainer;
