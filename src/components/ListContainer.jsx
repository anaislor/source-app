import React from "react";
import "./../styles/components/ListContainer.scss";

function ListContainer({ movies, selectMovie, selectedMovie, search }) {
  return (
    <table className="list-container">
      <thead className="list-container-header">
        <tr>
          <td>
          </td>
          <td>Title:</td>
          <td>Category</td>
          <td>Best quality</td>
        </tr>
      </thead>
      <tbody className="list-container-body">
        {movies
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .map((movie) => (
            <tr key={movie.id}>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className="checkbox-input"
                  checked={selectedMovie === movie.id}
                  onChange={() => selectMovie(movie.id)}
                />
              </td>
              <td>
                <div className="list-container-body-item-name">
                  <div className="list-container-body-image-container">
                    <img src="/assets/netflix-poster.jpeg" alt={movie.title} />
                  </div>
                  {movie.season} {movie.title}
                </div>
              </td>
              <td>
                {movie.category && (
                  <div className="grid-container-item-detail-tag">
                    {movie.category}
                  </div>
                )}
              </td>
              <td>{movie.quality}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ListContainer;
