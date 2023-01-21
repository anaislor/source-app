import React from "react";
import GridContainer from "../components/GridContainer";
import data from "./../data.json";
import "./../styles/views/Wishlist.scss";
import { useState } from "react";
import ListContainer from "../components/ListContainer";
import { useCallback } from "react";
import { ReactComponent as Grid } from "./../assets/icons/icon-grid.svg";
import { ReactComponent as List } from "./../assets/icons/icon-list.svg";
import { ReactComponent as Search } from "./../assets/icons/Icon-search.svg";

function Wishlist() {
  const [movies, setMovies] = useState([...data.movie]);
  const [selectedMovie, setselectedMovie] = useState(null);
  const [displayMode, setDisplayMode] = useState("grid");
  const [search, setSearch] = useState("");

  const selectMovie = useCallback(
    (movieId) => {
      setselectedMovie(selectedMovie === movieId ? null : movieId);
    },
    [movies]
  );

  const deletemovie = () => {
    const filtermovies = movies.filter((movie) => movie.id !== selectedMovie);
    setMovies(filtermovies);
  };

  return (
    <div className="view">
      <div className="view-header">
        <div className="view-header-row">
          <h1 className="view-header-row-title">Wishlist</h1>
          <div className="view-header-search-input input">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </div>
          <button className="input">Filters</button>
          <button className="view-header-button primary-button">
            Add a movie
          </button>
          <div className="view-header-switch-button switch-button">
            <button
              onClick={() => setDisplayMode("grid")}
              className={`${displayMode === "grid" ? "selected" : ""}`}
            >
              <Grid />
            </button>
            <button
              onClick={() => setDisplayMode("list")}
              className={`${displayMode === "list" ? "selected" : ""}`}
            >
              <List />
            </button>
          </div>
        </div>
        <div className="view-header-row">
          <div className="view-header-row-label">All</div>
        </div>
      </div>

      <div className="view-subheader">
        <h2 className="view-subheader-title">Titles ({movies.length})</h2>
        <button
          className="view-subheader-delete-button dangerous-action-button"
          onClick={deletemovie}
        >
          Delete selection
        </button>
      </div>
      {displayMode === "grid" ? (
        <GridContainer
          movies={movies}
          selectMovie={selectMovie}
          selectedMovie={selectedMovie}
          search={search}
        />
      ) : (
        <ListContainer
          movies={movies}
          selectMovie={selectMovie}
          selectedMovie={selectedMovie}
          search={search}
        />
      )}
    </div>
  );
}

export default Wishlist;
