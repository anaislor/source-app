import React from "react";
import "./../styles/components/GridContainer.scss";

function GridContainer({ movies, selectMovie, selectedMovie, search }) {
  return (
    <ul className="gird-container">
      {movies
        .filter((movie) =>
          movie.title.toUpperCase().includes(search.toUpperCase())
        )
        .map((movie) => (
          <li
            key={movie.id}
            className={`grid-container-item ${
              selectedMovie === movie.id ? "selected" : ""
            }`}
            onClick={() => selectMovie(movie.id)}
          >
            <input
              type="checkbox"
              checked={selectedMovie === movie.id}
              className="grid-container-item-checkbox checkbox-input"
              onChange={() => selectMovie(movie.id)}
            />
            {movie.isNew && (
              <div className="grid-container-item-new-tag">New</div>
            )}
            <div className="grid-container-item-image-container">
              <img src={`/assets/${movie.cover}`} alt={movie.title} />
            </div>
            <div className="grid-container-item-detail">
              <h3>
                {movie.season} {movie.title}
              </h3>
              {movie.categories && (
                <div className="grid-container-item-detail-tag">
                  {movie.categories}
                </div>
              )}
            </div>
          </li>
        ))}
    </ul>
  );
}

export default GridContainer;
