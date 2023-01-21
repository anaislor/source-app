import React from "react";
import GridContainer from "../components/GridContainer";
import data from "./../data.json";
import "./../styles/views/Wishlist.scss";
import { useState } from "react";
import ListContainer from "../components/ListContainer";
import { useCallback } from "react";
import WishlistHeader from "../components/WishlistHeader";

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
      <WishlistHeader
        search={search}
        setSearch={setSearch}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        movies={movies}
        deletemovie={deletemovie}
      />

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
